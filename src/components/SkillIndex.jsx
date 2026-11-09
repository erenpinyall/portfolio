import TechTile from './TechTile';

export default function SkillIndex({ groups, lang }) {
  return (
    <div className="materials">
      {groups.map((group, i) => (
        <article className="material-group" key={group.key}>
          <div className="material-head">
            <span className="material-num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{group.label[lang]}</h3>
            <span className="material-count">{String(group.items.length).padStart(2, '0')}</span>
          </div>
          <ul className="material-list">
            {group.items.map((item) => (
              <li className="material-item" key={item}>
                <TechTile name={item} />
                <span className="material-name">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
