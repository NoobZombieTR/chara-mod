const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Active, Commands uploaded!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} logged in with name!`);
  client.user.setStatus("online");
  client.user.setGame(`${prefix}help + ${client.guilds.size} server + ${client.users.size} user`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Game name set!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` piece of channel, ` + client.guilds.size + ` piece of channel and ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` serving the user!`);
};
