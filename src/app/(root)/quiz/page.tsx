import QuizCreation from "@/components/QuizCreation";
export const metadata = {
  title: "Quizmify",
  description: "Quiz yourself on anything!",
};

interface Props {
  searchParams: {
    topic?: string;
  };
}
const QuizPage = async ({ searchParams }: Props) => {
  return <QuizCreation topic={searchParams.topic ?? ""} />;
};

export default QuizPage;
