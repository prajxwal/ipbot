const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();




client.once('ready', () => {
	console.log('Ready!');
});

client.login('NzYzNTk4Mjk3MjEwMDI4MDc0.X36CVQ.n-1Q3WA0_RtLwYRWBTs0ocyE7cE');

var prefix = "gib "


client.on("message", (message) => {
    if(message.content == prefix + "ip") {
        fetch('https://api.ipify.org/?format=json')
        .then(res => res.json())
        .then(data => message.reply("Here's IP: " + data.ip))
         }
});

client.on("message", (message) => {
    if(message.content == prefix + "helo") {
        message.reply("hi retard:)");
     }
});

client.on("message", (message) => {
    if(message.content == prefix + "help") {
        message.reply("it's in development");
}     
});

















