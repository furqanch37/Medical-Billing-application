import React from 'react'
import "./clinicServices.css";
import Banner from '../ReusableBanner/Banner';
import ClinicServices from './ClinicServices';
import Details from '../services/Details/Details';
import ServicesSidebar from '../services/Details/ServicesSidebar';
const page = () => {
  return (
    <div>
      <Banner  title="Department"
  breadcrumbs={[
    { label: "Home", active: false },
    { label: "Department", active: true }
  ]} />
  <div className='main-div-1'>
      <ClinicServices />
      <ServicesSidebar />
      </div>
    </div>
  )
}

export default page
