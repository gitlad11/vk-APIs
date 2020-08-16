const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config.json')
//try {
	const VkApi = require('node-vk-bot-api') 
	//} catch { console.log('you have to install node-vk-bot-api')}

const bot = new VkApi(config.token)
const app = express()

app.use(bodyParser.json())

bot.on((ctx) => {
	ctx.reply("Hello!");
})

bot.sendMessage(548629695, "hello!")

bot.command('start' , async (ctx) =>{
	await ctx.reply("i have got your message")
})
app.post('/', bot.webhookCallback);

app.listen(4001, console.log('bot is polling'))
//bot.startPolling((error) =>{
	//if(error){
		//console.log(error)
	//} else {
		//console.log('bot is polling')
	//}
//})