import KpiCard from "@/components/KpiCard";
import { statsCards } from "@/lib/data/stats.mock";

async function StatsCards() {
  return (
    <>
      {statsCards.map((item) => (
        <KpiCard
          className="flex-row-reverse justify-end gap-2 "
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </>
  );
}
export default StatsCards;
