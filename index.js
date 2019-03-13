const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
	bot.user.setGame("VegaBot - v/help");
	console.log("Le bot a bien ete connecte");
});

bot.login("NTU1MTE4MzQ4NDY4MzU1MDc2.D2sE5Q.3XtwU9keMgzk0Qqg5qM_U1NQs8k");
