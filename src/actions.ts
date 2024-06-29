"use server"; // This tells NextJS that all methods exported from this file will be server-actions

import * as yup from "yup";
import prisma from "./db/db";
import { revalidatePath } from "next/cache";
import { ServerActionResponse, ResponseType } from "./types";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email"),
  password: yup.string().min(8, "Password must be at least 8 characters"),
});

export async function createUserServerAction(
  prevState: ServerActionResponse,
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await schema.validate(
      {
        email,
        password,
      },
      { abortEarly: false }
    );

    await new Promise((resolve) => setTimeout(resolve, 2000));

    await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    revalidatePath("/");

    return { message: "User Created", type: ResponseType.SUCCESS };
  } catch (error) {
    console.log(error);

    return { message: "Something went wrong", type: ResponseType.ERROR };
  }
}
