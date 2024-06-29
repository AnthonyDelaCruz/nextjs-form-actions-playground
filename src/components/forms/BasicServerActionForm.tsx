import React from "react";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import prisma from "@/db/db";
import { revalidatePath } from "next/cache";
import SubmitButton from "../SubmitButton";
import { Label } from "../ui/label";

export default function BasicServerActionForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      await prisma.user.create({
        data: {
          email,
          password,
        },
      });

      revalidatePath("/");
    } catch (error) {
      console.log(error);
      console.log("Something went wrong!");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Form</CardTitle>
        <CardDescription>
          No validation and state, just a form that invokes a server action when
          submitted.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3" action={handleSubmit}>
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
        </form>
      </CardContent>
    </Card>
  );
}
