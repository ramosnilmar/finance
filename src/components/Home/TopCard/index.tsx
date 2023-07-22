import S from "./style.module.css";
import {
  CreditCardIcon,
  BuildingLibraryIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    id: 1,
    title: "Saldo Atual",
    icon: <BuildingLibraryIcon color="#fff" className="h-8 w-8" />,
    roundColor: "bg-[#2196F3]",
    value: "R$ 0,00",
  },
  {
    id: 2,
    title: "Receitas",
    icon: <ArrowUpIcon color="#fff" className="h-8 w-8" />,
    roundColor: "bg-[#4CAF50]",
    value: "R$ 0,00",
  },
  {
    id: 3,
    title: "Despesas",
    icon: <ArrowDownIcon color="#fff" className="h-8 w-8" />,
    roundColor: "bg-[#F44336]",
    value: "R$ 0,00",
  },
  {
    id: 4,
    title: "Cartão de crédito",
    icon: <CreditCardIcon color="#fff" className="h-8 w-8" />,
    roundColor: "bg-[#00796B]",
    value: "R$ 0,00",
  },
];

export default function TopCard() {
  return (
    <div className="flex gap-4">
      {cards.map((card) => (
        <div key={card.id} className={S.card}>
          <div className="flex flex-col text-gray-600">
            <div className={S.cardHeader}>{card.title}</div>
            <div className={S.cardValue}>{card.value}</div>
          </div>
          <div className={`${S.iconWrapper} ${card.roundColor}`}>
            <div className={S.cardIcon}>{card.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
