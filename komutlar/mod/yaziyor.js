const Discord = require('discord.js');

exports.run = async(client, message, args) => {
 if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Kanlları Yönet** Yetkin Olmadığı İçin Komutu Kullanamazsın`);
message.channel.startTyping()

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "yazıyor",
    description: "öneri bildirirsiniz",
    usage: "öneri <öneri>"
}