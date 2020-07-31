//dados do bot e a sua origem
const Discord = require('discord.js');
const { VoiceChannel } = require('discord.js');
const bot = new Discord.Client();
const author = 'Blaldas';
const projectStart = '30/06/2020';
const version = 'alpha 1.2';


const lineReader = require('line-reader');

lineReader.eachLine('constants.txt', function(line) {
    bot.login(line);
});


const PREFIX = '$';

const cheerio = require("cheerio");
const request = require("request");


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
        case 'APAGAR':
        case 'CLEAR':
            if(!args[1]) return message.reply('Define 0 número de mensagens a eliminar');
            //console.log(args[1]);
            //break;
            if(args[1] >= 100) return message.reply('Calma aí amigão!\nVamos tentar não crashar o servidor, ok?');
            message.channel.bulkDelete(parseInt(args[1], 10 ) +1);
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
        
        case 'IMAGE':
        case 'IMAGEM':
            message.channel.send(obras);
            var img = imageSearch(args);
            message.channel.send(img);
            break;

    }
})



function imageSearch(args){

    var search = args.slice(1).join(" ");


    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };


request(options, function(error, response, responseBody){
    if(error){
    // message.channel.send("Erro na pesquisa");
        //console.log("Erro na pesquisa");
        return "Erro na pesquisa";
    }

    $ = cheerio.load(responseBody);

    var links = $(".image a.Link");

    var urls = new Array(links.length).fill(0).map((v, i)=> links.eq(i).attr("href"));
    



    console.log(urls);
    if(!urls.length){
    // message.channel.send("Não foram encontrados resultados para a pesquisa '"+ search +  "'");
    //  console.log("Não foram encontrados resultados para a pesquisa '"+ search +  "'");
        //return "Não foram encontrados resultados para a pesquisa '"+ search +  "'";
    }


    return urls[0];


});


}


