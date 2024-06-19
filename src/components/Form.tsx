import { useFormState } from "react-dom";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import prisma from "@/db/db";
import { revalidatePath } from "next/cache";
import SubmitButton from "./SubmitButton";
import * as yup from "yup";
import { handleSubmit } from "@/actions";
import { TypographyP } from "./ui/typographyP";

export default function Form() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-3">
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

            <Button type="submit">Sumbit Form</Button>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </>
  );
}
