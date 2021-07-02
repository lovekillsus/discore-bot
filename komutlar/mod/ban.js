const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
        if(!message.guild.members.cache.get(message.author.id).hasPermission("BAN_MEMBERS"))
         return message.channel.send('<:hayir:859863494614581278> | Bu komut için **Üyeleri Engelle** yetkisine sahip olmalısın.')
        const user = message.mentions.users.first();
          const sebeps = args.slice(1).join(" ")
let sebep;
if(sebeps !== null) sebep = `**${sebeps}**`
else sebep = `**Belirtilmemis**`
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .ban({
                reason: sebep,
              })
              .then(() => {
                message.channel.send()
                return message.channel.send(`<:evet:859864610600910879> | Kullanıcı **${user.username}**, yetkili **${message.author.username}** tarafından sunucudan engellendi! Sebep: ${sebep}`)
              })
              .catch(err => {
                message.channel.send(`<:hayir:859863494614581278> | Bu kullanıcıyı engelleyemiyorum.`)
                console.error(err);
              });
          } else {
            message.channel.send(`<:hayir:859863494614581278> | Lütfen bir **kullanıcı etiketleyin.**`)
          }
        } else {
          message.channel.send(`<:hayir:859863494614581278> | Lütfen bir **kullanıcı etiketleyin.**`)
        }
      }
    
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
  exports.help = {
    name: "ban",
    description: "31",
    usage: "sjsjsj",
  };