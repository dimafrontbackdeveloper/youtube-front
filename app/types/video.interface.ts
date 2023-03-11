import { IBase } from '@/types/base.interface'
import { IComment } from '@/types/comment.interface'
import { IUser } from '@/types/user.interface'

export interface IVideo extends IBase {
	name: string
	isPublic?: boolean
	views: number
	likes: number
	duration: number
	description: string
	videoPath: string
	thumbnailPath: string
	user?: IUser
	comments?: IComment[]
}

export interface IVideoDto
	extends Pick<
		IVideo,
		'id' | 'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'
	> {}
