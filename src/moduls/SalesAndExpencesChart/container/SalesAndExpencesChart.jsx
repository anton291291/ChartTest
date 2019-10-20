import React, {useEffect,useState} from 'react';

import Api from '../../../utils/api/data';

import {SalesAndExpencesChart} from '../../../components';

const SalesAndExpencesChartContainer = (props) => {

  const [Data,setData] = useState()

  useEffect (() => {
     Api.get().then((result) => {
        setData(result.data.data.graph)
      })
  },[])

  return (
    <SalesAndExpencesChart graphData={Data} />
  );
}

export default SalesAndExpencesChartContainer;
