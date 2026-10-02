import { cookies } from "next/headers";

export async function setUserSession(userId: number) {
  const cookieStore = await cookies();

  cookieStore.set("shopsphere-user", String(userId), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function getUserSession() {
  const cookieStore = await cookies();

  const userId = cookieStore.get("shopsphere-user")?.value;

  if (!userId) {
    return null;
  }

  const parsedUserId = Number(userId);

  if (Number.isNaN(parsedUserId)) {
    return null;
  }

  return parsedUserId;
}

export async function clearUserSession() {
  const cookieStore = await cookies();

  cookieStore.delete("shopsphere-user");
}