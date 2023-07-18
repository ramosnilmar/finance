import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import TopCard from "@/components/TopCard";

export default function Home() {
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
            <div className="h-96">
              <div className="border-"></div>
            </div>
          </Card>
          <Card
            title="Receitas por categoria"
            action={{ title: "Ver mais", link: "/receitas" }}
          >
            <div className="h-96"></div>
          </Card>
        </div>
      </div>
    </main>
  );
}
