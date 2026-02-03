export const Tabs = ({
  tabsProps,
  activeTabIdProps,
  onTabSelectedProps,
}) => {
  // fallback se activeTabId for inválido
  const activeTab =
    tabsProps.find(tab => tab.id === activeTabIdProps) || tabsProps[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${activeTab.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabsProps.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={tab.id === activeTab.id ? 'is-active' : ''}
              >
                <a
                  href="{`#${tab.id}`}"
                  data-cy="TabLink"
                  onClick={(e) => {
                    e.preventDefault();

                    // não chama callback se clicar no tab atual
                    if (tab.id !== activeTab.id) {
                      onTabSelectedProps(tab.id);
                    }
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