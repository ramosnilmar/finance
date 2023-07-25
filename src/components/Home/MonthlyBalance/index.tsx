import Card from "@/components/Card";
import S from "./style.module.css";
import { formatPrice } from "@/utils/formatPrice";

const values = {
  incomes: 4600,
  expenses: 1241 + 91 + 125 + 80,
  balance: 4600 - (1241 + 91 + 125 + 80),
};

export default function MonthlyBalance() {
  const { incomes, expenses, balance } = values;
  const progressValue = (expenses / incomes) * 100;

  return (
    <Card
      title="Balanço Mensal"
      action={{ title: "Ver mais", link: "/reports" }}
    >
      <div className="flex gap-6 px-8 py-6">
        <div className="flex gap-4">
          <div className="w-5 h-full bg-green-500 rounded-full"></div>
          <div className="flex flex-col-reverse">
            <div
              style={{ height: `${Math.ceil(progressValue)}%` }}
              className={`w-5 bg-red-500 rounded-full`}
            ></div>
          </div>
          <div className=""></div>
        </div>
        <div className="w-full">
          <div className="flex justify-between pb-4">
            <div className={S.title}>
              <p>Receitas</p>
              <p>Despesas</p>
            </div>
            <div className={S.value}>
              <p>{formatPrice(incomes)}</p>
              <p>{formatPrice(expenses)}</p>
            </div>
          </div>
          <div className="flex justify-between pt-4 border-t-2">
            <div className={S.title}>
              <p>Balanço</p>
            </div>
            <div className={S.b_value}>
              <p>{formatPrice(balance)}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
