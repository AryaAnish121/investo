import { Button } from "@/components/ui/button";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-[calc(100vh-82px)]">
        <div className="">
          <h1 className="text-8xl w-[1050px] mb-12 font-bold text-white">
            Test out{" "}
            <span className={`text-green-500 ${pixelify.className}`}>
              investing
            </span>{" "}
            without using actual money
          </h1>
          <Button className="font-bold px-8 py-6">Get Started (Sign in) →</Button>
        </div>
      </div>
    </>
  );
}
