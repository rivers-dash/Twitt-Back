import client from '../../client'

function likeTweet(req, res) {
	const path = 'create'
	client
		.post(`favorites/${path}`, {id: req.params.id})
		.then(tweet => res.send(tweet))
		.catch(error => res.send(error));
}

export default  {
	description: 'Liking a tweet',
	type: 'post',
	path: '/api/like/:id',
	handlers: [
		likeTweet
	],
}
