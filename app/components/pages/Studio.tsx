import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Catalog from '@/components/pages/home/catalog/Catalog'
import Loader from '@/components/ui/Loader'

import { api } from '@/store/api/api'
import { videoApi } from '@/store/api/video.api'

const Studio: FC = () => {
	const { data, isLoading } = api.useGetProfileQuery(null)
	const [removeVideo] = videoApi.useDeleteVideoMutation()

	const videos = data?.videos

	return (
		<Layout title='Youtube 2.0 studio'>
			<div>
				{isLoading ? (
					<Loader count={5} />
				) : videos?.length ? (
					<Catalog
						newVideos={videos}
						removeHandler={removeVideo}
						isUpdateLink
					/>
				) : (
					<p>Видео не найдено!</p>
				)}
			</div>
		</Layout>
	)
}

export default Studio
