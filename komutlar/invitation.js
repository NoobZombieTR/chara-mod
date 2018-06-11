const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Check your private messages. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Link: https://discordapp.com/oauth2/authorize?client_id=455050256485449749&scope=bot&permissions=2146958591');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Bot Add', 'invite bot', 'Botadd', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'invitation',
  description: 'Bot sends invitation link.',
  usage: 'invitation'
};
