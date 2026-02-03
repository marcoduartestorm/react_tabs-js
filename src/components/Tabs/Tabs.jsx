export const Tabs = ({activeTabIdProps, onTabSelectedProps, tabsProps}) => {

  return (
      <div className="section">
        <h1 className="title">{`Selected tab is Tab ${activeTabIdProps[4]}`}</h1>

        <div data-cy="TabsComponent">
          <div className="tabs is-boxed">
            <ul>
              {tabsProps.map(tab => {
                return (
                  <li
                    className={activeTabIdProps === tab.id ? 'is-active' : ''}
                    data-cy="Tab"
                    key={tab.id}
                  >
                    <a
                      onClick={() => {
                        onTabSelectedProps(tab.id);
                      }}
                      href={`#${tab.id}`}
                      data-cy="TabLink"
                    >
                      {`Tab ${tab.id[4]}`}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="block" data-cy="TabContent">
            {`Some text ${activeTabIdProps[4]}`}
          </div>
        </div>
      </div>
  );
};
