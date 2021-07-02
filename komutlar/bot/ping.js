const Discord = require('discord.js');

exports.run = async (client, message) => {
  const embed = new Discord.MessageEmbed()
  .setDescription(`Botumuzun gecikmesi **${client.ws.ping}ms**'dir. Elimizden geldiğince hızlı olmaya çalışıyoruz!`)
  .setTitle("DisCore - Gecikme")
    .setColor("#B8A8FF")

  .setFooter("DisCore - Botumuzu ekle ve avantajlardan faydalan.","https://images-ext-1.discordapp.net/external/PCW57yIHfRBZRhRZrNLCGt0KdbN6qPFDkN3CNACI3PU/https/cdn.discordapp.com/avatars/657278379053154313/02b0f78e9e58dd015c3c530eaff4f66c.webp")
      message.channel.send(embed)
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };
  
  exports.help = {
    name: "ping",
    description: "31",
    usage: "sjsjsj",
  };