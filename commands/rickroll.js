const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rickroll')
		.setDescription('Never gives you up!'),
	async execute(interaction) {
		await interaction.reply(`https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley`);
    const rickReplies = [
      `We're no strangers to love, ${interaction.user}!`,
      `${interaction.user} knows the rules, and so do I!`,
      `You wouldn't get this from any other bot, ${interaction.user}!`,
      `Never gon' GIVE, never gon' GIVE!`,
      `I just wanna tell you how I'm feeling, ${interaction.user}`,
    ]
    const reply = rickReplies[Math.floor(Math.random()*rickReplies.length)]
    interaction.followUp(reply);
	},
};
