 
import React from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech}) => {
 

  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content' >
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};



export default (TechItem);