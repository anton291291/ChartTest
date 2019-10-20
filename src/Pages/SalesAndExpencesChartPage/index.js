import React from 'react';
import {Link} from 'react-router-dom';

import {ChangePagesBtn} from '../../components';
import {SalesAndExpencesChartContainer} from '../../moduls'
import ScrollAnimation from 'react-animate-on-scroll';


const SalesAndExpencesChartPage = () => {

    return(
      <>
        <Link to='/list'>
          <ChangePagesBtn text='Go to list'/>
        </Link>
        <ScrollAnimation
          animateIn='fadeIn'
          duration={2.5}
          offset={5}
        >
          <SalesAndExpencesChartContainer/>
        </ScrollAnimation>
        </>
    )
}

export default SalesAndExpencesChartPage;
