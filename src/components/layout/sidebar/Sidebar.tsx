import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, makeStyles } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css'
import { SidebarProps } from './Sidebar.props';
import classNames from 'classnames';
import { IMenu } from '../../../models/IMenu';
import {ReactComponent as ProductIcon} from '../../../icons/products.svg';
import {ReactComponent as OrderIcon} from '../../../icons/orders.svg';

// const sxStyle = {
//     '&:selected': {
//         bgcolor: 'red',
//     },
// }

function Sidebar({className, ...props} : SidebarProps): JSX.Element {

    const navigate = useNavigate()
    const location = useLocation()

    const menuItems: IMenu[] = [
        {route: '/products', name: 'Продукты', icon: <ProductIcon />},
        {route: '/orders', name: 'Заказы', icon: <OrderIcon />,},
        {route: '/clients', name: 'Клиенты', icon: <StarBorderIcon />,},
        {route: '/categories', name: 'Категории', icon: <StarBorderIcon />},
        {route: '/cities', name: 'Города', icon: <StarBorderIcon />,},
        {route: '/brands', name: 'Бренды', icon: <StarBorderIcon />,},
        {route: '/protocols', name: 'Протоколы', icon: <StarBorderIcon />,},
        {route: '/banners', name: 'Баннеры', icon: <StarBorderIcon />,},
        {route: '/seminars', name: 'Семинары', icon: <StarBorderIcon />,},
        {route: '/promocode', name: 'Промокоды', icon: <StarBorderIcon />,},
    ]

    return (
        <List className={classNames(styles.sidebar, className)} {...props}
            sx={{padding: '131px 16px 0'}}
        >
            {menuItems.map(({name, route, icon}) => (
                <ListItem key={route} disablePadding
                    onClick={() => navigate(route)}
                >
                    <ListItemButton
                        className={styles.ListItemButton}
                        selected={route === location.pathname ? true : false}
                        // sx={sxStyle}
                        // sx={{
                        //     bgcolor: 'red',
                        //     ':selected': {
                        //         bgcolor: 'red',
                        //     },
                        // }}
                    >
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText className={styles.ListItemText} primary={name} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export default Sidebar