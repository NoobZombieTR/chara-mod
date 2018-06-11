module.exports = member => {
  let guild = member.guild;
  member.send('Why did you go?');
  guild.defaultChannel.sendMessage(`${member.user.username} gone.`);
};
