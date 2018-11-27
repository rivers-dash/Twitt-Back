import client from '../../client'

function retweet(req, res) {
	const path = 'retweet'
	client
		.post(`friendships/${path}`, {id: req.params.id})
		.then(tweet => res.send(tweet))
		.catch(error => res.send(error));
}

export default  {
	description: 'retweet a user',
	type: 'post',
	path: '/api/retweet/:id',
	handlers: [
		retweet
	],
}
