const express = require('express')
const bodyParser = require('body-parser')
const { Botact } = require('botact')
const config = require('./config.json')
var app = express()
app.use(bodyParser.json())
//token from own vk group
//confirmation is required , to get confirmation go to vk callback , then fill domain server field,
//after vk will send json object
var bot = new Botact({
	confirmation : config.confirm,
	token : config.token
})

bot.command('start', ({ reply }) =>{
	reply('Поехали!')
})

bot.hears(/(компьютер|программирование)/, ({reply}) =>{
	reply("Я люблю компьютеры")
})

bot.on(({reply}) =>{
	reply('я незнаю что ответить')
})
app.post('/', bot.listen)

app.listen(4001, console.log('bot is polling'))