import { FC, useEffect } from 'react'
import { useQuery } from 'react-query'

import UserAvatar from '@/components/ui/user-avatar/UserAvatar'

import { UserService } from '@/services/user.service'

import { IUser } from '@/types/user.interface'

import { useAuth } from '@/hooks/useAuth'

import { api } from '@/store/api/api'

import styles from './ChannelInfoSmall.module.scss'

const ChannelInfoSmall: FC<{ channel: IUser; message?: string }> = ({
	channel,
	message
}) => {
	const { user } = useAuth()

	const { data } = api.useGetProfileQuery(null, {
		skip: !user
	})

	const { data: subscribersCount, refetch } = useQuery(
		['get subscribers count', channel.id],
		() => UserService.getUser(channel.id || 2),
		{
			select: ({ data }) => {
				return data.subscribersCount
			}
		}
	)

	useEffect(() => {
		refetch()
	}, [data])

	return (
		<div className={styles.profile_info}>
			{channel.avatarPath && <UserAvatar user={channel} />}

			<div>
				<div className={styles.name}>{channel.name}</div>
				<div className={styles.subscribers_count}>
					{message || subscribersCount + ' subscribers'}
				</div>
			</div>
		</div>
	)
}

export default ChannelInfoSmall
