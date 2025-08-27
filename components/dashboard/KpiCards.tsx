import { statsCards } from "@/lib/data/campaigns";
import KpiCard from "../StatsCard";

async function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
      {statsCards.map((card) => (
        <KpiCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={`${card.color} text-white`}
        />
      ))}
    </div>
  );
}
export default KpiCards;
