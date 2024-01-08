// This is old code not currently used until we get it to actual change roles
require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.displayName} is online`);
})

client.on('interactionCreate',(interaction)=> {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'roster-add'){
        interaction.reply('Corporation and channel have been added')
    };

    if (interaction.commandName === 'roster-remove'){
        interaction.reply('Corporation and channel have been removed?')
    };
});

client.on('messageCreate',(message) => {
    if (message.author.bot){
     return;
    }
     if (message.content == 'fuck'){
         message.reply('Ill ban you!!')
     }
 })

client.login(process.env.TOKEN);