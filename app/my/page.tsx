import { Pixelify_Sans } from "next/font/google";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: "700",
});

export default function Profile() {
  return (
    <>
      <div className="py-16 px-56">
        <div>
          <h2 className="text-green-600 font-semibold text-3xl mb-7">
            My <span className={pixelify.className}>stonks</span>
          </h2>
          <div className="border-[1.5px] border-gray-500 rounded-md">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="p-5 text-center font-bold">Name</TableHead>
                  <TableHead className="p-5 text-center font-bold">Quantity</TableHead>
                  <TableHead className="p-5 text-center font-bold">Buy Price</TableHead>
                  <TableHead className="p-5 text-center font-bold">Current Price</TableHead>
                  <TableHead className="p-5 text-center font-bold">Profit</TableHead>
                  <TableHead className="p-5 text-center font-bold">Purchase Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-green-700">
                  <TableCell className="p-5 text-center font-bold text-white"><Link href="/stocks/1">Adani Power</Link></TableCell>
                  <TableCell className="p-5 text-center font-bold text-white">5</TableCell>
                  <TableCell className="p-5 text-center font-bold text-white">1800</TableCell>
                  <TableCell className="p-5 text-center font-bold text-white">169</TableCell>
                  <TableCell className="p-5 text-center font-bold text-white">1631</TableCell>
                  <TableCell className="p-5 text-center font-bold text-white">13/10/2022</TableCell>
                </TableRow>
                <TableRow className="hover:bg-green-700">
                  <TableCell className="p-5 text-center font-bold text-white"><Link href="/stocks/2">Realiance Power</Link></TableCell>
                  <TableCell className="p-5 text-center font-bold text-white">10</TableCell>
                  <TableCell className="p-5 text-center font-bold text-white">996</TableCell>
                  <TableCell className="p-5 text-center font-bold text-white">438</TableCell>
                  <TableCell className="p-5 text-center font-bold text-white">558</TableCell>
                  <TableCell className="p-5 text-center font-bold text-white">13/10/2021</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
