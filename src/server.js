import 'dotenv/config'

import express from 'express'

import client from './client'
import twitt from './routes/twitt'

const app = express()

const port = 8080

twitt(app)

app.listen(port, function() {
	console.log('Server up and listening on port: ', port)
})

// app.get('/api/user', (req, res) => {
//   client.get('account/verify_credentials').then(user => {
//     res.send(user)
//   }).catch(error => {
//     res.send(error);
//   });
// });



// app.get('/api/feed', (req, res) => {
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

// app.get('/api/stream/sample', (req, res) => {
// 	let tweets = []
// 	if (!req.params.limit) {
// 		req.params.limit = 20
// 	}
// 	let stream = client.stream('statuses/sample')
// 		stream.on('tweet', function(tweet) {
// 			tweets.push(tweet)
// 			console.log(tweets.length)
// 			if (tweets.length === req.params.limit) {
// 				stream.stop()
// 				res.send(tweets)
// 			}
// 		})
// })

// var stream = T.stream('statuses/sample')
//
// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })

// app.post('/api/favorite/:id', (req, res) => {
//   const path = 'create'
//   client
//     .post(`favorites/${path}`, {id: req.params.id})
//     .then(tweet => res.send(tweet))
//     .catch(error => res.send(error));
// });
//
// app.post('/api/friendship/:id', (req, res) => {
//   const path = 'create'
//   client
//     .post(`friendships/${path}`, {id: req.params.id})
//     .then(tweet => res.send(tweet))
//     .catch(error => res.send(error));
// });
//
// app.post('/api/retweet/:id', (req, res) => {
//   const path = (req.body.state) ? 'retweet' : 'unretweet';
//   client
//     .post(`statuses/retweet/${req.params.id}`)
//     .then(tweet => res.send(tweet))
//     .catch(error => res.send(error));
// });
