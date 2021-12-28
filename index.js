const { Client, Intents, UserFlags} = require('discord.js');
const dotenv = require('dotenv')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
dotenv.config()


client.once('ready', () => {
    console.log('I am ready for you!')
})
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    } if (command === 'dyxu'){
        message.channel.send('https://www.youtube.com/channel/UCxCHvbzR5SuLROTmVun_O3g');
    } if (command === 'stianalex'){
        message.channel.send('https://www.youtube.com/channel/UCLvT0cEUj0zIeeAGB0gbCXQ');
    } if (command === 'springachu'){
        message.channel.send('https://www.youtube.com/channel/UCzjTubi_ZTFtUrL7zFCJUcw');
    } if (command === 'altrd'){
        message.channel.send('https://www.youtube.com/channel/UCX_mUDmjvm5SYRBuk6tXTCQ');
    } if (command === 'youtube'){
        message.channel.send('https://www.youtube.com/channel/l22');
    }
});

client.login(process.env.TOKEN);