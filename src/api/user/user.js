import client from '../../client'

function user(req, res) {
  client.get('account/verify_credentials').then(user => {
    res.send(user)
  }).catch(error => {
    res.send(error);
  });
}

export default  {
	description: 'Get user\'s info',
	type: 'get',
	path: '/api/user',
	handlers: [
		user
	],
}
