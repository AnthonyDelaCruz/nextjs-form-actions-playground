import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import { TypographyH1 } from "@/components/ui/typographyH1";
import UserList from "@/components/UserList";
import { TypographyP } from "@/components/ui/typographyP";
import BasicServerActionForm from "@/components/forms/BasicServerActionForm";
import FormWithValidation from "@/components/forms/FormWithValidation";
import FormWithValidationAndState from "@/components/forms/FormWithValidationAndState";

export default async function Home() {
  return (
    <main className="container flex flex-col min-h-screen items-center gap-5 p-24">
      <TypographyH1>Server Actions</TypographyH1>

      <div className="w-1/3">
        <BasicServerActionForm />
        {/* <FormWithValidation /> */}
        {/* <FormWithValidationAndState /> */}
      </div>

      <Suspense
        fallback={
          <TypographyP>
            Loading Users{" "}
            <Loader2 className="mr-2 h-4 w-4 animate-spin inline-block" />
          </TypographyP>
        }
      >
        <UserList />
      </Suspense>
    </main>
  );
}
