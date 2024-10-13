"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: "700",
});

const chartData = [
  { date: "1975-01-01", close: 10.23 },
  { date: "1976-01-01", close: 11.01 },
  { date: "1977-01-01", close: 12.45 },
  { date: "1978-01-01", close: 13.12 },
  { date: "1979-01-01", close: 13.67 },
  { date: "1980-01-01", close: 14.33 },
  { date: "1981-01-01", close: 15.21 },
  { date: "1982-01-01", close: 15.89 },
  { date: "1983-01-01", close: 16.43 },
  { date: "1984-01-01", close: 17.12 },

  { date: "1985-01-01", close: 17.98 },
  { date: "1986-01-01", close: 18.65 },
  { date: "1987-01-01", close: 19.42 },
  { date: "1988-01-01", close: 20.14 },
  { date: "1989-01-01", close: 21.03 },
  { date: "1990-01-01", close: 21.77 },
  { date: "1991-01-01", close: 22.34 },
  { date: "1992-01-01", close: 23.12 },
  { date: "1993-01-01", close: 23.89 },
  { date: "1994-01-01", close: 24.56 },

  { date: "1995-01-01", close: 25.23 },
  { date: "1996-01-01", close: 26.12 },
  { date: "1997-01-01", close: 27.45 },
  { date: "1998-01-01", close: 28.12 },
  { date: "1999-01-01", close: 29.34 },
  { date: "2000-01-01", close: 30.67 },
  { date: "2001-01-01", close: 31.45 },
  { date: "2002-01-01", close: 32.01 },
  { date: "2003-01-01", close: 33.12 },
  { date: "2004-01-01", close: 34.89 },

  { date: "2005-01-01", close: 36.45 },
  { date: "2006-01-01", close: 38.12 },
  { date: "2007-01-01", close: 39.87 },
  { date: "2008-01-01", close: 40.56 },
  { date: "2009-01-01", close: 41.89 },
  { date: "2010-01-01", close: 43.21 },
  { date: "2011-01-01", close: 44.89 },
  { date: "2012-01-01", close: 46.56 },
  { date: "2013-01-01", close: 48.21 },
  { date: "2014-01-01", close: 49.89 },

  { date: "2015-01-01", close: 51.23 },
  { date: "2016-01-01", close: 52.89 },
  { date: "2017-01-01", close: 54.45 },
  { date: "2018-01-01", close: 56.12 },
  { date: "2019-01-01", close: 58.67 },
  { date: "2020-01-01", close: 60.78 },
  { date: "2021-01-01", close: 62.45 },
  { date: "2022-01-01", close: 64.12 },
  { date: "2023-01-01", close: 66.34 },
  { date: "2024-01-01", close: 68.12 },
];

const chartConfig = {
  price: {
    label: "Market Close",
  },
  close: {
    label: "Market Close",
  },
} satisfies ChartConfig;

const Stock = () => {
  return (
    <>
      <h2
        className={`mt-12 ml-20 text-4xl font-bold text-green-500 ${pixelify.className}`}
      >
        Adani Power
      </h2>
      <div className="flex mt-8">
        <div className="w-[70%] p-20 pt-0 pr-10">
          <div>
            <div className="chart border border-2 border-gray-500 rounded-lg p-10 pl-0">
              <ChartContainer
                config={chartConfig}
                className="aspect-auto h-[400px] w-full"
              >
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return date.toLocaleDateString("en-US", {
                        year: "numeric",
                      });
                    }}
                  />
                  <YAxis
                    dataKey="close"
                    tickLine={false}
                    axisLine={false}
                    // tickMargin={8}
                    // minTickGap={32}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        className="w-[150px]"
                        nameKey="views"
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          });
                        }}
                      />
                    }
                  />
                  <Line
                    dataKey={"close"}
                    type="monotone"
                    stroke="#16a34a"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </div>
            <div className="selection mt-8 flex justify-center items-center w-[100%]">
              <div className="flex rounded-xl border border-2 border-gray-500 p-2">
                <Button className="mr-3 font-bold">5Y</Button>
                <Button className=" mr-3 font-bold">3Y</Button>
                <Button className="font-bold">7D</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] p-20 pt-0 pl-10 pr-24">
          <div className="rounded-md p-8 border border-2 border-gray-500 h-[480px]">
            <div className="flex flex-col justify-between h-[100%]">
              <div>
                <div className="flex justify-between mb-8">
                  <p className="text-[18px] text-white font-semibold text-gray-300">
                    Price:{" "}
                  </p>
                  <Input
                    placeholder="Price"
                    value={69}
                    disabled
                    className="bg-gray-800 w-[150px] font-semibold text-gray-200 placeholder:text-gray-300 online-none border-[1.5px] border-gray-500 px-4 py-2"
                  />
                </div>
                <div className="flex justify-between">
                  <p className="text-[18px] text-white font-semibold text-gray-300">
                    Quantity:{" "}
                  </p>
                  <Input
                    placeholder="Quantity"
                    value={1}
                    className="w-[150px] font-semibold text-gray-200 placeholder:text-gray-300 online-none border-[1.5px] border-gray-500 px-4 py-2"
                  />
                </div>
              </div>
              <div className="flex w-[100%] justify-between">
                <Button className="font-bold w-[48%] bg-green-600">Buy</Button>
                <Button className="font-bold w-[48%]" variant="destructive">
                  Sell
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stock;
