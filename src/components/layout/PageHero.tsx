interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-[var(--color-primary-dark)] pb-16 pt-40 text-white">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-5xl font-semibold md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl leading-7 text-white/70">{description}</p>
      </div>
    </section>
  );
}
