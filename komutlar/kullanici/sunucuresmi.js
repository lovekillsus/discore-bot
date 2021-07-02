const Discord = require('discord.js');

exports.run = async (client, message) => {
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name,"sunucusunun resmi",message.guild.iconURL())
    .setColor("#B8A8FF")

  .setImage(message.guild.iconURL({size:4096,dynamic:true}))
  .setDescription("İşte sunucunun iconu! Oldukca güzel gözüküyor :wink:")
  .setFooter("DisCore Bot","https://images-ext-1.discordapp.net/external/PCW57yIHfRBZRhRZrNLCGt0KdbN6qPFDkN3CNACI3PU/https/cdn.discordapp.com/avatars/657278379053154313/02b0f78e9e58dd015c3c530eaff4f66c.webp")
  message.channel.send(embed)
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };
  
  exports.help = {
    name: "sunucuresmi",
    description: "31",
    usage: "sjsjsj",
  };