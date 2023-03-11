import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Catalog from '@/components/pages/home/catalog/Catalog'
import Discover from '@/components/pages/home/discover/Discover'
import { IHome } from '@/components/pages/home/home.interface'

const Home: FC<IHome> = ({ randomVideo, topVideo, newVideos }) => {
	return (
		<Layout title='Video'>
			<Discover topVideo={topVideo} randomVideo={randomVideo} />
			<Catalog newVideos={newVideos} />
		</Layout>
	)
}

export default Home
