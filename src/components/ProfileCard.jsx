export default function ProfileCard({ t }) {
  return (
    <section className="hero-card" aria-labelledby="hero-card-title">
      <div className="hero-card-head">
        <span>{t.heroCard.label}</span>
        <span className="hero-card-status">
          <span className="hero-card-dot" aria-hidden="true" />
          {t.heroCard.status}
        </span>
      </div>

      <h2 className="hero-card-title" id="hero-card-title">
        {t.heroCard.title}
      </h2>
      <p className="hero-card-place">
        {t.footer.place} <span aria-hidden="true">·</span> {t.heroCard.timezone}
      </p>

      <dl className="hero-card-facts">
        {t.heroCard.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
