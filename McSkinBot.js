//git remote add origin git@github.com:PokeTehDoge/DogeBot9000.git
const Botid = "<@275746862877769728>"
const Discord = require('discord.js');
const client = new Discord.Client();
const Random = 'nothing to see here folks -_-';
const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;
const config = require('./config.json');
const adminfile = config.adminfile;
const SkinBot = config.token;
const pizza = `:pizza:`;
const prefix = config.prefix;
const adminprefix = config.adminprefix;
const News = config.News;
const ownerID = config.Owner;
const letter = config.letters;

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
function commandIs(str, msg){
  return message.content.startsWith("()" + str);
}
function pluck(array) {
  return array.map(function(item) {
    return item["name"];
  });
}

function hasRole(mem, role) {
  if (pluck(mem.roles.array()).includes(role)) {
    return true;
  } else {
    return false;
  }}
const NewsMessage = new Discord.RichEmbed()
  .setTitle('News!')
  .setAuthor('McSkinBot', 'https://i.imgur.com/TyNsV7P.jpg')

  .setColor(0x00AE86)
  .setDescription(News)
  .setFooter('© McSkinBot by PokeTehDoge', 'https://i.imgur.com/TyNsV7P.jpg')
  //.setImage('https://imgur.com/992818d7-f22b-4290-b39a-db5111290fcf')
  .setThumbnail('https://i.imgur.com/TyNsV7P.jpg')

  .setTimestamp()
  .setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')

  .addField('\u200b', '\u200b', true);


client.on("message", message => {
if (message.content.startsWith('§News')) {
    message.channel.sendEmbed(NewsMessage);
    const args = message.content.split(" ").slice(1);
}
});
client.on('ready', () => {
  console.log('Bot Status: Online');
  client.user.setGame('()help | ' +client.guilds.size+ ' Servers');
  client.user.setStatus('dnd');
});
client.on("message", function(message) {
if(message.content.startsWith(prefix + "say")) {
  var content = message.content.split(" ").slice(1).join(" ")
if(hasRole(message.member, "McSkinBot Permissions")|| adminfile.includes(message.author.id)) {
  message.delete();
message.channel.sendMessage(content)
console.log(message.author.username + " Told me to say " + content);
}}});

client.on("message", function(message) {
if(message.content.startsWith(prefix + "skinsearch")) {
var search = message.content.split(" ").slice(1).join(" ")
message.channel.sendMessage(`http://www.minecraftskins.com/search/skin/`+search+`/1/`)
console.log(message.author.username + " Searched the Skin: " + search)
}
});
client.on("message", function(message) {
if(message.content.startsWith(prefix + "playersearch")) {
var search = message.content.split(" ").slice(1).join(" ")
message.channel.sendMessage(`https://namemc.com/name/`+search)
console.log(message.author.username + " Searched the Skin: " + search)
}
});

//https://namemc.com/name/PokeDoge



client.on("message", message => {
if (message.content.startsWith('§News')) {
    message.delete();
}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'poll')) {
  message.delete();
   message.channel.sendMessage(`http://www.strawpoll.me/12268757`);
}
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'play')) {
    var yt = require('ytdl-core');
    var voiceChannel = message.member.voiceChannel;
    var YouTubeURL = message.content.split(" ").slice(1).join(" ")
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let video = yt(YouTubeURL, {audioonly: true});
        const dispatcher = connnection.playStream(video);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'annoying1')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Hehehe >:)')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=dQw4w9WgXcQ", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'annoying2')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Hehehe >:)')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=qZiMqiNVN0U", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
//Makes the Random Number Generator
client.on("message", message => {
  if (message.content.startsWith(prefix + 'meme')) {
    let [meme, ...numbers] = message.content.split(" ")
let min = 1
let max = 7
var maths = Math.floor(Math.random() * (max - min + 1)) + min;
var player =
message.channel.sendMessage(maths + 'SendMemeFileÂ§Number');
  }
});
client.on("message", message => {
if (message.content.startsWith(prefix + 'invite')) {
    message.channel.sendMessage('To invite me to your Server click this link https://discordapp.com/oauth2/authorize?client_id=275746862877769728&scope=bot&permissions=0 ');
}
});
client.on("message", message => {
if (message.content.startsWith('1SendMemeFileÂ§Number')) {
  message.delete();
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/268513562551517186/268536682272391169/download.jpg');
}
});
client.on("message", message => {
if (message.content.startsWith('2SendMemeFileÂ§Number')) {
    message.delete();
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/268513562551517186/268536187654897664/1hds6o.jpg');
}
});
client.on("message", message => {
if (message.content.startsWith('3SendMemeFileÂ§Number')) {
  message.delete();
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/268537624187240449/268540564935278604/th.png');
}
});
client.on("message", message => {
if (message.content.startsWith('4SendMemeFileÂ§Number')) {
  message.delete();
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/268537624187240449/268540761681690624/th.png');
}
});
client.on("message", message => {
if (message.content.startsWith('5SendMemeFileÂ§Number')) {
  message.delete();
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/268537624187240449/268541326767816705/th.png');

}
});
client.on("message", message => {
if (message.content.startsWith('7SendMemeFileÂ§Number')) {
  message.delete();
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/268537624187240449/268541680016293889/th.png');
}
});

client.on("message", message => {
  var help = new Discord.RichEmbed({fields: [
      {
          name: "Credits",
          value: `This bot was created by SpectralDoge#0737 Inspired by PgSuper#3693, `,
          inline: false
      }, {
          name: "Creators",
          value: `Creator: SpectralDoge#0737 `,
          inline: true
      }, {
          name: "Commands For Players",
          value: 'Commands are, `meme` `help` `play` `invite` `skinsearch` `playersearch` `level` `avatar` `annoying1` `annoying2` ',
          inline: true
        }, {
          name: "Commands For Moderator+",
          value: 'Commands are, `say` `mail` `mute` `warn`  ',
          inline: true
        }, {
          name: "Commands For Owners",
          value: 'Commands are, `News` `setgame` `setstatus` `eval` `poll` ',
          inline: true
        }, {
            name: "Other Info",
            value: '```Prefix: ()``` ```Created: Febuary 2nd 2017``` ```Finished: ?Unkown?```',
            inline: true
            }
         ],
         timestamp: new Date(),
  footer: {
    text: "© McSkinBot by SpectralDoge | " +client.guilds.size+ " Servers"
  }
  });
if (message.content.startsWith(prefix + 'help')) {
  message.channel.sendMessage('Help Has been Sent to your PMs :wink:')
  message.author.sendEmbed(help);
}
});
client.on("message", function(message) {
if(message.content.startsWith(prefix + "avatar")) {
  let UserAvatar = message.mentions.users.first();
message.channel.sendMessage(UserAvatar.avatarURL)
}});
client.on("message", function(message) {
if(message.content.startsWith(prefix + "mail")) {
  let content = message.content.split(" ").slice(1).join(" ")
  let User = message.mentions.users.first();
if(hasRole(message.member, "McSkinBot Permissions")|| adminfile.includes(message.author.id)) {
  message.delete();
User.sendMessage(content)
console.log(message.author.username + ' Mailed ' + User + content);
}}});
client.on("message", function(message) {
if(message.content.startsWith(prefix + "mute")) {
if(hasRole(message.member, "McSkinBot Permissions")|| adminfile.includes(message.author.id)) {
let reason = message.content.split(" ").slice(1).join(" ")
let user = message.mentions.users.first();
let modlog = client.channels.find('name', 'staff-logs');
let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'McSkinBot Muted');
let MuteTitle = '```Mute Log```';
if (!modlog) return message.reply('I cannot find a mod-log channel create one called **staff-logs**').catch(console.error);
if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
var MuteEmbed = new Discord.RichEmbed()
.setColor(0x00AE86)
.setDescription(MuteTitle)
.setTimestamp()
.addField('Action:', 'Mute')
.addField('Reason:', reason)
.addField('User:', `${message.mentions.users.first()}`)
.addField('Moderator:', `<@${message.author.id}>`);

if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

if (message.guild.member(user).roles.has(muteRole.id)) {
  message.guild.member(user).removeRole(muteRole).then(() => {
    client.channels.get(modlog.id).sendEmbed(MuteEmbed).catch(console.error);
  });
} else {
  message.guild.member(user).addRole(muteRole).then(() => {
    client.channels.get(modlog.id).sendEmbed(MuteEmbed).catch(console.error);
    user.sendMessage('You were muted/unmuted for:\n' + reason);
  });
}}}});
client.on("message", message => {
if (message.content.startsWith(prefix + "warn")) {
if(hasRole(message.member, "McSkinBot Permissions")|| adminfile.includes(message.author.id)) {
let tmp = 'McSkinBot';
let tmpw = 'Warn';
let warningtitle = '```Warning Log```';
let reason = message.content.split(" ").slice(1).join(" ")
let user = message.mentions.users.first();
let ModChannel = client.channels.find('name', 'staff-logs');
if (!ModChannel) return message.reply("I cannot find a serverlogs channel make a text Channel called 'staff-logs'.");
if (reason.length < 1) return message.reply('You Must Put a reason for the warning.');
if (message.mentions.users.size < 1) return message.reply('You must mention someone.').catch(console.error);
var WarnEmbed = new Discord.RichEmbed()
.setColor(0x00AE86)
.setDescription(warningtitle)
.setTimestamp()
.setFooter(tmp)
.addField('Action:', tmpw)
.addField('Reason:', reason)
.addField('User:', `${message.mentions.users.first()}`)
.addField('Moderator:', `<@${message.author.id}>`);
return client.channels.get(ModChannel.id).sendEmbed(WarnEmbed);
}}});
client.on("message", function(message) {
if(message.content.startsWith(prefix + "setgame")) {
  let game = message.content.split(" ").slice(1).join(" ")
if(hasRole(message.member, "McSkinBot Permissions")|| adminfile.includes(message.author.id)) {
  message.delete();
client.setGame(game);
console.log(message.author.username + ' Mailed ' + User + content);
}}});
client.on("message", function(message) {
if(message.content.startsWith(prefix + "purge")) {
if(hasRole(message.member, "McSkinBot Permissions")|| adminfile.includes(message.author.id)) {
  let args = message.content.split(" ").slice(1);
let messagecount = parseInt(args.join(' '));
message.channel.fetchMessages({
  limit: messagecount
}).then(messages => message.channel.bulkDelete(messages));
}}});
client.on("message", function(message) {
if(message.content.startsWith(prefix + "§invite")) {
if(hasRole(message.member, "McSkinBot Permissions")|| adminfile.includes(message.author.id)) {
var id = message.content.split(" ").slice(1);
message.guild.channels.get('252113837019496449').createInvite().then(invite =>
message.channel.sendMessage('http://discord.gg/' + invite.code));
}}});
client.on('message', message => {
  if(message.author.id !== "194509651725910018") return;
  if (message.content.startsWith(prefix + "eval")) {
    var args = message.content.split(" ").slice(1);
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});
client.on("message", function(message) {
let emojified = message.content.replace(/[a-zA-Z]/g, match => `:regional_indicator_${match.toLowerCase()}:`).slice(112);
if(message.content.startsWith(prefix + "emoji")) {
if(hasRole(message.member, "McSkinBot Permissions")|| adminfile.includes(message.author.id)) {
  message.channel.sendMessage(emojified);
}}});

  client.on("message", message => {
  if(message.content.startsWith(Botid)) {
  if (message.channel.type === 'text') {
    Cleverbot.prepare(() => {
      clbot.write(message.content, (response) => {
        message.channel.startTyping();
        setTimeout(() => {
          message.channel.sendMessage(response.message).catch(console.error);
          message.channel.stopTyping();
        }, Math.random() * (1 - 3) + 1 * 1000);
      });
    });
  }
}});
client.on("message", function(message) {
if(message.content.startsWith(prefix + "nick")) {
  var nickname = message.content.split(" ").slice(1).join(" ")
message.member.setNickname(nickname)
console.log(message.author.username + " Nicked Themself " + nickname);
}});
client.login(SkinBot);
