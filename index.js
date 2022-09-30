const {Telegraf} = require('telegraf')
const express = require("express");
var app = express()
app.listen()
var router = express.Router()
app.use('/',router)
var bot = new Telegraf('5783478127:AAG3HrfXaxI2ZFDZBAixnSku1N7Nnr1BYpY')
bot.launch()
console.log('Bot Launched.....')

router.get("/",(req,res)=>{
  res.send('Hello,World')
})

bot.command('start',(ctx)=>{
  ctx.reply('Your Web App 👇👇',{
    reply_markup : {
      inline_keyboard : [
        [{text:'Open Web App',web_app:{
          url : 'https://tg-web-app-production.up.railway.app:3000'
        }}]
        ]
    }
  })
})