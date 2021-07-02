const Discord = require('discord.js');


module.exports = client => {



    
  console.log(`${client.user.username} Aktif, Komutlar Yüklendi!`);
  client.user.setActivity("DisCore ♦ discorebot.xyz ♦ !!yardım ♦ 307 sunucu ♦ Kısa süreli bakım!");
  console.log(`${client.guilds.cache.size} Sunucu + ${client.users.cache.size} Kullanıcı`);
};

