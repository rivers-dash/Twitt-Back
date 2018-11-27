import client from '../../client'

function filter(req, res) {
	let tweets = []
	if (!req.body.limit) {
		req.body.limit = 20
	}
	let stream = client.stream('statuses/filter', { track: req.body.filter })
		stream.on('tweet', function(tweet) {
			tweets.push(tweet)
			console.log(tweets.length)
			if (tweets.length === req.body.limit) {
				stream.stop()
				res.send(tweets)
			}
		})
}

export default  {
	description: 'Sample a number of recent public tweets by the word filter',
	type: 'post',
	path: '/api/stream/filter',
	handlers: [
		filter
	],
}
