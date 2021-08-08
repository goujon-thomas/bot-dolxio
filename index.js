const Discord = require("discord.js");
const token = require("./token.json");
const fs = require("fs");
const bdd = require("./bdd.json");
const fetch = require('node-fetch');
const queue = new Map();
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const PREFIX = "!";


bot.on("ready", async () => {
    
    console.log("Le bot est allumé")
    bot.user.setStatus("online");
    bot.user.setActivity("L'amour de Dolce et Foxio", {type: "WATCHING"})
    })



function doKissAction() {
    var rand = [
        'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
        'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
        'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
        'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
        'https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif',
        'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
        'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
        'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
        'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif',
        'https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif',
        'https://media.giphy.com/media/Ka2NAhphLdqXC/giphy.gif',
        'https://media.giphy.com/media/Gj8bn4pgTocog/giphy.gif',
        'https://media.giphy.com/media/w9xag7QUzLgLC/giphy.gif',
        'https://media.giphy.com/media/H8XZI3PJm258c/giphy.gif',
        'https://media.giphy.com/media/U9lRsXbwlbL4k/source.gif'
    ]
    return rand[Math.floor(Math.random() * rand.length)];
};

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
                   case 'kiss':
                const personTagged = message.mentions.members.first();
 
                if(!args[1]) {
                    message.channel.send('Tu as oublié de ping une personne !')
                }else{
                    message.channel.send('`' + message.author.username + '`' + ' a embrassé ' + personTagged.displayName + ' ' + doKissAction())
                }
 
            break;
 
   }
})


function doHugAction() {
    var rand = [
        'https://media.giphy.com/media/KG5oq4vesf9r8JbBEN/giphy.gif',
        'https://media.giphy.com/media/vee4QaHkT30ic/giphy.gif',
        'https://media.giphy.com/media/wNGBCVlhthrvG/giphy.gif',
        'https://media.giphy.com/media/kvKFM3UWg2P04/giphy.gif',
        'https://media.giphy.com/media/VGACXbkf0AeGs/giphy.gif',
        'https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif',
        'https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif',
        'https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif',
        'https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif',
        'https://media.giphy.com/media/Y8wCpaKI9PUBO/giphy.gif',
        'https://media.giphy.com/media/WynnqxhdFEPYY/giphy.gif',
        'https://media.giphy.com/media/2A75Y6NodD38I/giphy.gif',
        'https://media.giphy.com/media/is1t1s9xh0fra/giphy.gif',
        'https://media.giphy.com/media/x3Ir8HjW8fJSM/giphy.gif',
        'https://media.giphy.com/media/x2vukl8df0oQU/giphy.gif'
    ]
    return rand[Math.floor(Math.random() * rand.length)];
};


bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
                   case 'hug':
                const personTagged = message.mentions.members.first();
 
                if(!args[1]) {
                    message.channel.send('Tu as oublié de ping une personne !')
                }else{
                    message.channel.send('`' + message.author.username + '`' + ' fait un calin à ' + personTagged.displayName + ' ' + doHugAction())
                }
 
            break;
 
   }
})

function doFckAction() {
    var rand = [
        'https://i.imgur.com/LyykKO9.gifv',
        'https://i.imgur.com/mN9BtRn.gifv',
        'https://i.imgur.com/BPXy4Y7.gifv',
        'https://i.imgur.com/yjyckDZ.gifv',
        'https://i.imgur.com/xPRaJSl.gifv',
        'https://wetgif.com/wp-content/uploads/2021/02/morning-sex-75.gif',
        'https://wetgif.com/wp-content/uploads/2021/02/morning-sex-66.gif',
        'https://wetgif.com/wp-content/uploads/2021/02/morning-sex-9.gif',
        'https://wetgif.com/wp-content/uploads/2021/02/morning-sex-73.gif',
        'https://wetgif.com/wp-content/uploads/2021/02/morning-sex-6.gif',
        'https://wetgif.com/wp-content/uploads/2021/02/morning-sex-70.gif'
    ]
    return rand[Math.floor(Math.random() * rand.length)];
};


bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
                   case 'fuck':
                const personTagged = message.mentions.members.first();
 
                if(!args[1]) {
                    message.channel.send('Tu as oublié de ping une personne !')
                }else{
                    message.channel.send('`' + message.author.username + '`' + ' fuck ' + personTagged.displayName + ' ' + doFckAction())
                }
 
            break;
 
   }
})
function doSckAction() {
    var rand = [
        'https://wetgif.com/wp-content/uploads/nice-blowjob-8.gif',
        'https://wetgif.com/wp-content/uploads/custom-blowjob-8.gif',
        'https://wetgif.com/wp-content/uploads/blowjob-91.gif',
        'https://wetgif.com/wp-content/uploads/nice-blowjob-4.gif',
        'https://wetgif.com/wp-content/uploads/blowjob-94.gif',
        'https://wetgif.com/wp-content/uploads/blowjob-1.gif',
        'https://wetgif.com/wp-content/uploads/blowjob-8.gif',
        'https://wetgif.com/wp-content/uploads/blowjob-9.gif',
        'https://wetgif.com/wp-content/uploads/blowjob-25.gif',
        'https://wetgif.com/wp-content/uploads/blowjob-16.gif',
        'https://wetgif.com/wp-content/uploads/blowjob-22.gif'
    ]
    return rand[Math.floor(Math.random() * rand.length)];
};


bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
                   case 'suck':
                const personTagged = message.mentions.members.first();
 
                if(!args[1]) {
                    message.channel.send('Tu as oublié de ping une personne !')
                }else{
                    message.channel.send('`' + message.author.username + '`' + ' suce ' + personTagged.displayName + ' ' + doSckAction())
                }
 
            break;
 
   }
})

function doLckAction() {
    var rand = [
        'https://wetgif.com/wp-content/uploads/gifs-cunnilingus-107.gif',
        'https://wetgif.com/wp-content/uploads/gifs-cunnilingus-103.gif',
        'https://wetgif.com/wp-content/uploads/gifs-cunnilingus-102.gif',
        'https://wetgif.com/wp-content/uploads/gifs-cunnilingus-101.gif',
        'https://wetgif.com/wp-content/uploads/gifs-cunnilingus-93.gif',
        'https://wetgif.com/wp-content/uploads/gifs-cunnilingus-92.gif',
        'https://wetgif.com/wp-content/uploads/gifs-cunnilingus-79.gif',
        'https://wetgif.com/wp-content/uploads/gifs-cunnilingus-66.gif',
        'https://wetgif.com/wp-content/uploads/gifs-cunnilingus-61.gif',
        'https://wetgif.com/wp-content/uploads/gifs-cunnilingus-57.gif',
        'https://wetgif.com/wp-content/uploads/gifs-cunnilingus-56.gif'
    ]
    return rand[Math.floor(Math.random() * rand.length)];
};


bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
                   case 'lick':
                const personTagged = message.mentions.members.first();
 
                if(!args[1]) {
                    message.channel.send('Tu as oublié de ping une personne !')
                }else{
                    message.channel.send('`' + message.author.username + '`' + ' lèche ' + personTagged.displayName + ' ' + doLckAction())
                }
 
            break;
 
   }
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
                   case 'dolce':
                    message.channel.send('Dolce est la plus belle femme de la Terre et la personne la plus parfaite au monde. Elle est aussi la meilleure copine qui puisse exister. Je t aime mon coeur :heart:')
            break;
 
   }
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
                   case 'lpb':
                    message.channel.send('C est Laurena !')
            break;
 
   }
})

function Laurenalpb() {
    var rand = [
        'Coucou tu me manques chaque instant où on est pas ensemble',
        'T es la plus belle personne qui existe au monde. Je t aime plus que tout',
        'Quoi qu il arrive je t aimerai pour toujours et je t oublierai jamais',
        'Tu mérites tout le bonheur du monde et d etre heureuse peu importe ce qui se passe',
        'Y a pas un moment sans que je pense à toi. Je t aime fort',
        'J espere que les reves qu on a fait tout les 2 deviendront réels',
        'La seule chose que je veux c est etre avec toi pour toujours, dans les bons et les mauvais moments',
    ]
    return rand[Math.floor(Math.random() * rand.length)];
};

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
                   case 'txt':
                    message.channel.send(Laurenalpb())
            break;
 
   }
})

module.exports = {
    name: "love",
    aliases: ["affinity"],
    category: "fun",
    description: "Calculates the love affinity you have for another person.",
    usage: "[mention | id | username]",
    run: async (client, message, args) => {
        // Get a member from mention, id, or username
        let person = getMember(message, args[0]);

        // If no person is found
        // It's going to default to the author
        // And we don't want to love ourself in this command
        // So we filter out our ID from the server members
        // And get a random person from that collection
        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }

        // love is the percentage
        // loveIndex is a number from 0 to 10, based on that love variable
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new RichEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** loves **${message.member.displayName}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);
    }
}
bot.login(token.token);