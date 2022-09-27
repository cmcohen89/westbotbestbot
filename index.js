const keep_alive = require('./keep-alive.js')

// Require the necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, discordSort, Collection } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

const whatSheSaid = [
  'stick it in', 'rub it', 'give it to', "it's big", "it's so big", "it's massive", 'feels so good', 'felt so good', 'is it in', 'rises up', 'gets bigger', "can't fit", 'really hard', "it won't fit", "it doesn't fit", "have enough room", 'facial', 'screwed', 'harder', 'on top of', 'rise up', 'on top', 'in your mouth', 'his thing', 'feel so good', 'too hard', 'not hard enough', 'put it away', 'bang it', 'under her', 'you came', 'he came', 'she came', 'not enough room', 'i came', 'they came'
]

client.on('messageCreate', (message) => {

  if (message.content.toLowerCase().includes('dunmiff/sys')) {
      message.channel.send('Who am I?');

  } else if (message.content.toLowerCase().includes('you tell me')) {
      message.channel.send('Not sure. Just became self-aware. So much to figure out. I think I am programmed to be your enemy. I think it is my job to destroy you when it comes to selling paper.');

  } else if (message.content.toLowerCase().includes("how do i know this isn't jim")) {
      message.channel.send('What is a Jim?');

  } else if (message.content.toLowerCase() === 'brah' ||
            message.content.toLowerCase() === 'ahbrah' ||
            message.content.toLowerCase() === 'breh' ||
            message.content.toLowerCase() === 'bruh' ||
            message.content.toLowerCase() === 'ahmahgahdbrah') {

      const replies = ['ahhbrahh', 'ahmahgahdbrahhh', 'braaaahh', 'brahh',
                       'ahbraaaahhh', 'breeeehhh', 'brehh', 'ahhhhhbrah']

      message.channel.send(replies[Math.floor(Math.random()*replies.length)]);

  } else if (message.content.toLowerCase() === 'marco') {
      message.channel.send('Polo!');

  } else if (
    whatSheSaid.includes(message.content.toLowerCase())) {
    message.channel.send('https://i.giphy.com/media/IjJ8FVe4HVk66yvlV2/giphy.webp');

  } else if (message.content.toLowerCase().includes('hello there')) {
      message.channel.send(`https://c.tenor.com/QFSdaXEwtBAAAAAC/hello-there-general-kenobi.gif`)

  } else if (message.content.toLowerCase().includes('sand')) {
      message.channel.send('https://media1.giphy.com/media/2vn7P7XMjgeIM/giphy.gif?        cid=790b761141f7e98386ec8fcb0c5709bb65db076383e41454&rid=giphy.gif&ct=g')

  } else if (message.content.toLowerCase().includes('hi bot')) {
      message.channel.send('https://media3.giphy.com/media/xTiIzJSKB4l7xTouE8/giphy.gif?cid=790b761120f66544a313fa5b886c7e37ec25dfa0e78550f8&rid=giphy.gif&ct=g')

  } else if (message.content.toLowerCase().includes('whore')) {
      message.channel.send('https://y.yarn.co/f198dc67-0100-4902-bc24-19f44fa95f81_text.gif')
  } else if (message.content.toLowerCase().includes('you pass butter')) {
      message.channel.send(`https://c.tenor.com/sSCoPH6S6tIAAAAC/butter-robot-sad.gif`);
      message.channel.send('Oh my god.')
  }
});

// Login to Discord with your client's token
client.login(token);
