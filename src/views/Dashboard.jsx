import React from 'react'
import AccessosRapidos from '../components/AdminComponentes/AccessosRapidos'
import DashboardOrdenes from '../components/AdminComponentes/DashboardOrdenes'
import DashboardUsers from '../components/AdminComponentes/DashboardUsers'
import DashboardGrafica from '../components/AdminComponentes/DashboardGrafica'

export default function Dashboard() {

  return (
    <>
      <div className="container">
        <AccessosRapidos />


        <div className="row">
          <DashboardOrdenes />
          <DashboardUsers />
        </div>

          <DashboardGrafica />
      </div >
    </>
  )
}
