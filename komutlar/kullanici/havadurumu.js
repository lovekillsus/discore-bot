const Discord = require("discord.js");
const weather = require("weather-js");

exports.run = (client, message, args) => {
  weather.find({ search: args.join(" "), degreeType: "C" }, function(
    err,
    result
  ) {
    if (err) message.channel.send(err);
    if (result === undefined || result.length === 0) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription("<:hayir:859863494614581278> | Lütfen bir bölge belirtin.")
           .setColor("#B8A8FF")
      );
      return;
    }

    var current = result[0].current;
    var location = result[0].location;

    const axe = new Discord.MessageEmbed()

      .setDescription(`**${current.skytext}**`)
      .setAuthor(`${current.observationpoint}  Hava Durumu`)
      .setThumbnail(current.imageUrl)
      .setImage("https://media.discordapp.net/attachments/800624623250702356/822902313785622538/Baslksz742_20210320213936.png")
       .setColor("#B8A8FF")
      .addField(" Sıcaklık", `${current.temperature} Derece`, true)
      .addField(" Hissedilen Sıcaklık", `${current.feelslike}`, true)
      .addField(" Zaman Dilimi", `UTC${location.timezone}`, true)
      .addField(" Rüzgar", current.winddisplay, true)
      .addField(" Derece Türü", location.degreetype, true)
      .addField(" Nem", `${current.humidity}%`, true);

    message.channel.send(axe);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["havadurumu"],
  permLevel: "0"
};

exports.help = {
  name: "hava-durumu",
  description: "hava durumunu gösterir",
  usage: "havadurumu"
};