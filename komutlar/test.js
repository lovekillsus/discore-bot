const Discord = require('discord.js');

exports.run = async (client, message) => {
      message.delete()
      message.channel.send("sa")
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['test'],
    permLevel: 0,
  };
  
  exports.help = {
    name: "test",
    description: "31",
    usage: "sjsjsj",
  };