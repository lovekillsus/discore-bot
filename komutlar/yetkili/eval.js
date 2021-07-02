const Discord = require('discord.js');

exports.run = async (client, message, argüman, member) => {

if (message.author.id != "167416651866832896" && message.author.id != "574230824334000129") return
 function clean (text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }
  try {
    const kod = argüman.join(" ");
    let evaled = await eval(kod);

    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

    message.channel.send(clean(evaled), { code: "xl" });
  } catch (err) {
    message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
};
exports.conf = {
aliases: []
}
exports.help = {
  name: 'eval'
};