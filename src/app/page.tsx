import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex gap-16">
      <Sidebar />
      <Card />
    </main>
  );
}
