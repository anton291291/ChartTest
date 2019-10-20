import React from 'react';

import { Button } from 'reactstrap';

const ChangePagesBtn = (props) => {

  const {text}= props;

  return (
    <span className="changePageBtn-block">
      <Button color="primary">{text}
      </Button>
    </span>
  )
}

export default ChangePagesBtn;
