import PageHeader from "@/components/PageHeader";
import PricingCard from "@/components/PricingCard";

const plans = [
  { name: "Starter", price: 0, description: "Begin exploring the basics.", features: ["Introductory lessons", "Sample exercises"] },
  { name: "Learner", price: 12, description: "Build a steady learning routine.", features: ["All beginner lessons", "Practice outlines", "Progress worksheets"] },
  { name: "Pro", price: 24, description: "Explore a wider range of topics.", features: ["All learning topics", "Extra practice projects", "Review checklists"] },
];

export default function PricingPage() {
  return (
    <main className="page-shell">
      <PageHeader title="Learning Plans" description="Sample pricing for this learning exercise. No purchases or payments are available." />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => <PricingCard key={plan.name} {...plan} />)}
      </div>
    </main>
  );
}
