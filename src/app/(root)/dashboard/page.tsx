import DetailsDialog from "./_components/DetailsDialog";
import QuizMeCard from "./_components/QuizMeCard";
import HistoryCard from "./_components/HistoryCard";
import HotTopicsCard from "./_components/HotTopicsCard";
import RecentActivityCard from "./_components/RecentActivityCard";

export const metadata = {
  title: "Dashboard | Quizmify",
};

const Dashboard = () => {
  return (
    <main>
      <div className='flex items-center'>
        <h2 className='mr-2 text-3xl font-semibold tracking-tight'>
          Dashboard
        </h2>
        <DetailsDialog />
      </div>

      <div className='grid gap-4 mt-4 md:grid-cols-2'>
        <QuizMeCard />
        <HistoryCard />
      </div>
      <div className='grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7'>
        <HotTopicsCard />
        <RecentActivityCard />
      </div>
    </main>
  );
};

export default Dashboard;
