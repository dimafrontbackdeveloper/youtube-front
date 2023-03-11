import dayjs from 'dayjs'
import { FC } from 'react'
import { HiCalendar } from 'react-icons/hi'
import { IoEyeSharp } from 'react-icons/io5'
import { RiHeart2Fill } from 'react-icons/ri'

import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall'
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton'

import { IUser } from '@/types/user.interface'
import { IVideo } from '@/types/video.interface'

import { useAuth } from '@/hooks/useAuth'

import { videoApi } from '@/store/api/video.api'

import { formatNumberToK } from '@/utils/format-number-to-k'

import styles from './VideoDetail.module.scss'

const VideoDetail: FC<{ video: IVideo; channel: IUser }> = ({
	video,
	channel
}) => {
	const [updateLike, { isLoading: isLikeLoading }] =
		videoApi.useUpdateLikesMutation()

	const { user } = useAuth()

	return (
		<div className={styles.detail}>
			<div>
				<ChannelInfoSmall channel={channel} />
				<h1>{video.name}</h1>
				<article className={styles.article}>{video.description}</article>
			</div>
			<div className='pt-2'>
				<div className={styles.wrapper_button}>
					{video.user?.id && (
						<SubscribeButton channelIdForSubscribe={video.user.id} />
					)}
					{user ? (
						<button
							className={styles.likeButton}
							disabled={isLikeLoading}
							onClick={() => updateLike(video.id)}
						>
							<RiHeart2Fill />
							Лайк
						</button>
					) : (
						''
					)}
				</div>

				<div className={styles.number_info}>
					<div>
						<IoEyeSharp />
						<span> {formatNumberToK(video.views)} views</span>
					</div>
					<div>
						<RiHeart2Fill />
						<span> {formatNumberToK(video.likes)} likes</span>
					</div>
					<div>
						<HiCalendar />
						<span> {dayjs(new Date(video.createdAt)).fromNow()}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoDetail
