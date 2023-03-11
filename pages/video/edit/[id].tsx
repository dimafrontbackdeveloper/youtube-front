import VideoEdit from '@/components/pages/video-edit/VideoEdit'

import { NextPageAuth } from '@/providers/private-route.interface'

const VideoEditPage: NextPageAuth = () => {
	return <VideoEdit />
}

VideoEditPage.isOnlyUser = true

export default VideoEditPage
