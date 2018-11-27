import client from '../../client'

function unretweet(req, res) {
	const path = 'unretweet'
	client
		.post(`friendships/${path}`, {id: req.params.id})
		.then(tweet => res.send(tweet))
		.catch(error => res.send(error));
}

export default  {
	description: 'unretweet a user',
	type: 'post',
	path: '/api/unretweet/:id',
	handlers: [
		unretweet
	],
}
