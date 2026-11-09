export default function SectionHead({ index, title, note }) {
  return (
    <header className="section-head">
      <div className="section-head-row">
        <span className="section-index">{index}</span>
        <h2 className="section-title">{title}</h2>
        <span className="section-rule" aria-hidden="true" />
      </div>
      {note ? <p className="section-note">{note}</p> : null}
    </header>
  );
}
