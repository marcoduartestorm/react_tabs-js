import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is Tab ${activeTabId[4]}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  className={activeTabId === tab.id ? 'is-active' : ''}
                  data-cy="Tab"
                >
                  <a
                   onClick={() => {
                    setActiveTabId(tab.id);
                   }}
                   href={`#${tab.id}`}
                   data-cy="TabLink">
                    {`Tab ${tab.id[4]}`}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {`Some text ${activeTabId[4]}`}
        </div>
      </div>
    </div>
  );
};
