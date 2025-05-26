import React from 'react'
import "./services.css";
import Banner from '../ReusableBanner/Banner';
import Details from './Details/Details';
const page = () => {
  return (
    <div>
      <Banner  title="Outpatient Surgery"
  breadcrumbs={[
    { label: "Home", active: false },
    { label: "Outpatient Surgery", active: true }
  ]} />
      <Details />
    </div>
  )
}

export default page
