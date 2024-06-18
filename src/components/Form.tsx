import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import prisma from "@/db/db";
import { revalidatePath } from "next/cache";
import SubmitButton from "./SubmitButton";

export default function Form() {
  async function handleInsertRecord(formData: FormData) {
    "use server";

    await prisma.user.create({
      data: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      },
    });

    revalidatePath("/");
  }

  return (
    <form className="flex flex-col gap-3" action={handleInsertRecord}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="text"
          placeholder="johndoe@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="text" />
      </div>

      <SubmitButton />
      {/* <Button type="submit">Sumbit Form</Button> */}
    </form>
  );
}
