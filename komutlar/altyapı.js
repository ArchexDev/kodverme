let Discord = require("discord.js")
let database = require("wio.db")

exports.run = async(client, message, args) => {
let jsyetkilisi = ""// altyapı yetkilisi rol id
let jslog = ""// altyapı log 
let jsrol = "" // altyapı rol 
  let archexjs = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!jsrol) return message.channel.send(`**:x: Altyapı rolü ayarlanmamış!!**`)
  if(!jslog) return message.channel.send(`**:x: Altyapı log kanalı ayarlanmamış!!**`)
  if(!jsyetkilisi) return message.channel.send(`**:x: Yetkili rolü ayarlanmamış!**`)
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(jsyetkilisi)) return message.channel.send(`**Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.**`)
  
  if(!message.mentions.users.first()) return message.channel.send(`** :x: Lütfen Bir üye Etiketle!**`)
  
  await(archexjs.roles.add(jsrol))
  message.author.send(`**:white_check_mark: Kullanıcuya Altyapı rolünü başarryla verdin.**`)
  const embed = new Discord.MessageEmbed()
  .setTitle(`:wrench: Altyapı Rolü Verildi!`)
  .addField(`:white_check_mark: Altyapı Rolünü Veren Kişi:`,`Adı:${message.author.tag} \n\n ID:${message.author.id}`, true)
  .addField(`:pushpin: Altyapı Rolü Verilen Kişi`, `${user}`, true)
 .addField(`:scroll: Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
  .setColor(`BLUE`)
  .setFooter(`Archex & Ghost Js & Abone Sistemi`)
  message.guild.channels.cache.get(jslog).send(embed)
}

exports.config = {
    name: "altyapı",
    aliases: ["altyapı","alt"]
};