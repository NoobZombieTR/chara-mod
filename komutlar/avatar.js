const Discord = require('discord.js');
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Your Avatar:`)
.setImage(`${message.author.avatarURL} `)
.setColor(0xf7dc46));
   }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'Avatar',
 description: 'throws your avatar ',
 usage: 'My Avatar'
};
