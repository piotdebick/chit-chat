import React from 'react';
import '../../styles/WarningBanner.css'

function WarningBanner (props) {

  if(!props.warn){
    return null;
  } else {
    return (
      <div className="WarningBanner">
          { props.errorMessage }
      </div>
    )
  }
};

export default WarningBanner;
