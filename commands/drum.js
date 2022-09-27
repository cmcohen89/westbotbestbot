const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('drum')
		.setDescription('Enough, now, brother Mark'),
	async execute(interaction) {
		 await interaction.reply(`https://youtu.be/Q2T7oLbmvx4?t=4`);
    interaction.followUp(`EVERYTHING'S A DRUM! EVERYTHING'S A DRUM!`);
	},
};
