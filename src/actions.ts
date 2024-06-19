"use server";

import * as yup from "yup";
import prisma from "./db/db";
import { revalidatePath } from "next/cache";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email"),
  password: yup.string().min(8, "Password must be at least 8 characters"),
});

// export async function handleUpdateUsername(formData: FormData) {
//   try {
//     const email = formData.get("email") as string;
//     const password = formData.get("password") as string;

//     const validation = await schema.validate(
//       {
//         email,
//         password,
//       },
//       { abortEarly: false }
//     );
//   } catch (error) {
//     const errorObj = error as yup.ValidationError;

//     const errors = errorObj.inner.map((err) => ({
//       path: err.path,
//       message: err.message,
//     }));

//     if (error instanceof yup.ValidationError) {
//       return {
//         errors,
//       };
//     }
//   }

//   await new Promise<void>((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 4000);
//   });

//   await prisma.user.create({
//     data: {
//       email,
//       password,
//     },
//   });

//   revalidatePath("/");
// }

export async function handleSubmit(
  prevState: { message: string },
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

    return { message: "User Created" };
  } catch (error) {
    return { message: "Something went wrong" };
  }
}
