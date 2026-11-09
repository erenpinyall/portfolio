import TechIcon from './TechIcon';

export default function SkillIndex({ groups, lang }) {
  return (
    <div className="materials">
      {groups.map((group, i) => (
        <div className="material-group" key={group.key}>
          <div className="material-head">
            <span className="material-num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{group.label[lang]}</h3>
          </div>
          <ul className="material-list">
            {group.items.map((item) => (
              <li key={item}>
                <span className="specimen" aria-hidden="true">
                  <TechIcon name={item} size={13} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
