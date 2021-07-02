const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 // const yetkiembed = new Discord.MessageEmbed()
  //   .setColor('RED')
 //    .setTitle('___**HATA**___')
  //   .setDescription('**Yönetici** Yetkin Yok!')
    // .setImage('https://s4.gifyu.com/images/yonetic.gif')
 //  if(message.member != null && message.member.hasPermission('ADMINISTRATOR'))return message.channel.send(yetkiembed);
  if (!args[0]) {
    return message.channel.send("<:hayir:859863494614581278> | Lütfen bir işlem belirt! [`aç`, `kapat`]");
return;
  }
    if (args[0] == 'aç') {
      if (db.has(`antiraid_${message.guild.id}`) === true) {
return message.channel.send("zaten açık")
 
        }
      let kanal = message.mentions.channels.first()
      if(!kanal) return message.channel.send("kan  al ")     
      db.set(`antiraid_${message.guild.id}`,"açık")
          db.set(`antiraidkanal_${message.guild.id}`,kanal.id)
        
        const embed = new Discord.MessageEmbed()
        embed.setDescription(`Anti Raid Aktif Edildi!`)
            .setColor("GREEN")
         return message.channel.send(embed)
        }
          
    if (args[0] == 'kapat') {
      if (db.has(`antiraid_${message.guild.id}`) === false) {
return message.channel.send("ztn kapalı")
     return;
 }
            db.delete(`antiraid_${message.guild.id}`)
        const embed = new Discord.MessageEmbed()
        embed.setDescription(`Anti Raid Deaktif Edildi!`)
            .setColor("GREEN")
             return message.channel.send(embed)
          }
         
        
         
        
                 

  }
  

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori : "kullanıcı"
};
  exports.help = {
    name: "botkoruma",
    description: "31",
    usage: "sjsjsj",
  };