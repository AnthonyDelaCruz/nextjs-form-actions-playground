import prisma from "@/db/db";
import { User } from "@prisma/client";
import React from "react";
import { TypographyP } from "./ui/typographyP";

async function fetchUsers(): Promise<User[]> {
  const users = await prisma.user.findMany();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 2000);
  });
}

export default async function UserList() {
  const users = await fetchUsers();

  if (!users.length) {
    return <TypographyP>No records available.</TypographyP>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
}
