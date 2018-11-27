import client from '../../client'

let cache = [];
let cacheAge = 0;

function getFeed(req, res) {
	if (Date.now() - cacheAge > 60000) {
		cacheAge = Date.now();
		const params = { tweet_mode: 'extended', count: 200 };
		if (req.query.since) {
			params.since_id = req.query.since;
		}
		client
			.get(`statuses/home_timeline`, params)
			.then(timeline => {
				cache = timeline;
				res.send(timeline);
			})
			.catch(error => res.send(error));
	} else {
		res.send(cache);
	}
}

export default  {
	description: 'Getting Tweets from feed',
	type: 'get',
	path: '/api/feed',
	handlers: [
		getFeed
	],
}
