import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import Layout from '@/components/layout/Layout'
import Comments from '@/components/pages/video/comments/Comments'
import VideoDetail from '@/components/pages/video/video-detail/VideoDetail'
import VideoPlayer from '@/components/pages/video/video-player/VideoPlayer'

import { IUser } from '@/types/user.interface'
import { IVideo } from '@/types/video.interface'

import { videoApi } from '@/store/api/video.api'

import styles from './Video.module.scss'

const Video: FC = () => {
	const { query } = useRouter()

	const { data: video = {} as IVideo } = videoApi.useGetVideoByIdQuery(
		Number(query.id),
		{
			skip: !query?.id
		}
	)

	const [updateViews] = videoApi.useUpdateViewsMutation()

	useEffect(() => {
		if (query.id) updateViews(Number(query.id))
	}, [query.id])

	return (
		<Layout title={video.name}>
			<div className={styles.layout}>
				<VideoPlayer videoPath={video.videoPath} />
				<Comments videoId={video.id} comments={video.comments || []} />
				<VideoDetail video={video} channel={video.user || ({} as IUser)} />
			</div>
		</Layout>
	)
}

export default Video
