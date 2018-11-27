import { apis } from '../api'

export default function twitt(app) {

	apis.forEach(function(api) {
		const { description, type, path, handlers, schema } = api
		console.log((type.toUpperCase()), (path), ' : ', description)
		app[type](path, handlers)
	})

	// app.get('/api/home', (req, res) => {
	//   if (Date.now() - cacheAge > 60000) {
	//     cacheAge = Date.now();
	//     const params = { tweet_mode: 'extended', count: 200 };
	//     if (req.query.since) {
	//       params.since_id = req.query.since;
	//     }
	//     client
	//       .get(`statuses/home_timeline`, params)
	//       .then(timeline => {
	//         cache = timeline;
	//         res.send(timeline);
	//       })
	//       .catch(error => res.send(error));
	//   } else {
	//     res.send(cache);
	//   }
	// });

	// app.post('/api/favorite/:id', (req, res) => {
	//   const path = 'create'
	//   client
	//     .post(`favorites/${path}`, {id: req.params.id})
	//     .then(tweet => res.send(tweet))
	//     .catch(error => res.send(error));
	// });

	// app.post('/api/friendship/:id', (req, res) => {
	//   const path = 'create'
	//   client
	//     .post(`friendships/${path}`, {id: req.params.id})
	//     .then(tweet => res.send(tweet))
	//     .catch(error => res.send(error));
	// });

	// app.post('/api/retweet/:id', (req, res) => {
	//   const path = (req.body.state) ? 'retweet' : 'unretweet';
	//   client
	//     .post(`statuses/retweet/${req.params.id}`)
	//     .then(tweet => res.send(tweet))
	//     .catch(error => res.send(error));
	// });

}
