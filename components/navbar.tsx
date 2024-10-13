"use client";

import { Pixelify_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [isLoggedIn] = useState(true);
  const [searchActivated] = useState(true);

  return (
    <>
      <div className="flex justify-between items-center px-[50px] py-[20px] w-[100%]">
        <div>
          <h1 className={`${pixelify.className} text-4xl text-white`}>
            <Link href="/">investo</Link>
          </h1>
        </div>
        <div className="w-4/12">
          {searchActivated && (
            <Input
              className="font-semibold text-white text-xs text-gray-200 placeholder:text-gray-400 online-none border-[1.5px] border-gray-500 px-6 py-5"
              placeholder="Search a stock..."
            />
          )}
        </div>
        <div>
          {isLoggedIn ? (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <Button className="font-bold">Login</Button>
          )}
        </div>
      </div>
      {/* <hr /> */}
    </>
  );
};

export default Navbar;
