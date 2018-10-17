var ServerID = "499939108521639966";// اي دي الروم
var ChannelID = "499967544912773120";

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}
  
var timer = setTimeout(timerFunc, 1000);
client.on("ready", () => {

	      var interval = setInterval (function () {
client.channels.get('502231555163553792').send('لا إله الا الله, سبحان الله, الحمدالله, الله اكبر');		  }, 100000);
  
	      var interval1 = setInterval (function () {
  client.channels.get('499967544912773120').send('#daily');
  client.channels.get('499967544912773120').send('#rep <@401053902168129556>');  
		  }, 86000000);
  
	      var interval2 = setInterval (function () {
client.channels.get('499967544912773120').send('t!daily <@401053902168129556>');
client.channels.get('499967544912773120').send('t!rep <@401053902168129556>');
		  }, 61360000);
});

client.login(process.env.BOT_TOKEN); 
