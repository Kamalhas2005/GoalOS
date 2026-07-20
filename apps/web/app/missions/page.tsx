import PageHeader from "@/components/PageHeader";
import ComingSoonCard from "@/components/ComingSoonCard";

export default function MissionsPage() {
  return (
    <main className="p-10">
      <PageHeader
        title="Missions"
        description="View and manage all your missions."
      />

      <ComingSoonCard engine="Mission Engine V3" />
    </main>
  );
}