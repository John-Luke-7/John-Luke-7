// Join discord.gg/CyberSec for support! //
// Discord - ash3r#1000 //
const
 Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - rich presence started!`
  )
  const r = new Discord.RichPresence()
    .setApplicationId('1154459332914720878')
    .setType('PLAYING')
    .setURL('https://twitch.tv/discord')
    .setState('Co-Owner')

    .setName('Elite Mallu RolePlay')
    .setDetails('Playing As John_Luke')
    .setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })

    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1095565598102147083/1154647104673816697/Elite_Mallu_Roleplay-2.gif')
    .setAssetsSmallImage('https://media.discordapp.net/external/eK_s96YiVIfvG14xk6TFz4ZQWuVTRi0M_I7oPZhpoto/https/emoji.discadia.com/emojis/798267a5-3e6c-4168-a56c-9fc4be65aad3.gif')
    
    .setAssetsLargeText('Luke')
    .addButton('Connect To Server', 'https://discord.gg/sDpPSm4yFG');
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})

client.login(process.env.TOKEN)

// Join discord.gg/CyberSec for support! //