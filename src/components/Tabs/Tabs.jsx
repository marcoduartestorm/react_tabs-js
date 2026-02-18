export const Tabs = ({
  tabs = [],
  activeTabId,
  onTabSelected = () => {},
}) => {
  // se não houver tabs, não quebra
  if (tabs.length === 0) {
    return null;
  }

  // fallback se activeTabId for inválido
  const activeTab =
    tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleClick = id => {
    if (id === activeTab.id) {
      return;
    }

    onTabSelected(id);
  };

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${activeTab.title}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={tab.id === activeTab.id ? 'is-active' : ''}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={e => {
                    e.preventDefault();
                    handleClick(tab.id);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      </div>
    </div>
  );
};
