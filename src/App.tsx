import { Box, CircularProgress } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import AppRouter from './components/AppRouter';
import { IUser } from './models/IUser';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const {authStore} = useContext(Context);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authStore.checkAuth().then(data => {
      if(data) {
        authStore.setUser(data as IUser)
        authStore.setAuth(true)
        console.log(authStore.isAuth)
      }
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  if(loading) {
    return <CircularProgress />
  }

  return (
    <BrowserRouter>
      <Box>
          <AppRouter />
      </Box>
    </BrowserRouter>
  );
}

export default observer(App);
