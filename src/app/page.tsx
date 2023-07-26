"use client";
import Sidebar from "@/components/Sidebar";
import TopCard from "@/components/Home/TopCard";
import MonthlyBalance from "@/components/Home/MonthlyBalance";
import Chart from "@/components/Home/Chart";
import CredCard from "@/components/Home/CreditCard";

export default function Home() {
  return (
    <main className="flex gap-16">
      <Sidebar />
      <div className="mb-16">
        <TopCard />
        <div className="flex gap-6">
          <Chart />
        </div>
        <div className="flex gap-6">
          <MonthlyBalance />
          <CredCard />
        </div>
      </div>
    </main>
  );
}
