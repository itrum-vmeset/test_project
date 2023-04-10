import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, makeStyles } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar() {

    const isAuth = true
    const navigate = useNavigate()
    const location = useLocation()

    interface IMenu {
        route: string,
        name: string,
        icon: React.ReactNode
    }

    const menuItems: IMenu[] = [
        {route: '/products', name: 'Продукты', icon: <StarBorderIcon />},
        {route: '/clients', name: 'Клиенты', icon: <StarBorderIcon />,},
        {route: '/categories', name: 'Категории', icon: <StarBorderIcon />},
        {route: '/cities', name: 'Города', icon: <StarBorderIcon />,},
        {route: '/brands', name: 'Бренды', icon: <StarBorderIcon />,},
        {route: '/protocols', name: 'Протоколы', icon: <StarBorderIcon />,},
        {route: '/orders', name: 'Заказы', icon: <StarBorderIcon />,},
        {route: '/banners', name: 'Баннеры', icon: <StarBorderIcon />,},
        {route: '/seminars', name: 'Семинары', icon: <StarBorderIcon />,},
        {route: '/promocode', name: 'Промокоды', icon: <StarBorderIcon />,},
    ]

    if(!isAuth) {
        return <></>
    }

    

  return (
    <List>
        {menuItems.map(({name, route, icon}) => (
            <ListItem key={route} disablePadding
                onClick={() => navigate(route)}
            >
                <ListItemButton
                    selected={route === location.pathname ? true : false}
                    sx={{
                        ':selected': {
                            bgcolor: 'red',
                        },
                    }}
                >
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={name} />
                </ListItemButton>
            </ListItem>
        ))}
    </List>
  )
}

export default Sidebar