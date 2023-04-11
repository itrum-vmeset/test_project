import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../utils/consts';
import { HeaderProps } from './Header.props';

export default function Header({className, ...props}: HeaderProps): JSX.Element {

  const navigate = useNavigate()

  return (
    <Box className={className} {...props}>
      <Toolbar sx={{flexDirection: 'row-reverse',}}>
        <Button color="inherit" onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
      </Toolbar>
    </Box>
  );
}