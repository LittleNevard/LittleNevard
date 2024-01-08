require('dotenv').config();
const { Client, IntentsBitField,  } = require('discord.js');

const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});

const roles = [
    {
        id: '1175680292955111495',
        label: 'Peasants',
    },
    {
        id: '1175680179146862602',
        label: 'CIS',
    },
    {
        id: '823662597253496876',
        label: 'ws',
    },
    {
        id: '900283110929874975',
        label: 'ws1',
    },
    {
        id: '900283258040893491',
        label: 'ws2',
    },
]

client.on('ready', (c) => {
    console.log(`${c.user.displayName} is online`);
})

client.on('interactionCreate',(interaction)=> {
    if (!interaction.isChatInputCommand()) return;
 
    if (interaction.commandName === 'roster-add'){
        const opt1 = interaction.options.getUser('rmember');
        const opt2 = interaction.options.get('rcorp');
        const opt3 = interaction.options.get('rwhitestar');

         console.log(opt1);
         console.log(opt2.role.id);

         console.log(opt3.role.name);
         interaction.reply('Corporation and channel have been added');
    };

    if (interaction.commandName === 'roster-remove'){
                
        const opt1 = interaction.options.get('rmember');
        const opt2 = interaction.options.get('rcorporation');
        const opt3 = interaction.options.get('rwhitestar');
          
        interaction.reply('Corporation and channel have been removed?');
        
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