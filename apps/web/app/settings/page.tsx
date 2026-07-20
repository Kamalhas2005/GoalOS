import PageHeader from "@/components/PageHeader";
import ComingSoonCard from "@/components/ComingSoonCard";

export default function SettingsPage() {
  return (
    <main className="p-10">
      <PageHeader
        title="Settings"
        description="Configure and personalize GoalOS."
      />

      <ComingSoonCard engine="Settings Engine V1" />
    </main>
  );
}