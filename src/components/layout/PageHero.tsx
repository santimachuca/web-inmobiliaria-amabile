interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`bg-[var(--color-primary-dark)] text-white ${compact ? "pb-8 pt-28 md:pb-10 md:pt-32" : "pb-16 pt-40"}`}
    >
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1
          className={`mt-3 font-semibold ${compact ? "max-w-4xl text-3xl leading-tight md:text-5xl" : "text-5xl md:text-6xl"}`}
        >
          {title}
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-white/70">
          {description}
        </p>
      </div>
    </section>
  );
}
