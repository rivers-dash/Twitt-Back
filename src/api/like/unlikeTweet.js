import client from '../../client'

function unlikeTweet(req, res) {
	const path = 'destroy'
	client
		.post(`favorites/${path}`, {id: req.params.id})
		.then(tweet => res.send(tweet))
		.catch(error => res.send(error));
}

export default  {
	description: 'Unliking a tweet',
	type: 'post',
	path: '/api/unlike/:id',
	handlers: [
		unlikeTweet
	],
}
