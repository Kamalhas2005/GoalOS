import PageHeader from "@/components/PageHeader";
import ComingSoonCard from "@/components/ComingSoonCard";

export default function TutorPage() {
  return (
    <main className="p-10">
      <PageHeader
        title="Tutor"
        description="Learn with your personal AI tutor."
      />

      <ComingSoonCard engine="Tutor Engine V1" />
    </main>
  );
}