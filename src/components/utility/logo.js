import React from 'react';
import { Link } from 'react-router-dom';
import favicon from '../../image/Gamedex_Mark_Black.svg'

export default ({ collapsed, goHome }) => {
  return (
    <div className="isoLogoWrapper" onClick={goHome}>
      {collapsed ? (
        <Link to="/dashboard">
          <img src={favicon} alt="" />
        </Link>
      ) : (
        <div className="companyLogo" />
      )}
    </div>
  );
};
