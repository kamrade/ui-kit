import React from 'react';
import './SandboxPage.scss';
import {UIButton, IconBase, PaginationSlider} from 'modules/shared';

const SandboxPage = () => (
  <div>
    <div className="p-3">
      <h1 className="mb-5">Sandbox</h1>
      <h3>Buttons</h3>
    </div>

    <div className="p-3">

      <UIButton theme='primary'>
        <span className="btn-icon btn-icon-left"><IconBase iconName='download' color='inverted'/></span>
        Test
      </UIButton>{' '}

      <UIButton theme='light'>
        <span className="btn-icon btn-icon-left"><IconBase iconName='xls_file'/></span>
        <span className="btn-text">Download XLS</span>
      </UIButton>{' '}

      <UIButton theme='light'>
        <span className="btn-icon btn-icon-left"><IconBase iconName='activity'/></span>
        <span className="btn-text">Ballance Confirmation</span>
      </UIButton>{' '}
    </div>

    <div className="p-3">

      <UIButton theme='light' size='sm'>
        <span className="btn-text">Small Button</span>
      </UIButton>

    </div>

    <div className="p-3">

      <UIButton theme='light' size='lg'>
        <span className="btn-text">Large Button</span>
      </UIButton>

    </div>

    <div className="p-3">

      <PaginationSlider></PaginationSlider>
    </div>


  </div>
);

export default SandboxPage;
