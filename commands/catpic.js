const { request } = require('undici');
const { SlashCommandBuilder } = require('discord.js');

async function getJSONResponse(body) {
	let fullBody = '';

	for await (const data of body) {
		fullBody += data.toString();
	}

	return JSON.parse(fullBody);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('catpic')
		.setDescription('Random kitteh pic!'),
	async execute(interaction) {
        const catResult = await request('https://aws.random.cat/meow');
        const { file } = await getJSONResponse(catResult.body);
		 await interaction.reply({ files: [file] });
	},
};
