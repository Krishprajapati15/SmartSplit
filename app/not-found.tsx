"use client";

import { Button } from "@/components/ui/button";
import Mascot from "@/components/ui/mascot";
import { Home, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    if (error) {
      console.error("An error occurred:", error);
    }
  }, [error]);

  return (
    <main className="flex h-dvh flex-col items-center justify-center bg-background p-4 text-foreground">
      <div className="space-y-6 text-center">
        <h1 className="flex items-center justify-center gap-2 text-8xl font-extrabold text-primary md:text-9xl">
          <span>4</span>
          <Mascot className="size-[4.5rem] md:size-[7rem]" />
          <span>4</span>
        </h1>
        <h2 className="text-2xl font-semibold md:text-4xl">
          Something went wrong
        </h2>
        <p className="max-w-lg text-sm text-muted-foreground md:text-base">
          Oops! An unexpected error occurred. You can try again or return home.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button onClick={() => reset()}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Try again
          </Button>

          <Button asChild variant="secondary">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go back home
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Billicious. All rights reserved.
      </div>
    </main>
  );
}
