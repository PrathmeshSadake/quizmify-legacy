import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import History from "@/components/History";

const RecentActivityCard = () => {
  const { userId }: { userId: string | null } = auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <Card className='col-span-4 lg:col-span-3'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>
          <Link href='/history'>Recent Activity</Link>
        </CardTitle>
        <CardDescription>
          {/* You have played a total of {games_count} quizzes. */}
          You have played a total of 10 quizzes.
        </CardDescription>
      </CardHeader>
      <CardContent className='max-h-[580px] overflow-scroll'>
        <History limit={10} userId={userId} />
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;
