import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { LOGIN_ROUTE, ORDERS_ROUTE, PRODUCTS_ROUTE } from '../utils/consts'

function AppRouter() {

    const isAuth = true

    console.log('isAuth =', isAuth);
    

  return (
    <Routes>
      {isAuth && authRoutes.map(({path, Component}) => 
        <Route key={path} element={<Component />} path={path} />
      )}
      {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component />} />
      )}
      <Route path='*' element={
        isAuth 
        ? <Navigate to={PRODUCTS_ROUTE} />
        : <Navigate to={LOGIN_ROUTE} />} 
      />
    </Routes>
  )
}

export default AppRouter