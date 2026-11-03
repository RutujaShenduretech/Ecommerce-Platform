// import { cookies } from "next/headers";

// export async function setUserSession(userId: number) {
//   const cookieStore = await cookies();

//   cookieStore.set("shopsphere-user", String(userId), {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     path: "/",
//     maxAge: 60 * 60 * 24 * 7, // 7 days
//   });
// }

// export async function getUserSession() {
//   const cookieStore = await cookies();

//   const userId = cookieStore.get("shopsphere-user")?.value;

//   if (!userId) {
//     return null;
//   }

//   const parsedUserId = Number(userId);

//   if (Number.isNaN(parsedUserId)) {
//     return null;
//   }

//   return parsedUserId;
// }

// export async function clearUserSession() {
//   const cookieStore = await cookies();

//   cookieStore.delete("shopsphere-user");
// }



import { cookies } from "next/headers";

const COOKIE_NAME = "shopsphere-user";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
};

export async function setUserSession(userId: number) {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, String(userId), {
    ...COOKIE_OPTIONS,
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getUserSession(): Promise<number | null> {
  const cookieStore = await cookies();

  const userId = cookieStore.get(COOKIE_NAME)?.value;

  if (!userId) {
    return null;
  }

  const parsedUserId = Number(userId);

  if (!Number.isInteger(parsedUserId) || parsedUserId <= 0) {
    return null;
  }

  return parsedUserId;
}

export async function clearUserSession() {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, "", {
    ...COOKIE_OPTIONS,
    maxAge: 0,
  });
}
