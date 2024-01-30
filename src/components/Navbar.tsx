import Link from "next/link";
import UserAccountNav from "./UserAccountNav";
import { SignedIn } from '@clerk/nextjs';

const Navbar = async () => {
  return (
    <div className='fixed inset-0 top-0 bg-white py-2 z-10 h-fit border-b border-zinc-300'>
      <div className='px-8 mx-auto max-w-7xl flex items-center justify-between'>
        <Link href={"/"} className='flex items-center gap-2'>
          <p className='rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white'>
            Quizmify
          </p>
        </Link>
        <SignedIn>
        <UserAccountNav />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
