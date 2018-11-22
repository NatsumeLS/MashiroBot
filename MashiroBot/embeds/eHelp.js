module.exports.helpEmbed = function(client, message, Discord) {
  var embed = new Discord.RichEmbed()
    .setTitle("Mashiro")
    .setDescription("List of commands for Mashiro.")
    .setColor(0x00AE86)
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Commands", `**/leaderboard**
**/rank**
**/rank** \`\`@UserName\`\`
**/help**
**/help** \`\`Command\`\`` , true)
    .setFooter("Natsume#4208", `${client.user.displayAvatarURL}`)
    message.channel.send({embed: embed});
}