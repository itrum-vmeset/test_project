import { Box } from '@mui/material'
import React, { FunctionComponent } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import styles from './Layout.module.css'
import { LayoutProps } from './Layout.props'

function Layout({children}: LayoutProps) {

    return (
        <Box className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <Box className={styles.body}>
                {children}
            </Box>
        </Box>
    )
}

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<>
				<Layout>
					<Component {...props} />
				</Layout>
			</>
		)
	}
}