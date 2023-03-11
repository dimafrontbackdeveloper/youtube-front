import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import Header from '@/components/layout/header/Header'
import Sidebar from '@/components/layout/sidebar/Sidebar'

import styles from './Layout.module.scss'
import BurgerButton from './header/burger-button/BurgerButton'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	title,
	children
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main className={styles.main}>
				<Sidebar />
				<section className={styles.content}>
					<Header />
					<div className={styles.wrapper}>{children}</div>
				</section>
				<BurgerButton />
			</main>
		</>
	)
}

export default Layout
