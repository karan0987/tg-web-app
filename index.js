const {Telegraf} = require('telegraf')
var bot = new Telegraf('5783478127:AAG3HrfXaxI2ZFDZBAixnSku1N7Nnr1BYpY')
bot.launch()
console.log('Bot Launched.....')

bot.command('start',(ctx)=>{
  ctx.reply('Your Web App 👇👇',{
    reply_markup : {
      inline_keyboard : [
        [{text:'Open Web App',web_app:{
          url : 'https://karan786-dev.github.io/tg-web-app/'
        }}]
        ]
    }
  })
})