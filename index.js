//dados do bot e a sua origem
const Discord = require('Discord.js');
const { VoiceChannel } = require('discord.js');
const bot = new Discord.Client();
const author = 'Blaldas';
const projectStart = '30/06/2020';
const version = 'alpha 1.0';

const token = 'NzI3NTAzNTk5OTI3Njg5Mjg4.Xvs04g.tYtcydgTkGDokRpWKpJOweHvxxk';
const PREFIX = '$';


//dados de usagem
const owner = 'owner  \ncreator  \ngod  \ndeus';
const info= 'info \ninfo version  \ninfo author  \ninfo poject';
const others = 'ping'
const obras = 'a trabalhar nisto...'


bot.on('ready', () =>{
    console.log('bot online');
})

bot.on('message', message=>{
    //if (message.substring(0, 1) != PREFIX)
    {
   //     return;
    }

    if (!message.content.startsWith(PREFIX)) {
        return;
    }

    let args = message.content.toUpperCase();
    args = args.substring(PREFIX.length).split(" ");

    
    switch(args[0]){
        case 'HELP':
            const embed = new Discord.MessageEmbed()
            .setAuthor('author: '+ author)
            .setColor('#0099ff')
            .setTitle('Help')
            .addField('Owner:', owner)
            .addField('Info:', info)
            .addField('Outros:', others);

            message.channel.send(embed);
            break;
      
        case 'PING':
            message.channel.send('pong');
            break;
       
            case 'OWNER':
        case 'CREATOR':
        case 'GOD':
        case 'DEUS':
            message.channel.send('Blaldas');
            break;
        
        case 'INFO':
            if(args[1] === 'VERSION'){
                message.channel.send(version);
                 break;       
            }
            else if(args[1] === 'AUTHOR'){
                message.channel.send(author);
                 break;       
            }
            else if(args[1] === 'PROJECT'){
                message.channel.send(projectStart);
                 break;       
            }
            else{
                message.channel.send('Vaersão: ' + version +'\nAutor: '
                +author + '\nData De Inicio: ' +projectStart);
                break
            }
    
        case 'CLEAR':
            if(!args[1]) return message.reply('Define que mensagens eliminar');
            if(args[1] >= 100) return message.reply('Calma aí amigão!\nVamos tentar não crashar o servidor, ok?');
            message.channel.bulkDelete(args[1]+1);
            break;
        
        //MUSICA
     
        case 'PLAY':
            //if(!args[1]) return message.reply('falta link da musica')
            //var message = args[1];
            message.channel.send(obras);
            break;
         /*   const musicaInfo = await ytdl.getInfo(args[1]);
            const musica = {
                title : musicaInfo.title,
                url : musicaInfo.url,
            };

            try{
                var conecao = await VoiceChannel,join();
            }
            */


           // break;
        case 'SKIP':
        case 'STOP':
            message.channel.send(obras);
            break;  

    }
})
bot.login(token);
