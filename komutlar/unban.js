const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Warning :warning:', '`unban` You can not use the command in private messages.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('`mod-log` i cant find mod-log channel.');
  if (reason.length < 1) return message.reply('You must write the reason for ban removal.');
  if (!user) return message.reply('You must write the ID number of the person to be removed..').catch(console.error);
  message.guild.unban(user);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('act:', 'ban Lift')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Authorized:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Lift the ban of someone you want.',
  usage: 'unban [user] [reason]'
};
