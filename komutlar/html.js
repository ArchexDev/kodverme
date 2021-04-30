let Discord = require("discord.js")
let database = require("wio.db")

exports.run = async(client, message, args) => {
let htmlyetkilisi = ""// html yetkilisi rol id
let htmllog = ""// html log 
let htmlrol = "" // html rol 
  let archexhtml = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!htmlrol) return message.channel.send(`**:x: Html rolü ayarlanmamış!!**`)
  if(!htmllog) return message.channel.send(`**:x: Html log kanalı ayarlanmamış!!**`)
  if(!htmlyetkilisi) return message.channel.send(`**:x: Yetkili rolü ayarlanmamış!**`)
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(htmlyetkilisi)) return message.channel.send(`**Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.**`)
  
  if(!message.mentions.users.first()) return message.channel.send(`** :x: Lütfen Bir üye Etiketle!**`)
  
  await(archexhtml.roles.add(htmlrol))
  message.author.send(`**:white_check_mark: Kullanıcuya HTML rolünü başarryla verdin.**`)
  const embed = new Discord.MessageEmbed()
  .setTitle(`:wrench: HTML Rolü Verildi!`)
  .addField(`:white_check_mark: Html Rolünü Veren Kişi:`,`Adı:${message.author.tag} \n\n ID:${message.author.id}`, true)
  .addField(`:pushpin: Html Rolü Verilen Kişi`, `${user}`, true)
 .addField(`:scroll: Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
  .setColor(`BLUE`)
  .setFooter(`Archex & Ghost Js & Html & Py Sistemi`)
  message.guild.channels.cache.get(htmllog).send(embed)
}

exports.config = {
    name: "html",
    aliases: ["htmlver"]
};