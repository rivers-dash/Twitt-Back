import client from '../../client'

function sample(req, res) {
	let tweets = []
	req.params.limit = parseInt(req.params.limit)
	if (!req.params.limit) {
		req.params.limit = 20
	}
	let stream = client.stream('statuses/sample')
		stream.on('tweet', function(tweet) {
			tweets.push(tweet)
			console.log(tweets.length)
			if (tweets.length === req.params.limit) {
				stream.stop()
				res.send(tweets)
			}
		})
}

export default  {
	description: 'Sample a number of recent public tweets',
	type: 'get',
	path: '/api/stream/sample/:limit',
	handlers: [
		sample
	],
}
