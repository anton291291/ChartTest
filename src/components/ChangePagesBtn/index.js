import React from 'react';

import { Button } from 'reactstrap';

import './ChangePagesBtn.scss';

const ChangePagesBtn = (props) => {

  const {text}= props;

  return (
    <p className="changePageBtn-block">
      <Button
        color="info"
        size='sm'
      >{text}
      </Button>
    </p>
  )
}

export default ChangePagesBtn;
