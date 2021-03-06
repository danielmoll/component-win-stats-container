import React, { PropTypes } from 'react';
import codify from 'slugger';

function StatsContainerHeader({ className = 'stats-container', title, icon }) {
  let iconEl = null;
  if (icon) {
    iconEl = <div className={[ `${className}__header-icon`, `${className}__header-icon-${icon}` ].join(' ')}></div>;
  }
  return (
    <header className={`${className}__header`}>
      <a name={codify(title, { decode: false })} />
      <h1 className={`${className}__header-text`} itemProp="name">{title}</h1>
      {iconEl}
    </header>
  );
}

if (process.env.NODE_ENV !== 'production') {
  StatsContainerHeader.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
  };
}

export default StatsContainerHeader;
