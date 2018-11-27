import client from '../../client'

function unfollowUser(req, res) {
	const path = 'destroy'
	client
		.post(`friendships/${path}`, {id: req.params.id})
		.then(tweet => res.send(tweet))
		.catch(error => res.send(error));
}

export default  {
	description: 'unfollow a user',
	type: 'post',
	path: '/api/unfollow/:id',
	handlers: [
		unfollowUser
	],
}
