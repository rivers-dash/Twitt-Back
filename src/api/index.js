import user from './user/user'
import getFeed from './feed/getFeed'
import likeTweet from './like/likeTweet'
import unlikeTweet from './like/unlikeTweet'
import followUser from './follow/followUser'
import unfollowUser from './follow/unfollowUser'
import retweet from './retweet/retweet'
import unretweet from './retweet/unretweet'
import sample from './stream/sample'
import filter from './stream/filter'

export const apis = [
	user,
	getFeed,
	likeTweet,
	unlikeTweet,
	followUser,
	unfollowUser,
	retweet,
	unretweet,
	sample,
	filter,
]
