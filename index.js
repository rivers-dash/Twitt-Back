var Twit = require('twit')

var T = new Twit({
		consumer_key: 'wSIT2z1xHraGG6kqkzlV0FGPV',
		consumer_secret: 'osj8vJGdtxCDa5yMw3TEoP8h6jxBqeuowlDAzpSOg9jy627PZe',
		access_token: '1067095278245814273-67HGbrbWgs6Cv5nEm7N4VZhBOXr9ID',
		access_token_secret: 'FQPrPxjmRA4YSoZ3guXwKndH1hTMpXjR3WMkErdFXEPez'
})

    T.get('account/verify_credentials', {
        include_entities: false,
        skip_status: true,
        include_email: false
    }, onAuthenticated)

    function onAuthenticated(err, res) {
        if (err) {
            throw err
        }

        console.log('Authentication successful. Running bot...\r\n')

				// T.post('favorites/create', {
				// 	id: 1067100814743867400
				// }, onTweeted)

				var stream = T.stream('statuses/sample')

				stream.on('tweet', function (tweet) {
				  console.log(tweet)
				})

        // var stream = T.stream('user', { stringify_friend_ids: true })
				//
        // stream.on('follow', onFollowed)
        // stream.on('error', onError)
    }

    function onFollowed(event) {
        var name = event.source.name
        var screenName = event.source.screen_name
        var response = '@' + screenName + ' Thank you for following, ' + name + '!'

        T.post('statuses/update', {
            status: response
        }, onTweeted)

        console.log('I was followed by: ' + name + ' @' + screenName)
    }

    function onError(error) {
        throw error
    }

    function onTweeted(err, reply) {
        if (err !== undefined) {
            console.log(err)
        } else {
            console.log('Tweeted: ' + reply)
        }
    }
