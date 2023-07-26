import Card from "@/components/Card";
import S from "./style.module.css";
import { formatPrice } from "@/utils/formatPrice";

type TCreditCard = {
  id: number;
  name: string;
  invoice: number;
  limit: number;
  color: string;
  colseData: string;
};

const creditCards = [
  {
    id: 1,
    name: "Nubank",
    invoice: 1800,
    limit: 5000,
    color: "#8A05BE",
    colseData: "10/08/2023",
  },
  {
    id: 2,
    name: "Itaú",
    invoice: 6900,
    limit: 8000,
    color: "#ffaf11",
    colseData: "10/12/2023",
  },
];

export default function CreditCard() {
  const total = creditCards.reduce((acc, card) => acc + card.invoice, 0);
  const percentLimit = (card: TCreditCard) => {
    return `${(card.invoice / card.limit) * 100}%`;
  };
  const availableLimit = (card: TCreditCard) => {
    return `Limite Disponivel ${formatPrice(card.limit - card.invoice)}`;
  };

  return (
    <Card
      title="Cartão de Crédito"
      action={{ title: "Ver mais", link: "/credit-card" }}
    >
      <div className="flex flex-col gap-4 pt-1">
        {creditCards.map((card) => (
          <div
            key={card.id}
            className="flex items-center px-6 gap-4 border-b pb-8"
          >
            <div
              className={S.logoCard}
              style={{ background: card.color }}
            ></div>
            <div className="flex flex-col gap-1 w-full">
              <div className={S.title}>
                {card.name} - <span>Fecha em {card.colseData}</span>
              </div>
              <div className={S.value}>{formatPrice(card.invoice)}</div>
              <div className={S.progressWrapper}>
                <div
                  style={{ width: percentLimit(card) }}
                  className={S.progress}
                ></div>
                <div className={S.percents}>{percentLimit(card)}</div>
                <div className={S.availableLimit}>{availableLimit(card)}</div>
              </div>
            </div>
          </div>
        ))}
        <div className={S.total}>
          <span>TOTAL</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </Card>
  );
}
