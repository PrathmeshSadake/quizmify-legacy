import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HotTopicsCard = () => {
  return (
    <Card className='col-span-4'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it.
        </CardDescription>
      </CardHeader>
      <CardContent className='px-6'>
        <Badge variant='outline' className='rounded-md py-1 px-1.5'>Badge</Badge>
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;
