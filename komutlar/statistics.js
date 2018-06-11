const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [day], H [clock], m [minute], s [second]");
  msg.channel.sendCode("asciidoc", `= statistics =
• Memory usage :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Work Time :: ${duration}
• User :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
• Servers :: ${client.guilds.size.toLocaleString()}
• Channels :: ${client.channels.size.toLocaleString()}
• Discord.JS version :: v${Discord.version}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot status', 'i', 'bi', 'statistics', 'using', 'botstatus', 'bs', 'statistics', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'statistics',
  description: 'Bot statistics shows.',
  usage: 'statistics'
};
