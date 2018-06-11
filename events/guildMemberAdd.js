module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Welcome **' + username + '**!');
    member.guild.defaultChannel.send('wc '+username+'');
};
