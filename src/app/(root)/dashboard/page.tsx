import DetailsDialog from "./_components/DetailsDialog";
import QuizMeCard from "./_components/QuizMeCard";
import HistoryCard from "./_components/HistoryCard";

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
    </main>
  );
};

export default Dashboard;
