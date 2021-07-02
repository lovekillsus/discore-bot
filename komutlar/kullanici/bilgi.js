const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = async (client, message, args) => {

if(!args[0]) return message.channel.send("<:hayir:859863494614581278> | Lütfen bir **emoji ID/isim** belirtin.");

  const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
  var emoji;
  if(s) {
  if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send('<:hayir:859863494614581278> | Böyle bir emoji bulunamadı!')
  emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
  } else {
  if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send('<:hayir:859863494614581278> | Böyle bir emoji bulunamadı!')
  emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
  };

  const author = await emoji.fetchAuthor();

 message.channel.send(`<:evet:859864610600910879> | ${emoji} Emojisinin ID'si: \`${emoji.id}\` `)

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'emoji-id',
  namee: 'info'
};