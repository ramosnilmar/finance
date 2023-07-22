"use client";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import TopCard from "@/components/Home/TopCard";
import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";
import BalacoMensal from "@/components/Home/BalancoMensal";

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
      <div className="mb-16">
        <TopCard />
        <div className="flex gap-6">
          <Card
            title="Despesas por categoria"
            action={{ title: "Ver mais", link: "/despesas" }}
          >
            <div className="h-72 flex justify-center items-center">
              <Chart
                options={options}
                series={[70, 91, 125, 80]}
                type="donut"
              />
            </div>
          </Card>
          <Card
            title="Receitas por categoria"
            action={{ title: "Ver mais", link: "/receitas" }}
          >
            <div className="h-72 flex justify-center items-center">
              <Chart options={options} series={[4600]} type="donut" />
            </div>
          </Card>
        </div>
        <div className="flex gap-6">
          <BalacoMensal />
          <BalacoMensal />
        </div>
      </div>
    </main>
  );
}
