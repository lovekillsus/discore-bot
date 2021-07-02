const Discord = require('discord.js');
const moment = require("moment")
exports.run = async (client, message) => {
  require("moment-duration-format")
// eyw occ  sg simdi qwowkwkw
      const duration = moment.duration(client.uptime).format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
 const elminsterkralım =  new Discord.MessageEmbed()
 .setAuthor("Discore-2019-2021","https://images-ext-1.discordapp.net/external/PCW57yIHfRBZRhRZrNLCGt0KdbN6qPFDkN3CNACI3PU/https/cdn.discordapp.com/avatars/657278379053154313/02b0f78e9e58dd015c3c530eaff4f66c.webp")
  .setTitle(`✩ DisCore`).setURL(`https://discord.gg/uptime`)
.setColor("#B8A8FF")
 .setDescription(`Beni sunucuna ekleyerek gelişmeme katkı sağlayabilirsin!`)
 .addField("- Bulunduğum İstatistik",` ↳ Sunucu Sayısı : ${client.guilds.cache.size}\n↳ Kullanıcı Sayısı : ${client.users.cache.size}\n↳ Kanal Sayısı : ${client.channels.cache.size}`)
 .addField("- Proje İstatistik",`↳ Gecikme süresi: ${client.ws.ping} \n↳ Mesaj gecikme süresi: 22ms \n↳ Ram kullanımı:  \n↳ Çalışma süresi: ${duration} `)
 .addField("- Bot Bilgilendirme",`↳ Komut sayısı: ${client.commands.size}\n↳ Alternatif sayısı: 126\n↳ Bot dili: Türkçe :flag_tr:\n↳ Bot prefixi: !!`)
 .addField("- Bot Linkleri", `↳ Website: [Tıkla!](https://discord.gg/uptime)\n↳ Davet: [Tıkla!](https://discord.gg/uptime)\n↳ DBL: [Tıkla!](https://discord.gg/uptime)\n↳ Oy Linki: [Tıkla!](https://discord.gg/uptime)`) 
.setImage("https://cdn.discordapp.com/attachments/645995932617277441/822949049048367194/discoree.png")
 
 return message.channel.send(elminsterkralım)
  
  
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['i'],
    permLevel: 0,
  };
  
  exports.help = {
    name: "i",
    description: "31",
    usage: "sjsjsj",
  };