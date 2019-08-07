import React from 'react';
import { Link } from 'react-router-dom';

export default ({ collapsed, goHome }) => {
  return (
    <div className="isoLogoWrapper" onClick={goHome}>
      {collapsed ? (
        <Link to="/dashboard">
          
        </Link>
      ) : (
        <div className="companyLogo" />
      )}
    </div>
  );
};
