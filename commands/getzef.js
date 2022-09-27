const { SlashCommandBuilder } = require('discord.js');

const zefOptions = [
  'https://www.youtube.com/watch?v=8Uee_mcxvrw&ab_channel=DieAntwoord',
  'https://www.youtube.com/watch?v=uMK0prafzw0&ab_channel=DieAntwoord',
  'https://www.youtube.com/watch?v=HcXNPI-IPPM&ab_channel=DieAntwoord',
  'https://www.youtube.com/watch?v=K8nrF5aXPlQ&ab_channel=Noisey',
  'https://www.youtube.com/watch?v=XXlZfc1TrD0&ab_channel=DieAntwoord',
  'https://www.youtube.com/watch?v=mOj8VUCwN0c&ab_channel=Beanpuppet'];


const zefReplies = [
  `It's like a dream come true, I'm livin' the dream bru`,
  `Mmm, you smell dat? You know what dat smell is? Das roigh', it's monay`,
  `Gettin' bitten by the zef bug is the best drug`,
  `Jump mothafucka jump mothafucka jump!`,
  `Left home locked in my Zef Zone, ready for the test yo? What the fuck I guess so`,
  `I'm mad musical, my rhoimes are the toightest; that's why I tap beautiful desoignah vajoinaz`
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getzef')
		.setDescription('Rub yo\' dick on XP€N$IV $H1T'),
	async execute(interaction) {
		await interaction.reply(zefOptions[Math.floor(Math.random()*zefOptions.length)]);
    interaction.followUp(zefReplies[Math.floor(Math.random()*zefReplies.length)])
	},
};
