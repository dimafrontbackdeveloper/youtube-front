import { useBurger } from '@/hooks/useBurger'

import styles from './Close.module.scss'

const Close = () => {
	const { closeBurger } = useBurger()

	return (
		<div className={`${styles.close}`} onClick={closeBurger}>
			<div></div>
			<div></div>
		</div>
	)
}

export default Close
