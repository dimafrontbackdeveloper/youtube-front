import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import UserAvatar from '@/components/ui/user-avatar/UserAvatar'
import VideoDuration from '@/components/ui/video-item/VideoDuration'
import VideoStatistics from '@/components/ui/video-item/VideoStatistics'

import { IVideo } from '@/types/video.interface'

import styles from './VideoItem.module.scss'

const LargeVideoItem: FC<{ video: IVideo }> = ({ video }) => {
	return (
		<Link href={`/v/${video.id}`}>
			<div className={cn(styles.video_item, styles.large_item)}>
				<div className={styles.thumbnail}>
					{video.thumbnailPath && (
						<Image
							src={video.thumbnailPath}
							alt={video.name}
							layout='fill'
							className={styles['bg-image']}
							priority
						/>
					)}
					<VideoDuration isBottom duration={video.duration} />

					<div className={styles.information}>
						<a className={styles.name}>{video.name}</a>

						{video?.user?.avatarPath && (
							<UserAvatar user={video.user} isWhite />
						)}

						<div className={styles.author}>{video.user?.name}</div>

						<VideoStatistics views={video.views} createdAt={video.createdAt} />
					</div>
				</div>
			</div>
		</Link>
	)
}

export default LargeVideoItem
