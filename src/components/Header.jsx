export default function Header({ lang, onLang, dark, onLights, t, active }) {
  const items = [
    { id: 'works', label: t.nav.works },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="wordmark" href="#top">
          Eren Pinyal
        </a>

        <nav className="main-nav" aria-label={t.ui.sections}>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'is-active' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-controls">
          <button
            type="button"
            className="lights"
            onClick={onLights}
            aria-pressed={!dark}
            title={dark ? t.ui.lightsOn : t.ui.lightsOff}
          >
            <span className={`light-dot${dark ? ' is-off' : ''}`} aria-hidden="true" />
            <span>{t.ui.lights}</span>
          </button>

          <div className="lang" role="group" aria-label={t.ui.language}>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : undefined}
              aria-pressed={lang === 'en'}
              onClick={() => onLang('en')}
            >
              EN
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={lang === 'tr' ? 'is-active' : undefined}
              aria-pressed={lang === 'tr'}
              onClick={() => onLang('tr')}
            >
              TR
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
