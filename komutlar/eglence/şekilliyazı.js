const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let yazi = args[0]
  if(!yazi) return message.channel.send("<:hayir:859863494614581278> | Lütfen bir **yazı** girin.");
  var flamingText = require('node-flaming-text');
flamingText({
  text: yazi
},console.log);
  
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };
  
  exports.help = {
    name: "şekilliyaz",
    description: "31",
    usage: "sjsjsj",
  };