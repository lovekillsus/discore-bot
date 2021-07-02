

 const Discord = require("discord.js");
  exports.run = async(client, message, args) => {
    let title = [`DisCore - Eğlence Komutları`,
`DisCore - Kullanıcı Komutları`,
`DisCore - Bot Komutları`,
`DisCore - Moderasyon Komutları`,
`DisCore - Sistemler Komutları`,
`DisCore - Eylemler Komutları`,
`DisCore - NSFW Komutları`
,`DisCore - Bot Yetkilisi Komutları`]
    let list = [`<:eglence:859863692485066812> **Eğlenceli komutları**

> **!!şekilliyaz** - Yazınızı rastgele bir fontta atar.
> **!!rastgele-emoji** - Rastgele emoji gönderir.
> **!!fakemesaj** - Bir kullanıcının adına fakemesaj gönderir.
> **!!aşkölçer** - 2 kullanıcı arasındaki aşkı ölçer.
> **!!mcbaşarım** - Yazınızı Minecraft başarımına dönüştürür.
> **!!ascii** - Metninizi ASCII'ye dönüştürür.
> **!!yapayzeka** - Yapay zeka ile konuşursunuz`,`<:kullanici:859863746481618964> **Kullanici komutları**


> **!!afk** - AFK Modunu ayarlarsınız.
> **!!avatar** - Kullanıcının profil fotoğrafını çeker.
> **!!havadurumu** - Belirtilen lokasyonun havadurumunu verir.
> **!!kanalbilgi** - Belirtilen kanal hakkında bilgi verir.
> **!!hesapla** - İşlemlerinizi hesaplayıp atar.
> **!!emoji-id** - Belirtilen emojinin ID'sini verir.
> **!!rolbilgi** - Belirtilen rolün bilgilerini verir.
> **!!sunucubilgi** - Sunucunun bilgilerini verir.
> **!!sunucuresmi** - Sunucunun resmini verir.`,
`
<:bot:859863800455102484> **Bot Komutları**


> **!!ping** - Botun gecikme süresini verir.
> **!!istatistik** - Botun istatistiklerini verir.
> **!!öneri** - Bot hakkında bir öneri paylaşırsınız.
> **!!yardım** - Botun yardım menüsünü gösterir.
> **!!ilet** - Sahibime mesaj iletirsiniz.
> **!!davet** - Botun linklerini görüntülersiniz.
> **!!bug-bildir** - Bot hakkında bir açığı bildirebilirsiniz.
`,
`
<:mod:859863868459974706> **Moderasyon Komutları**


> **!!ban** - Bir kullanıcıyı sunucudan engeller. **BAKIMDA**
> **!!mute** - Bir kullanıcıyı sunucuda susturur. **BAKIMDA**
> **!!unmute** - Bir kullanıcıyı sunucudaki susturulmasını kaldırır. **BAKIMDA**
> **!!kick** - Bir kullanıcıyı sunucudan atar. **BAKIMDA**
> **!!nuke** - Bulunduğunuz kanalı veya belirtilen kanalı patlatıp aynısını yeniden açar.
> **!!yazıyor** - Botun kanaldaki yazıyor durumunu açar/kapatırsınız.
> **!!yavaşmod** - Kanalın yazım sınırını belirlersiniz.
`,
`
<:sistm:859863918871445505> **Sistemler Komutları**


> **!!otorol - Otomatik rol sistemini ayarlar.
> **!!otocevap - Otomatik cevap sistemini ayarlar.
> **!!küfürkoruma** - Küfür korumasını ayarlar.
> **!!reklamkoruma** - Reklam korumasını ayarlar.
> **!!capslockengel** - Caps lock korumasını ayarlar.
> **!!botkoruma** - Bot koruma sistemini ayarlar.
> **!!isimtemizleyici** - İsim temizleyici sistemini ayarlar.(Giren üyelerin adlarındaki sembolleri temizler.)
> **!!sayaç** - Sayaç sistemini ayarlar.
> **!!sayaç-sıfırla** - Sayaç sistemini sıfırlar.
> **!!ayarlar** - Sunucudaki ayarlı sistemleri gösterir.
`,
`
<:eylem:859863988233306123> **Eylemler Komutları**


> **!!sarıl** - Bir kullanıcıya sarılırsınız.
> **!!öp** - Bir kullanıcıyı öpersiniz.
> **!!pat** - Bir kullanıcının kafasını okşarsınız.
> **!!besle** - Bir kullanıcıyı beslersiniz.
> **!!tokat** - Bir kullanıcıya tokat atarsınız.
`,
`
Bu kategorinin içeriği 18 yaş üstü kullanım gerektirdiğinden dolayı kapatılmıştır. Kanal ayarlarından NSFW Seçeneğini açıp yardım komutunu tekrar yazarak bu içeriği görüntüleyebilirsiniz.

18 YAŞ ALTI KULLANICILAR İÇİN YASAKLIDIR VE DISCORE BUNLARDAN SORUMLU DEĞİLDİR!
`,
`
<:staff:859864110530035722> **Bot Yetkilisi Komutları**


> **!!karaliste** - Bir kullanıcıyı karalisteye alır/çıkartır.
> **!!eval** - Bot üzerinde kod denersiniz.
> **!!hepsindençıkart** - Belirtilen üyenin sahip olduğu sunuculardan çıkarım.
> **!!destroy** - Projeyi yeniden başlatır ve değişiklikleri kaydeder.
> **!!postdbl** - DBL'ye bot istatistiklerini gönderir.
`
];
    
 
    
    const symbols = ["⬅️", "➡️", "🗑️"];
    let page = 0;
    let e = new Discord.MessageEmbed()
.setAuthor("Merhaba, "+message.author.username+"")
  .setTitle(`DisCore`).setURL(`https://discord.gg/uptime`)  
  .setColor("#B8A8FF")
    .setFooter(`DisCore - https://discorebot.xyz`, `https://media.discordapp.net/attachments/859864553662709801/860082667168989194/02b0f78e9e58dd015c3c530eaff4f66c.png`)
    .setDescription("<:info:859864184116346910> Alttaki tepkilere basarak komutları görüntüleyebilirsin!")
    .addField('<:eglence:859863692485066812> Eğlenceli komutları', 'Eğlence komutlarımız ile iyi vakit geçir :).', true)
    .addField('<:kullanici:859863746481618964> Kullanıcı komutları', 'Kullanıcıların işine yarayabilecek komutlarımız.', true)
    .addField('<:bot:859863800455102484> Bot komutları', 'Bot hakkında olan komutlar.', true)
    .addField('<:mod:859863868459974706> Moderasyon komutları', 'Yetkililerin işini kolaylaştıracak komutlar!', true)
    .addField('<:sistm:859863918871445505> Sistemler komutları', 'Sunucunda ayarlayabileceğin ve otomatik çalışacak sistemler!', true)
    .addField('<:eylem:859863988233306123> Eylem komutları', 'Kullanıcılar üzerinde uygulayabileceğin eylemlerin komutları!', true)
    .addField('<:nsfw:859864049164353596> NSFW komutları', '18 yaş üstü kullanıcıların kullanabileceği komutlar!', true)
    .addField('<:staff:859864110530035722> Bot Yetkilisi komutları', 'Botun moderatör/beta tester/kurucularının kullanabileceği komutlar!', true)

    .setColor("#B8A8FF")
    const msg = await message.channel.send({ embed: e });
    symbols.forEach(symbol => msg.react(symbol));
    let doing = true;
    while (doing) {
    let r;
    const filter = (r, u) => symbols.includes(r.emoji.name) && u.id == message.author.id;
    try { r = await msg.awaitReactions(filter, { max: 1, time: 200000, errors: ["time"] }) }
    catch { return; }
    const u = message.author;
    r = r.first();
    if (r.emoji.name == symbols[1]) {
      if (!list[page + 1]) msg.reactions.resolve(r.emoji.name).users.remove(u.id).catch(err => {});
      else {
      page++;
      msg.reactions.resolve(r.emoji.name).users.remove(u.id).catch(err => {});

      let newEmbed = new Discord.MessageEmbed()
     .setAuthor("Merhaba, "+message.author.username+"")
     .setDescription(list[page])
     .setTitle(title[page]).setURL(`https://discord.gg/uptime`)
     .setColor("#B8A8FF")
     msg.edit(newEmbed);
      }
    } else if (r.emoji.name == symbols[0]) {
      if (!list[page - 1]) msg.reactions.resolve(r.emoji.name).users.remove(u.id).catch(err => {});
      else {
      page--;
      msg.reactions.resolve(r.emoji.name).users.remove(u.id).catch(err => {});
      let newEmbed = new Discord.MessageEmbed()
     .setDescription(list[page])
     .setAuthor("Merhaba, "+message.author.username+"")
     .setTitle(title[page]).setURL(`https://discord.gg/uptime`)
     .setColor("#B8A8FF")
     msg.edit(newEmbed);
      }
    } else if (r.emoji.name == symbols[2]) {
       msg.delete()
       return;
      }
  }}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","komutlar","help","y"],
  category: "admin",
  permLevel: 0
};

module.exports.help = {
  name: 'yardım2',
  description: 'Gelişmiş Sayfalı Yardım.',
  usage: 'yardım'
};