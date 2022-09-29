const { SlashCommandBuilder } = require('discord.js');

const bobbyReplies = [
  'https://c.tenor.com/fcHI93N1bZYAAAAd/robert-baratheon-free.gif',
  'https://c.tenor.com/pZk4QOvwjOIAAAAd/robert-baratheon-game-of-thrones.gif',
  'https://i.imgur.com/LCOWSD9.gif',
  'https://i.imgur.com/pnxmFzw.mp4',
  'https://64.media.tumblr.com/tumblr_m0l050UJrR1r6vtbno1_500.gif',
  'https://c.tenor.com/5vORrue1u6cAAAAd/start-the-joust-start-the-damn-joust.gif',
  'https://i.gifer.com/CzLf.gif',
  'https://thumbs.gfycat.com/SpicyUncommonGalapagospenguin-size_restricted.gif'
]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bobbyb')
		.setDescription(('GODS I WAS STRONG THEN'),),
	async execute(interaction) {
		await interaction.reply(bobbyReplies[Math.floor(Math.random()*bobbyReplies.length)]);
	},
};
