const easyvk = require('easyvk')
const config = require('./config.json')

easyvk({
	username : config.username,
	password : config.password 
}).then( async vk => {

	//get current user
	let me = vk.session.user_id

	//method returns full info about loged in user
	let getInfo = await vk.call('account.getProfileInfo')
	console.log(getInfo)

	//method returns user's notifications count
	let getEvents = await vk.call('account.getCounters')
	console.log(getEvents)

	//messages.send method in vk api which sends messages
	let reply = await vk.call('messages.send', {
		peer_id : config.someId,
		message : 'я тут',
		random_id : easyvk.randomId()
	})
    
	//change profile 
	let changeInfo = await vk.call('account.saveProfileInfo', {
		first_name : 'Иван',
		last_name : 'Мисов',
		relation : 7
	})
	//console.log(changeInfo)

	//add friend , follow = 1 is following , follow = 0 not
	let addfriend = await vk.call('friends.add', {
		user_id : config.someId,
		text : 'добавляйся!',
		follow : 1
	})
	console.log(addfriend)

	//delete user from friends
	let deletefriend = await vk.call('friends.delete', {
		user_id : config.someId
	})
	console.log(deletefriend)
})