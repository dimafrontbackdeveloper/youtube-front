import { FC, useState } from 'react'
import { HiUpload } from 'react-icons/hi'

import UploadModal from '@/components/layout/header/upload-video/UploadModal'

import { videoApi } from '@/store/api/video.api'

import stylesIcon from '../icons-right/IconsRight.module.scss'

const UploadVideo: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [videoId, setVideoId] = useState<number>(0)

	const [createVideo, { isLoading }] = videoApi.useCreateVideoMutation()

	return (
		<>
			<button
				className={stylesIcon.button}
				disabled={isLoading}
				onClick={() => {
					createVideo()
						.unwrap()
						.then(id => {
							setVideoId(+id)
							setIsOpen(true)
						})
				}}
			>
				<HiUpload />
			</button>
			<UploadModal isOpen={isOpen} setIsOpen={setIsOpen} videoId={videoId} />
		</>
	)
}

export default UploadVideo
