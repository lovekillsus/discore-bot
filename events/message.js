
const Discord = require("discord.js")
const db = require("quick.db")
let talkedRecently = new Set();
module.exports = message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(message.client.ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(message.client.ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
 if (cmd) {
    
    let karaliste = db.fetch(`karalist_${message.author.id}`, "aktif")
        let karalistesebep = db.fetch(`sebep_${message.author.id}`)
        if (karaliste == "aktif") {
   let karaliste = new Discord.MessageEmbed()
    .setColor("0x36393F")
   .setTitle('KOMUTLARI KULLANAMAZSINIZ!')
  .setDescription(`Üzgünüm ancak komutları kullanamazsınız! Kurucularımız tarafından **${karalistesebep}** sebebiyle komutları kullanmanız yasaklandı!.`)
   .setFooter(`DisCore'dan engellendiniz.`)
   .setImage("https://img.artigercek.com/uploads/1/0/7pOJ1lYcS2P0bKjoHMFpFC4xAT7bD3JnNSmjY4wJ.jpeg")
   .setThumbnail(client.user.avatarURL())
   
   const westrabencanımbro = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTimestamp()
   .setFooter(`DisCore`)
   .setDescription("**"+message.author.tag+"** adlı kullanıcı karalistede olup **"+command+"** adlı komutu: **"+message.guild.name+"** sunucusunda kullanmayı denedi.")
   client.channels.cache.get("Kanal ID").send(westrabencanımbro)
  return message.channel.send(karaliste)
        }
        }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};