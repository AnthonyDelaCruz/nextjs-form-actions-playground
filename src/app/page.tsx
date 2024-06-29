import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import { TypographyH1 } from "@/components/ui/typographyH1";
import UserList from "@/components/UserList";
import { TypographyP } from "@/components/ui/typographyP";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BasicServerActionForm from "@/components/forms/BasicServerActionForm";
import FormWithValidation from "@/components/forms/FormWithValidation";
import FormWithValidationAndState from "@/components/forms/FormWithValidationAndState";

export default async function Home() {
  return (
    <main className="px-4 sm:container sm:px-0 flex flex-col gap-4 items-center justify-center min-h-screen">
      <TypographyH1>Server Actions</TypographyH1>

      <div className="xl:w-1/3 lg:w-1/2 md:w-2/3 xs:w-full">
        <Tabs defaultValue="basic">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="validation">Validation</TabsTrigger>
            <TabsTrigger value="state">State</TabsTrigger>
          </TabsList>
          <TabsContent value="basic">
            <BasicServerActionForm />
          </TabsContent>
          <TabsContent value="validation">
            <FormWithValidation />
          </TabsContent>
          <TabsContent value="state">
            <FormWithValidationAndState />
          </TabsContent>
        </Tabs>
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
