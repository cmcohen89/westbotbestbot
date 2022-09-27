const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('peacemaker')
		.setDescription(`Do you really wanna taste it?`),
	async execute(interaction) {
		await interaction.reply(`https://www.youtube.com/watch?v=_mrr3UNALww&ab_channel=HBOMax`);
    interaction.followUp(`Do you really wanna do you really wanna taste it?`);
	},
};
