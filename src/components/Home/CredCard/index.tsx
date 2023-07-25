import Card from "@/components/Card";
import S from "./style.module.css";
import { formatPrice } from "@/utils/formatPrice";

export default function CredCard() {
  return (
    <Card
      title="Cartão de Crédito"
      action={{ title: "Ver mais", link: "/cred-card" }}
    >
      <div className="flex gap-6 px-8 py-6"></div>
    </Card>
  );
}
