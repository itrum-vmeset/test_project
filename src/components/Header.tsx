import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

export default function Header() {

  const navigate = useNavigate()

  return (
    <Box>
      <Toolbar sx={{flexDirection: 'row-reverse',}}>
        <Button color="inherit" onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
      </Toolbar>
    </Box>
  );
}