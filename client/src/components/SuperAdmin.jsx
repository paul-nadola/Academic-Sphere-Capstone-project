import React from 'react'
import Teachers from './Teachers'
import AdminsGet from './AdminsGet'

function SuperAdmin() {
  return (
    <div>
      <AdminsGet/>
      <Teachers/>
    </div>
  )
}

export default SuperAdmin