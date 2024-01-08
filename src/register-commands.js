require('dotenv').config();
const{ REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'roster-add',
        description: 'Add members to a roster',
        options: [
            {
                name: 'rmember',
                description: 'Member being add to a roster.',
                type: ApplicationCommandOptionType.user,
                required: true,
            },
            {
                name: 'rcorp',
                description: 'Corporation they will be flying in.',
                type: ApplicationCommandOptionType.Role,
                required: true,
            },
            {
                name: 'rwhitestar',
                description: 'WS1 or WS2',
                type: ApplicationCommandOptionType.Role,
                required: true,
            },
            
        ],     
    },
   
    {
        name: 'roster-remove',
        description: 'Remove a member from a roster',
        options: [
            {
                name: 'member',
                description: 'Member to be removed from a roster.',
                type: ApplicationCommandOptionType.Mentionable,
                required: true,
            },
            {
                name: 'corporation',
                description: 'Corporation they in.',
                type: ApplicationCommandOptionType.Role,
                required: true,
            },
            {
                name: 'whitestar',
                description: 'Is in WS1 or WS2',
                type: ApplicationCommandOptionType.Role,
                required: false,
            },
            
        ],     
    },
];
const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try{
        console.log('Registering Slash Commands...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        );
        console.log('Slash Commands were registered successfully!');
    } catch(error){
        console.log(`there was an error: ${error}`);
    }
})();

