import React from 'react';
import {Link} from 'react-router-dom';

import {ChangePagesBtn} from '../../components';
import {SalesAndExpencesChartContainer} from '../../moduls'


const SalesAndExpencesChartPage = () => {

    return(
      <>
      <Link to='/list'>
          <ChangePagesBtn/>
        </Link>
        <SalesAndExpencesChartContainer/>
        </>
    )
}

export default SalesAndExpencesChartPage;
