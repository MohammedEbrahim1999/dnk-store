import React from 'react'
import Banner from './AboutComponent/Banner/Banner';
import Best from '../Home Component/Best/Best';
import Sale from '../Home Component/Sale/Sale';
import We from './AboutComponent/We/We';
import Team from './AboutComponent/Team/Team';
import Follow from './AboutComponent/Follow/Follow';


const About = () => {
  return (
    <>
      <Banner/>
      <We/>
      <Team/>
      <Follow/>
      <Best/>
      <Sale/>
    </>
  )
}

export default About;
