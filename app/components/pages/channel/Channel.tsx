import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IChannel } from '@/components/pages/channel/channel.interface'
import Catalog from '@/components/pages/home/catalog/Catalog'
import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall'
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton'

const Channel: FC<IChannel> = ({ channel }) => {
	return (
		<Layout title={channel.name}>
			<div className='mb-10 w-full'>
				<div className='flex  gap-10 flex-col max-w-xs'>
					<ChannelInfoSmall channel={channel} />
					<SubscribeButton channelIdForSubscribe={channel.id} />
				</div>
				<article className='text-gray-500 mt-3'>{channel.description}</article>
			</div>
			<Catalog newVideos={channel.videos || []} />
		</Layout>
	)
}

export default Channel
