const Discord = require("discord.js")
const db = require("quick.db")

exports.run = (client, message, args) => {

    const öneri = args.slice(0).join(' ');
    if(!öneri) return message.channel.send("<:hayir:859863494614581278> Bir mesaj belirtmelisin. ")
       
  const embed = new Discord.MessageEmbed()

  .addField("Belirtilen Mesaj:", öneri)
  .addField("Belirten Kişi:", `Adı: **${message.author.tag}** - Etiketi: <@${message.author.id}> - ID: **${message.author.id}**`)
  
  .setFooter(client.user.username, client.user.avatarURL())
  .setThumbnail(message.author.avatarURL({format: "gif"}))
  message.channel.send(`<:evet:859864610600910879> Mesajiniz başarıyla iletildi!`)
  client.users.cache.get("KENDI IDNZ").send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "ilet",
    description: "öneri bildirirsiniz",
    usage: "öneri <öneri>"
}