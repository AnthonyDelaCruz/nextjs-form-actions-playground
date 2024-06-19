import { TypographyH1 } from "@/components/ui/typographyH1";
import { TypographyLead } from "@/components/ui/typographyLead";
import UserList from "@/components/UserList";
import { Suspense } from "react";
import Form from "@/components/Form";
import { TypographyP } from "@/components/ui/typographyP";
import { Loader2 } from "lucide-react";

export default async function Home() {
  return (
    <main className="container flex flex-col min-h-screen items-center gap-5 p-24">
      <TypographyH1>Server Actions</TypographyH1>

      <TypographyLead>
        This is a simple example of a form that uses the{" "}
        <span className="font-semibold">action</span> attribute to invoke a
        server action.
      </TypographyLead>

      <div className="w-1/3">
        <Form />
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
