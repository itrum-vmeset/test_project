import React, {useState} from 'react';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTER_ROUTE } from '../utils/consts'
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'

const Auth = () => {

  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const sign = (event: React.SyntheticEvent) => {
    event.preventDefault()
    alert('yo')
  }

    return (
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography component="h1" variant="h5" align="left" sx={{ mb: 3}}>
            { isLogin ? "Вход в учётную запись" : "Создание учетной записи" }
          </Typography>
          <Box component="form">
            <InputLabel>
              E-mail
            </InputLabel>

            <OutlinedInput
              placeholder="Введите свой e-mail"
              autoFocus
              value={username}
              onChange={e => setUsername(e.target.value)}
              fullWidth
              sx={{ mb: 1}}
            />
            <InputLabel>
              Пароль
            </InputLabel>
            <OutlinedInput
              placeholder="Введите пароль"
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {isLogin ?
                <FormControlLabel control={<Checkbox />} label="Запомнить меня" />
              :
                <> 
                  <InputLabel sx={{mt: 1}}>
                    Повторите пароль
                  </InputLabel>
                  <OutlinedInput
                    placeholder="Повторите пароль"
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    sx={{mb: 1}}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </>
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={sign}
              sx={{mt: 1, mb: 1, bgcolor: '#C06ECC', 
                ':hover': {
                  bgcolor: '#C06ECC',
                  color: 'white',
                },
              }}
            >
              { isLogin ? "Войти" : "Регистрация" }
            </Button>
            <Typography align='center'
              sx={{ mt: 1, mb: 1 }}
            >
              {isLogin
                ? 
                <NavLink to={REGISTER_ROUTE}
                  style={{color: '#C06ECC', textDecoration: 'none'}}
                >
                  {"У меня еще нет аккаунта"}
                </NavLink>
                :
                <NavLink to={LOGIN_ROUTE}
                  style={{color: '#C06ECC', textDecoration: 'none'}}
                >
                  {"У меня уже есть аккаунт"}
                </NavLink>
              }
            </Typography>
          </Box>
        </Box>
      </Container>
    )
}

export default Auth