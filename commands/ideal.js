const { SlashCommandBuilder } = require('discord.js');

const ideals = [
    'The First Ideal: Life before death, strength before weakness, journey before destination. <https://upload.wikimedia.org/wikipedia/en/3/30/Stormlight_Logo.jpg>',
    'The Second Ideal (Windrunners): I will protect those who cannot protect themselves. https://static.wikia.nocookie.net/stormlightarchive/images/5/50/Ideal-Essence-1.png/revision/latest?cb=20130704012647',
    'The Second Ideal (Skybreakers): I will put the law before all else. https://static.wikia.nocookie.net/stormlightarchive/images/7/72/Ideal-Essence-2.png/revision/latest?cb=20130704012649',
    'The Second Ideal (Edgedancers): I will remember those who have been forgotten. https://static.wikia.nocookie.net/stormlightarchive/images/4/41/Ideal-Essence-4.png/revision/latest?cb=20130704012651',
    'The Second Ideal (Bondsmiths): I will unite instead of divide. I will bring men together. https://static.wikia.nocookie.net/stormlightarchive/images/d/d7/Ideal-Essence-10.png/revision/latest?cb=20130704012700',
    "The Third Ideal (Windrunners): I will protect even those I hate, so long as it is right. https://static.wikia.nocookie.net/stormlightarchive/images/5/50/Ideal-Essence-1.png/revision/latest?cb=20130704012647",
    "The Third Ideal (Edgedancers): I will listen to those who have been ignored. https://static.wikia.nocookie.net/stormlightarchive/images/4/41/Ideal-Essence-4.png/revision/latest?cb=20130704012651",
    "The Third Ideal (Bondsmiths): I will take responsibility for what I have done. If I must fall, I will rise each time a better man. https://static.wikia.nocookie.net/stormlightarchive/images/d/d7/Ideal-Essence-10.png/revision/latest?cb=20130704012700",
    "The Fourth Ideal (Windrunners): I accept that there will be those I cannot protect. https://static.wikia.nocookie.net/stormlightarchive/images/5/50/Ideal-Essence-1.png/revision/latest?cb=20130704012647"
]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ideal')
		.setDescription('Immortal Words to live by'),
	async execute(interaction) {
        const ideal = ideals[Math.floor(Math.random()*ideals.length)];
		await interaction.reply(ideal);
	},
};
