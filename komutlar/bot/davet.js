const  Discord = require("discord.js");
exports.run = (client, message, args) => {
  const { MessageButton } = require('discord-buttons')
  const embed = new Discord.MessageEmbed()
  .setImage("https://cdn.discordapp.com/attachments/645995932617277441/801153190870515732/discoresupport.png")
  .setColor("#B8A8FF")
let buton = new MessageButton()
.setStyle('url')
.setID('davetbutton')
.setLabel('Beni Ekle.')
.setURL("https://discord.gg/uptime")
let buton2 = new MessageButton()
.setStyle('url')
.setID('davetbutton')
.setLabel('Oy ver.')
.setURL("https://codleak.com")
let buton3 = new MessageButton()
.setStyle('url')
.setID('davetbutton')
.setLabel('Website.')
.setURL("https://discord.gg/botclub")

 message.channel.send({embed: embed , buttons: [buton, buton2, buton3]});
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori : "kullanıcı"
};

exports.help = {
  name: 'davet'
};
