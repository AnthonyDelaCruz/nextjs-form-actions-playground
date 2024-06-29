import React from "react";
import { revalidatePath } from "next/cache";

import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import prisma from "../../db/db";
import SubmitButton from "../SubmitButton";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email"),
  password: yup.string().min(8, "Password must be at least 8 characters"),
});

export default function FormWithValidation() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      await schema.validate({
        email,
        password,
      });

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
        <CardTitle>Server Action Form with Yup Validation.</CardTitle>
        <CardDescription>View errors in the server console</CardDescription>
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
              defaultValue="not-an-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="text"
              defaultValue="password"
            />
          </div>

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
