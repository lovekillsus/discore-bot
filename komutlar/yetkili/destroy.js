const Discord = require('discord.js');

exports.run = async (client, message) => {
 if(message.author.id !== "167416651866832896") if(message.author.id !== "167416651866832896") return message.channel.send("<:hayir:859863494614581278> | Bu komutu kullanabilmek için, bot sahibi yetkisine sahip olman gerekiyor.");
 
 message.react("859864610600910879")
  message.channel.send("<:evet:859864610600910879> | Bot yeniden başlatılıyor...").then(msg => {
          console.log(`Bot Yeniden başlatılıyor...`);
          process.exit(0);
        })
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['d'],
    permLevel: 0,
  };
  
  exports.help = {
    name: "destroy",
    description: "31",
    usage: "sjsjsj",
  };