import React from 'react';
import './AtomsPage.scss';

import {Select} from 'modules/shared';

const AtomsPage = () => (
  <div className='atoms-page'>
    <div className="p-5">
      <h4>Atoms</h4>
      <Select></Select>
    </div>
  </div>
);

export default AtomsPage;
