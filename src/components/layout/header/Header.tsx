import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../utils/consts';
import { HeaderProps } from './Header.props';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';
import { Typography } from '@mui/material';

function Header({className, ...props}: HeaderProps): JSX.Element {

  const navigate = useNavigate()
  const {authStore} = React.useContext(Context)

  const logout = () => {
    authStore.logout()
    navigate(LOGIN_ROUTE)
  }

  return (
    <Box className={className} {...props}>
      <Toolbar sx={{flexDirection: 'row-reverse',}}>
        {authStore.isAuth ?
          <>
            <Button color="inherit" onClick={logout}>LOGOUT</Button>
            <Typography>{authStore.user.username}</Typography>
          </>
          :
          <Button color="inherit" onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
        }
      </Toolbar>
    </Box>
  );
}

export default observer(Header)