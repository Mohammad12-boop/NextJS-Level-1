type PricingCardProps = {
  name: string;
  price: number;
  description: string;
  features: string[];
};

export default function PricingCard({ name, price, description, features }: PricingCardProps) {
  return (
    <article className="h-full rounded-xl border border-zinc-300 p-6 dark:border-zinc-700">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="mt-4 text-3xl font-bold">${price}<span className="text-base font-normal"> / month</span></p>
      <p className="mt-4 leading-7">{description}</p>
      <ul className="mt-5 list-disc space-y-2 pl-5">
        {features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
    </article>
  );
}
