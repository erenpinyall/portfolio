export default function Chronology({ items, lang }) {
  return (
    <div className="chronology">
      {items.map((item) => (
        <article className="entry" key={`${item.company}-${item.year}`}>
          <div className="entry-year" aria-hidden="true">
            {item.year}
          </div>
          <div className="entry-body">
            <div className="entry-top">
              <h3>{item.company}</h3>
              <span className="entry-role">{item.role[lang]}</span>
            </div>
            <p className="entry-meta">
              {item.date[lang]} · {item.location}
            </p>
            <ul className="entry-list">
              {item.details[lang].map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <ul className="chip-row">
              {item.tech.map((tech) => (
                <li className="chip" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
