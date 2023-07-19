"use client";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import TopCard from "@/components/TopCard";
import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Home() {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };

  return (
    <main className="flex gap-16">
      <Sidebar />
      <div>
        <TopCard />
        <div className="flex gap-6">
          <Card
            title="Despesas por categoria"
            action={{ title: "Ver mais", link: "/despesas" }}
          >
            <div className="h-96 flex justify-center items-center">
              <Chart options={options} series={[44, 55]} type="donut" />
            </div>
          </Card>
          <Card
            title="Receitas por categoria"
            action={{ title: "Ver mais", link: "/receitas" }}
          >
            <div className="h-96 flex justify-center items-center">
              <Chart options={options} series={[70, 91, 125]} type="donut" />
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
