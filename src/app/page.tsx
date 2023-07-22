"use client";
import Sidebar from "@/components/Sidebar";
import TopCard from "@/components/Home/TopCard";
import dynamic from "next/dynamic";
import BalacoMensal from "@/components/Home/BalancoMensal";
import Chart from "@/components/Home/Chart";

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
          <BalacoMensal />
          <BalacoMensal />
        </div>
      </div>
    </main>
  );
}
