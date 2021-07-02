const Discord = require("discord.js");
const db = require('quick.db');
exports.run = async (client, message, args) => {
 if(message.author.id !== "167416651866832896") if(message.author.id !== "167416651866832896") return message.channel.send("<:hayir:859863494614581278> | Bu komutu kullanabilmek için, bot sahibi yetkisine sahip olman gerekiyor.");
  let user = args[0]
      let sebep = args.slice(1).join(' ')
  if (!user) {
    let e = new Discord.MessageEmbed()
     .setColor("#B8A8FF")
    .setDescription(" <:hayir:859863494614581278> Karalisteye almak istediğin kullanıcının id sini yaz!")
    message.channel.send({embed: e})
    return;
  };
  if(!sebep){
    let e = new Discord.MessageEmbed()
    .setColor("#B8A8FF")
    .setDescription("<:hayir:859863494614581278> Lütfen karalisteye almak için bir sebep belirtin!")
    message.channel.send({embed: e})
    return;
  }
  
  
  db.set(`karalist_${user}`, "aktif")
  db.set(`sebep_${user}`, sebep)
  
  let embed = new Discord.MessageEmbed()
     .setColor("#B8A8FF")
    .setDescription(`<:hayir:859863494614581278> <@${user}> adlı kullanıcı başarıyla **${sebep}** sebebiyle karalisteye alındı!`)
    message.channel.send({embed: embed})
  const westrabumm = new Discord.MessageEmbed()
   .setColor("#B8A8FF")
  .setFooter("DisCore")
  .setTimestamp()
  .setDescription(`<:hayir:859863494614581278> <@${message.author.id}> adlı yetkilimiz tarafından karalisteye alındın! Artık DisCore'nun komutlarını kullanamazsın. Karalisteye alınma sebebin: **${sebep}**`)
  if (client.users.cache.get(user).send(westrabumm)){
  } else return
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 0
};

exports.help = {
  name: "karaliste",
  description: "Belirtilen kullancıyı kara listeye alır!",
  usage: "karaliste <kullanıcı ID>"
};