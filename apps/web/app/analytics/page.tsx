import PageHeader from "@/components/PageHeader";
import ComingSoonCard from "@/components/ComingSoonCard";

export default function AnalyticsPage() {
  return (
    <main className="p-10">
      <PageHeader
        title="Analytics"
        description="Track your growth and performance."
      />

      <ComingSoonCard engine="Analytics Engine V1" />
    </main>
  );
}