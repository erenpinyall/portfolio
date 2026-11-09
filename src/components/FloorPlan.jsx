export default function FloorPlan({ t, active }) {
  const items = [
    { id: 'works', n: '01', label: t.nav.works },
    { id: 'skills', n: '02', label: t.nav.skills },
    { id: 'experience', n: '03', label: t.nav.experience },
    { id: 'contact', n: '04', label: t.nav.contact },
  ];

  return (
    <nav className="floorplan" aria-label={t.ui.floorPlan}>
      <a className="floor-end floor-entrance" href="#top">
        {t.ui.entrance}
      </a>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`floor-item${active === item.id ? ' is-here' : ''}`}
          aria-current={active === item.id ? 'location' : undefined}
        >
          <span className="floor-num">{item.n}</span>
          <span>{item.label}</span>
          {active === item.id ? <span className="sr-only"> — {t.head.youAreHere}</span> : null}
        </a>
      ))}
      <span className="floor-end floor-exit">
        {t.ui.exit} <span aria-hidden="true">↗</span>
      </span>
    </nav>
  );
}
