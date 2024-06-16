import { TypographyH1 } from "@/components/ui/typographyH1";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  async function handleUpdateUsername() {
    "use server";

    try {
      const res = await fetch("/api/update-username", {
        method: "POST",
        body: JSON.stringify({ username: "test" }),
      });

      if (!res.ok) {
        console.log("Failed to update username");
        throw new Error("Failed to update username");
      }

      return res.json();
    } catch (error) {
      const errorObj = error as Error;

      throw new Error(errorObj.message);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <TypographyH1>Form Actions</TypographyH1>
      <Card>
        <CardHeader>
          <CardTitle>Raw Form</CardTitle>
          <CardDescription>
            This is a simple example of a form that uses the form action
            attribute to submit a form to the server.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={handleUpdateUsername}>
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="Search..." />
            <Button>Submit</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
