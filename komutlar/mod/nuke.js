const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Kanlları Yönet** Yetkin Olmadığı İçin Komutu Kullanamazsın`);
message.channel.send(`<:hayir:859863494614581278> | Eğer 30 saniye içinde evet yazarsanız <#`+message.channel.id+`> kanalı yok olacak ve tekrar kopyası açılacak! Uyarılarımız:

- Mesajların hepsi otomatik yok olacaktır ve sabitlemeler vs. yok olacaktır.
- Kanala dair bütün veriler silinecek fakat yetkileri,ismi,bulunduğu yer aynı kalacaktır.
- 30 saniye içinde evet yazmazsanız bot size cevap vermeyecektir.`)
.then(() => { 
  message.channel.awaitMessages(response => response.content === "hayır", {
    max: 1,
    time: 30000,
    errors: ['time']}).then((collected) => {  message.channel.send("<:evet:859864610600910879> | Başarıyla iptal edildi!") }) 

  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`Kanala Nuke Atılıyor`).then(message => {
      message.channel.clone({position: message.channel.position});
      message.channel.delete();
    }).catch(console.error)
    }) .catch(() => {
      message.channel.send('<:hayir:859863494614581278> | Nuke İşlemi İptal Edildi');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};
exports.help = {
  name: 'nuke'
};