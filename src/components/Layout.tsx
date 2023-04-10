import { Grid } from '@mui/material'
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

interface LayoutProps {
    children: React.ReactNode
}

function Layout({children}: LayoutProps) {
  return (
    <Grid container spacing={2}>
        <Grid item={true} xs={12}>
            <Header />
        </Grid>
        <Grid item={true} xs={4}>
            <Sidebar />
        </Grid>
        <Grid item={true} xs={8}>
            <div>
                {children}
            </div>
        </Grid>
    </Grid>
  )
}


export const withLayout = (Component: any) => {
	return function withLayoutComponent(props: any): JSX.Element {
		return (
			<>
				<Layout>
					<Component {...props} />
				</Layout>
			</>
		)
	}
}