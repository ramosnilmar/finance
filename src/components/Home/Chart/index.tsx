import type { ApexOptions } from "apexcharts";
import Card from "@/components/Card";
import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Chart() {
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
    <>
      <Card
        title="Despesas por categoria"
        action={{ title: "Ver mais", link: "/expenses" }}
      >
        <div className="h-72 flex justify-center items-center">
          <ApexChart
            options={options}
            series={[70, 91, 125, 80]}
            type="donut"
          />
        </div>
      </Card>
      <Card
        title="Receitas por categoria"
        action={{ title: "Ver mais", link: "/incomes" }}
      >
        <div className="h-72 flex justify-center items-center">
          <ApexChart options={options} series={[4600]} type="donut" />
        </div>
      </Card>
    </>
  );
}
