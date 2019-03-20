import React from 'react';
import './AtomsPage.scss';

import {Select} from 'modules/shared';

const AtomsPage = () => (
  <div className='atoms-page'>
    <div className="p-5">
      <h4>Select Loader</h4>
      <Select />

      <div className="mt-5">
        <p className="base-text">Base text</p>
        <p style={{ fontSize: '12px' }} className="base-text">Base text</p>
      </div>

    </div>
  </div>
);

export default AtomsPage;
