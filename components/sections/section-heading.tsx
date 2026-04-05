export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ocean)]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold leading-tight text-[var(--ink)] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-[var(--muted)] sm:text-lg">{description}</p> : null}
    </div>
  );
}
