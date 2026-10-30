// import { NextRequest, NextResponse } from "next/server";
// import { webcrypto } from "node:crypto";
// import { db } from "@/db";
// import { users } from "@/db/schema";
// import { eq } from "drizzle-orm";
// import { setUserSession } from "@/lib/auth";

// async function verifyPassword(
//   password: string,
//   storedPassword: string
// ) {
//   const [saltHex, storedHashHex] = storedPassword.split(":");

//   if (!saltHex || !storedHashHex) {
//     return false;
//   }

//   const salt = new Uint8Array(
//     saltHex.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))
//   );

//   const keyMaterial = await webcrypto.subtle.importKey(
//     "raw",
//     new TextEncoder().encode(password),
//     "PBKDF2",
//     false,
//     ["deriveBits"]
//   );

//   const hashBuffer = await webcrypto.subtle.deriveBits(
//     {
//       name: "PBKDF2",
//       salt,
//       iterations: 100000,
//       hash: "SHA-256",
//     },
//     keyMaterial,
//     256
//   );

//   const hashHex = Array.from(
//     new Uint8Array(hashBuffer)
//   )
//     .map((byte) => byte.toString(16).padStart(2, "0"))
//     .join("");

//   return hashHex === storedHashHex;
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();

//     const { email, password } = body;

//     if (!email || !password) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Email and password are required",
//         },
//         { status: 400 }
//       );
//     }

//     const normalizedEmail = email.toLowerCase().trim();

//     const result = await db
//       .select()
//       .from(users)
//       .where(eq(users.email, normalizedEmail));

//     if (result.length === 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid email or password",
//         },
//         { status: 401 }
//       );
//     }

//     const user = result[0];

//     const passwordValid = await verifyPassword(
//       password,
//       user.password
//     );

//     if (!passwordValid) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid email or password",
//         },
//         { status: 401 }
//       );
//     }

//     // Create login session
//     await setUserSession(user.id);

//     return NextResponse.json({
//       success: true,
//       message: "Login successful",
//       user: {
//         id: user.id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     console.error("LOGIN ERROR:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Login failed",
//       },
//       { status: 500 }
//     );
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import { webcrypto } from "node:crypto";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { setUserSession } from "@/lib/auth";

async function verifyPassword(
  password: string,
  storedPassword: string
) {
  const parts = storedPassword.split(":");

  if (parts.length !== 2) {
    return false;
  }

  const [saltHex, storedHashHex] = parts;

  const saltBytes = saltHex.match(/.{1,2}/g);

  if (!saltBytes) {
    return false;
  }

  const salt = new Uint8Array(
    saltBytes.map((byte) => parseInt(byte, 16))
  );

  const keyMaterial = await webcrypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const hashBuffer = await webcrypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    256
  );

  const hashHex = Array.from(
    new Uint8Array(hashBuffer)
  )
    .map((byte) =>
      byte.toString(16).padStart(2, "0")
    )
    .join("");

  return hashHex === storedHashHex;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const email = body.email?.toLowerCase().trim();
    const password = body.password;

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required.",
        },
        { status: 400 }
      );
    }

    // Find registered user
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    // User is NOT registered
    if (result.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Account not found. Please register first.",
        },
        { status: 404 }
      );
    }

    const user = result[0];

    // Verify password
    const passwordCorrect = await verifyPassword(
      password,
      user.password
    );

    if (!passwordCorrect) {
      return NextResponse.json(
        {
          success: false,
          message: "Incorrect password.",
        },
        { status: 401 }
      );
    }

    // Create login session
    await setUserSession(user.id);

    return NextResponse.json({
      success: true,
      message: "Login successful!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}