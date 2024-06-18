"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="self-end w-full" disabled={pending}>
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin inline-block" />
      ) : (
        "Submit"
      )}
    </Button>
  );
}
