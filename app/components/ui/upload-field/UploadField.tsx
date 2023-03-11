import { FC } from 'react'

import { IUploadField } from '@/components/ui/upload-field/upload-field.interface'
import { useUploadFile } from '@/components/ui/upload-field/useUploadFile'

import styles from './UploadField.module.scss'

const UploadField: FC<IUploadField> = ({
	title,
	onChange,
	folder,
	setValue,
	setIsChosen
}) => {
	const { uploadFile } = useUploadFile(onChange, folder, setValue, setIsChosen)

	return (
		<div className={styles.file}>
			{title && <h1>{title}</h1>}
			<label>
				<span className='sr-only'>Выбери файл</span>
				<input type='file' onChange={uploadFile} />
			</label>
		</div>
	)
}

export default UploadField
