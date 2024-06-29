"use client";

import React, {
  useActionState, // This is the updated counterpart useFormState, but we use useFormState for this exmaple because useActionState is not yet stable and breaks the app
  useEffect,
} from "react";
import { useFormState } from "react-dom";

import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import SubmitButton from "../SubmitButton";
import { createUserServerAction } from "@/actions";
import { useToast } from "../ui/use-toast";
import { ServerActionResponse } from "@/types";

const initialState: ServerActionResponse = {
  message: "",
  type: undefined,
};

export default function FormWithValidationAndState() {
  const { toast } = useToast();
  const [response, formAction] = useFormState(
    createUserServerAction,
    initialState
  );

  useEffect(() => {
    if (response.type) {
      toast({
        title: response.message,
        variant: response.type,
      });
    }
  }, [response]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Form with validation and state.</CardTitle>
        <CardDescription>
          Same with <span className="font-bold">Validation</span> form but with
          client side state. Try submitting the form with invalid data.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3" action={formAction}>
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
