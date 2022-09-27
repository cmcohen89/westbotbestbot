const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('emospidey')
		.setDescription('Gonna put some dirt in your eye'),
	async execute(interaction) {
		await interaction.reply(`https://youtu.be/nasDc3enl5s?t=45`);
    interaction.followUp(`Gonna put some dirt in your eye, ${interaction.user}`)
	},
};
