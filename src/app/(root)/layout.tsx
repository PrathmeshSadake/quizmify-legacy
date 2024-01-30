import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";

const AppLayout = async ({ children }: { children: ReactNode }) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  return (
    <div>
      <Navbar />
      <div className='py-28 px-8 mx-auto max-w-7xl'>{children}</div>
    </div>
  );
};

export default AppLayout;
