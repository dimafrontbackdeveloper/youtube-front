import cn from 'classnames'
import { FC } from 'react'
import { MdCheckCircle, MdUpload } from 'react-icons/md'

import Button from '@/components/ui/button/Button'

import styles from './FooterForm.module.scss'

const FooterForm: FC<{ percent: number; isUploaded: boolean }> = ({
	percent,
	isUploaded
}) => {
	return (
		<div className={styles.footer}>
			<div
				className={cn(styles.status, {
					[styles['icons-uploaded']]: isUploaded
				})}
			>
				<MdUpload className={styles['upload-icon']} />
				<MdCheckCircle className={styles['check-icon']} />
				<span>
					{isUploaded ? 'Video is uploaded' : `Uploading ${percent}%...`}
				</span>
			</div>
			<div>
				<Button>Save</Button>
			</div>
		</div>
	)
}

export default FooterForm
