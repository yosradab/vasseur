export default function Faq({ id, title, items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id={id} className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">{title}</h2>
      <div className="divide-y divide-slate/20">
        {items.map((item, i) => (
          <details key={i} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-medium text-ink marker:content-none">
              <span>{item.q}</span>
              <span className="mt-1 shrink-0 text-blue transition-transform group-open:rotate-45 text-xl leading-none">+</span>
            </summary>
            <p className="mt-3 text-slate leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
