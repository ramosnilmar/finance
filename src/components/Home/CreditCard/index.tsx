import Card from "@/components/Card";
import S from "./style.module.css";
import { formatPrice } from "@/utils/formatPrice";

const creditCards = [
  {
    id: 1,
    name: "Nubank",
    invoice: 1800,
    limit: 5000,
    color: "#8A05BE",
    colseData: "10/10/2023",
  },
  {
    id: 2,
    name: "Itaú",
    invoice: 2500,
    limit: 8000,
    color: "#ffaf11",
    colseData: "10/12/2023",
  },
];

export default function CreditCard() {
  return (
    <Card
      title="Cartão de Crédito"
      action={{ title: "Ver mais", link: "/credit-card" }}
    >
      <div className="flex flex-col gap-4">
        {creditCards.map((card) => (
          <div key={card.id} className="flex px-6 gap-4">
            <div
              className={S.logoCard}
              style={{ background: card.color }}
            ></div>
            <div className="flex flex-col">
              <div className={S.title}>
                {card.name} - <span>{card.colseData}</span>
              </div>
              <div className={S.value}>{formatPrice(card.invoice)}</div>
              <div className={S.progressWrapper}>
                <div className={S.proggress}></div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between px-6">
          <span>TOTAL</span>
          <span>1800</span>
        </div>
      </div>
    </Card>
  );
}
