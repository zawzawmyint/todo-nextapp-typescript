import WorkList from "@/components/work/WorkList";

// Define your priority order
export const priorityOrder: Record<string, number> = {
  low: 1,
  normal: 2,
  high: 3,
  urgent: 4,
};

export default function Home() {
  return <WorkList />;
}
