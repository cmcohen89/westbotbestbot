const { SlashCommandBuilder } = require('discord.js');

const whaleOptions = [
  `https://www.youtube.com/watch?v=lCXDsA0WI5o&ab_channel=JoelV`,
  `https://www.youtube.com/watch?v=ezqvF2TzjSc&ab_channel=DannyTrejo`];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('imissyou')
		.setDescription('I\'m sorry I missed your call...'),
	async execute(interaction) {
		await interaction.reply(whaleOptions[Math.floor(Math.random()*whaleOptions.length)]);
    interaction.followUp(`I really want you to call me back ${interaction.user}!`);
	},
};
