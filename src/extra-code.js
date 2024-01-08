// Extra code not currently used
// message response
client.on('messageCreate',(message) => {
    if (message.author.bot){
     return;
    }
     if (message.content === 'little'){
         message.reply('Whats up?')
     }
 })

 // slash commands
 {
    name:'radd',
    description: 'Add Members to Rosters',
},

{
    name: 'rremove',
            description: 'Remove Members from Rosters',
},


{
    name: 'Second',
    description: 'The second number',
    type: ApplicationCommandOptionType.Number,
},

/// 
{
    name: 'rremove',
    description: 'Remove a member from a roster',
    options: [
        {
            name: 'member',
            description: 'Member being removed from a roster.',
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
            name: 'whiteStar',
            description: 'Is in WS1 or WS2',
            type: ApplicationCommandOptionType.Role,
            required: true,
        },
        
    ],     
},

// roles names
// Peasants
// 1175680292955111495

// CIS
// 1175680179146862602

// WS
// 823662597253496876

// WS1
// 900283110929874975

// WS2
// 900283258040893491

//  console.log(`${c.user.tag} is online`);
 
 // console.log(opt2);
       // console.log(opt3);