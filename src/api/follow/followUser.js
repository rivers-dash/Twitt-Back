import client from '../../client'

let cache = [];
let cacheAge = 0;

function followUser(req, res) {
	const path = 'create'
	client
		.post(`friendships/${path}`, {id: req.params.id})
		.then(tweet => res.send(tweet))
		.catch(error => res.send(error));
}

export default  {
	description: 'follow a user',
	type: 'post',
	path: '/api/follow/:id',
	handlers: [
		followUser
	],
}
