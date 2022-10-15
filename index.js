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
  'stick it in', 'rub it', 'give it to', "it's big", "so big", "it's massive", 'feels so good', 'felt so good',
  'is it in', 'rises up', 'gets bigger', "can't fit", 'really hard', "it won't fit", "it doesn't fit", "have enough room",
  'facial', 'screwed', 'harder', 'on top of', 'rise up', 'on top', 'in your mouth', 'his thing', 'feel so good', 'too hard',
  'not hard enough', 'put it away', 'bang it', 'under her', 'you came', 'he came', 'she came', 'not enough room', 'i came', 'they came',
  'cram it in', 'so hard', 'so soft', 'so small', 'so tiny', 'so massive', 'so huge', 'my mouth', 'your mouth', 'his mouth', 'her mouth',
  'are you coming', 'did you come', 'did he come', 'did she come', 'came together', 'you suck', 'he sucks', 'she sucks', 'they suck',
  'too soft', 'too hard', 'put it in', 'i want it', 'so fast', 'so slow', 'too fast', 'too slow'
];

const whatSheSaidResponse = [
    'https://i.giphy.com/media/IjJ8FVe4HVk66yvlV2/giphy.webp',
    'https://media2.giphy.com/media/ruZVTCF9l16xn9xfs3/giphy.gif?cid=790b7611eccf6ad1368a0d97d0301fed93e26fda355eb5f9&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/esR1eKgmOnxWKR627f/giphy.gif?cid=790b761177d61d7ff693a0e6b022d7a8379dea66ef60363b&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/elPiadNl05XWg/giphy.gif?cid=790b7611032cf277e430514791e147113b4c96b629c307ad&rid=giphy.gif&ct=g',
    'https://c.tenor.com/AXV8YU3oITAAAAAM/thats-what-she-said.gif'
];

const goodResponses = [
    'good human ^.^', 'https://media0.giphy.com/media/26vUxJ9rqfwuIEkTu/giphy.gif?cid=790b76114799d586235e95ddd1a40544609526f8064ea069&rid=giphy.gif&ct=g',
    'https://thumbs.gfycat.com/FirmSociableFinnishspitz-max-1mb.gif', 'https://media1.giphy.com/media/j2Z8ktYcHlTplAuIQf/giphy.gif?cid=790b761132e7e30337542978cb7f0dedbb07c465b488d66e&rid=giphy.gif&ct=g',
    'https://media.giphy.com/media/10I4df63lDcj28/giphy.gif'
];

const badResponses = [
    'https://youtu.be/dsUXAEzaC3Q?t=69', 'https://thumbs.gfycat.com/LiquidMedicalAlpinegoat-size_restricted.gif', 'https://i.pinimg.com/originals/06/ae/98/06ae982f9b810a79824dda7de5ac9079.gif',
    'https://media2.giphy.com/media/apowQdwqKcKPK/giphy.gif?cid=790b76114e0957a603e413ae0fa91f773add8509b43bc14d&rid=giphy.gif&ct=g', 'https://thumbs.gfycat.com/ActiveSeparateKissingbug-max-1mb.gif'
];

const weedResponses = [
    'https://c.tenor.com/GGsZ7_cG2bAAAAAC/smoke-cigarettes.gif',
    'https://media4.giphy.com/media/NMEM8c3x5eC3K/giphy.gif?cid=790b7611db6c6f275e578aaf738f655caf915a1d952c086a&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/xTiTnkCSkEeBijjq00/giphy.gif?cid=790b7611dc57e45d837d4dfbcb7a7a0b82d34f1d3506304a&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/SEEZV9PrWRfVu/giphy.gif?cid=790b761147a59bc9fc97a9512727c08722716dcfec36db63&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/TJufnSz934AnK/giphy.gif?cid=790b7611aef8e83be83fc81d1063e7f8d274881b206275bf&rid=giphy.gif&ct=g',
    'https://i.gifer.com/2U0A.gif',
    'https://media4.giphy.com/media/NA7cdqisWTZ0A/giphy.gif?cid=790b7611f884227a15aaf70888999e88369c51ccd9bf1a69&rid=giphy.gif&ct=g',
    'https://media0.giphy.com/media/WmGdUOk8A9tra/giphy.gif?cid=790b76114f02742ed53af7f8fbff826ff9c20a19c00cf5c2&rid=giphy.gif&ct=g',
    'https://uploads.dailydot.com/1ce/74/e393853c3d858b20.gif?auto=compress&fm=gif',
    'https://y.yarn.co/f0041a7f-e26e-44be-b8ae-e3d5300060ff_text.gif',
    'https://thumbs.gfycat.com/AdmiredMediumBug-size_restricted.gif',
    'https://i.gifer.com/MMPA.gif'
];

client.on('messageCreate', (message) => {
  if (message.author.bot === true) return;

  message.content = message.content.replace(/['’.,\/#!$?%\^&\*;:{}=\-_`~()]/g,"")

  if (message.content.toLowerCase() === 'you tell me') {
    message.channel.send(`Not sure. Just became self-aware. So much to figure out. I think I am programmed to be your enemy. I think it is my job to destroy you when it comes to selling paper.`);
    return;

  } else if (message.content.toLowerCase() === ("how do i know this isnt jim")) {
    message.channel.send('What is a Jim?');
    return;

  } else if (message.content.toLowerCase() === 'hello there') {
    message.channel.send(`https://c.tenor.com/QFSdaXEwtBAAAAAC/hello-there-general-kenobi.gif`)
    return;

  } else if (message.content.toLowerCase() === 'hi bot' || message.content.toLowerCase() === 'hey bot' || message.content.toLowerCase() === 'hello bot') {
    message.channel.send('https://media3.giphy.com/media/xTiIzJSKB4l7xTouE8/giphy.gif?cid=790b761120f66544a313fa5b886c7e37ec25dfa0e78550f8&rid=giphy.gif&ct=g')
    return;

  } else if (message.content.toLowerCase() === 'you pass butter') {
    message.channel.send(`https://c.tenor.com/sSCoPH6S6tIAAAAC/butter-robot-sad.gif`);
    message.channel.send('Oh my god.')
    return;

  } else if (message.content.toLowerCase() === 'good bot') {
    message.channel.send(goodResponses[Math.floor(Math.random()*goodResponses.length)]);
    return;

  } else if (message.content.toLowerCase() === 'bad bot') {
    message.channel.send(badResponses[Math.floor(Math.random()*badResponses.length)]);
    return;

  } else if (message.content.toLowerCase() === 'what up') {
    message.channel.send('https://c.tenor.com/VHxRsj9wf8AAAAAC/its-always-sunny-in-philadelphia-whats-up.gif');
    return;

  } else if (message.content.toLowerCase() === 'mad bot') {
    message.channel.send('https://64.media.tumblr.com/40fe682906cb0e855f752b5034eeae8c/tumblr_oza07tz18e1wzblmoo5_540.gif');
    return;

  } else if (message.content.toLowerCase().includes('bot') && (message.content.toLowerCase().includes('stop') || message.content.toLowerCase().includes('shut'))) {
    message.channel.send('https://c.tenor.com/WtfJo0beYhgAAAAC/no-i-dont-think-i-will.gif');
    return;

  } else if (message.content.toLowerCase().includes('you have my')) {
    message.channel.send('https://c.tenor.com/SDaajxsPaEUAAAAC/axe-lotr.gif');
    return;

  } else if (message.content.toLowerCase().includes('youre late')) {
    message.channel.send('https://giphy.com/gifs/school-been-AnTdtqwJSzW5W');
    return;

  } else if (message.content.toLowerCase().includes('you must do')) {
    message.channel.send('https://64.media.tumblr.com/a577a0087f09d9a9b9f37b5cb9c54af9/deda62a20420231a-98/s500x750/c59bee533a34a923b1b90edc142ecba97c91b9ea.gifv');
    return;

  } else if (whatSheSaid.some(v => message.content.toLowerCase().includes(v))) {
    message.channel.send(whatSheSaidResponse[Math.floor(Math.random()*whatSheSaidResponse.length)]);
    return;
  }

  const words = message.content.split(' ');
  for (let word of words) {
    word = word.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g,"")

      if (word.toLowerCase() === 'dunmiffsys') {
          message.channel.send('Who am I?');
          return;

      } else if (word.toLowerCase() === 'brah' ||
                word.toLowerCase() === 'ahbrah' ||
                word.toLowerCase() === 'breh' ||
                word.toLowerCase() === 'bruh' ||
                word.toLowerCase() === 'ahmahgahdbrah') {

          const replies = ['ahhbrahh', 'ahmahgahdbrahhh', 'braaaahh', 'brahh',
                           'ahbraaaahhh', 'breeeehhh', 'brehh', 'ahhhhhbrah',
                           'brah', 'ahbrah', 'breh', 'bruh', 'ahmahgahdbrah'];

          message.channel.send(replies[Math.floor(Math.random()*replies.length)]);
          return;

      } else if (word.toLowerCase() === 'marco') {
          message.channel.send('Polo!');
          return;

      } else if (word.toLowerCase() === 'sand') {
          message.channel.send('https://media1.giphy.com/media/2vn7P7XMjgeIM/giphy.gif?cid=790b761141f7e98386ec8fcb0c5709bb65db076383e41454&rid=giphy.gif&ct=g')
          return;

      } else if (word.toLowerCase() === 'whore') {
          message.channel.send('https://y.yarn.co/f198dc67-0100-4902-bc24-19f44fa95f81_text.gif')
          return;

      } else if (word.toLowerCase() === 'secret') {
        message.channel.send('https://thumbs.gfycat.com/HonestSmartBuffalo-max-1mb.gif');
        return;

      } else if (word.toLowerCase() === 'breakfast') {
        message.channel.send('https://i.giphy.com/media/OiNW0PypI1RaE/giphy.webp');
        return;

      } else if (word.toLowerCase() === ('grond')) {
        message.channel.send('https://c.tenor.com/L2zKHU4zWSsAAAAC/grond-lotr.gif');
        return;

      } else if (word.toLowerCase() === ('potato') || word.toLowerCase() === ('potatoes')) {
        message.channel.send('https://images.squarespace-cdn.com/content/v1/559dc96be4b099333339097f/1439908205356-MTXC7BTMI4QSHPC3VCL3/image-asset.gif');
        return;

      } else if (
        word.toLowerCase() === 'weed' ||
        word.toLowerCase() === 'pot' ||
        word.toLowerCase() === 'dank' ||
        word.toLowerCase() === 'smoke' ||
        word.toLowerCase() === 'herb' ||
        word.toLowerCase() === 'puff' ||
        word.toLowerCase() === 'smeeze' ||
        word.toLowerCase() === 'smeezle' ||
        word.toLowerCase() === 'toke' ||
        word.toLowerCase() === 'get high' ||
        word.toLowerCase() === 'got high' ||
        word.toLowerCase() === '420' ||
        word.toLowerCase() === 'ganja'
        ) {
        message.channel.send(weedResponses[Math.floor(Math.random()*weedResponses.length)]);
        return;
      }
  }

});

// Login to Discord with your client's token
client.login(token);
