const Discord = require('discord.js');

exports.run = async (client, message) => {
        const user = message.mentions.users.first() || message.author;
      const embed = new Discord.MessageEmbed()
     .setTitle(user.tag)
        .setColor("#B8A8FF")

      .setDescription(`[PNG](${user.displayAvatarURL({ format: 'png', size: 1024 })}),[JPG](${user.displayAvatarURL({ format: 'jpg', size: 1024 })}),[JPEG](${user.displayAvatarURL({ format: 'jpeg', size: 1024 })})`)
      .setImage(`${user.displayAvatarURL({size:4096,dynamic:true})}`)
      message.channel.send(embed)
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };
  
  exports.help = {
    name: "avatar",
    description: "31",
    usage: "sjsjsj",
  };