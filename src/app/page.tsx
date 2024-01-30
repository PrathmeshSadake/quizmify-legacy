import Link from "next/link";
import { SignedIn, SignedOut, currentUser } from "@clerk/nextjs";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle className='text-center'>Welcome to Quizmify</CardTitle>
          <CardDescription className='text-center pt-2'>
            Quizmify is a platform for creating quizzes using AI.{" "}
            <SignedOut>Get started by logging in below</SignedOut>
          </CardDescription>
        </CardHeader>
        <div className='flex justify-center pb-4'>
          <SignedOut>
            <Button asChild variant={"outline"}>
              <Link href={"/sign-in"}>Sign In with Google</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button asChild variant={"outline"}>
              <Link href={"/dashboard"}>
                Continue to dashboard <MoveRight className='ml-2' />
              </Link>
            </Button>
          </SignedIn>
        </div>
      </Card>
    </div>
  );
}
