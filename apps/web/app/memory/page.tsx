import PageHeader from "@/components/PageHeader";
import ComingSoonCard from "@/components/ComingSoonCard";

export default function MemoryPage() {
  return (
    <main className="p-10">
      <PageHeader
        title="Memory"
        description="Your long-term AI memory and knowledge."
      />

      <ComingSoonCard engine="Memory Engine V1" />
    </main>
  );
}