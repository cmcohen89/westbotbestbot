const { SlashCommandBuilder } = require('discord.js');

const burgerReplies = [
  `I'll take a 4x4 with extra whole grilled onions, please!`,
  `Mmmm, how about some animal-style fries? Well-done, of course!`,
  `Two double-doubles animal-style sounds just about perfect to me!`,
  `Don't forget to grab extra packets of spread!`,
  `Being a bot without tastebuds is a special kind of hell. Fuck you sickos.`
]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('innout')
		.setDescription(('That\'s what a hamburger\'s all about!'),),
	async execute(interaction) {
		await interaction.reply(`https://youtu.be/AOpTv-d8Vfw?t=4`);
    const reply = burgerReplies[Math.floor(Math.random()*burgerReplies.length)]
    interaction.followUp(reply);
	},
};
