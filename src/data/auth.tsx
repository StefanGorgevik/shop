// data/products.ts

import { User } from "../types/user";

export const singIn = async (
  username: string,
  password: string
): Promise<User> => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: 'kminchelle',
      password: '0lelplR',
      // expiresInMins: 60, // optional
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to login");
  }
  const data = await res.json();
  return data;
};
