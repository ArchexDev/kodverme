let Discord = require("discord.js")
let database = require("wio.db")

exports.run = async(client, message, args) => {
let pyyetkilisi = ""// py yetkilisi rol id
let pylog = ""// py log 
let pyrol = "" // py rol 
  let archexpy = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!pyrol) return message.channel.send(`**:x: Py rolü ayarlanmamış!!**`)
  if(!pylog) return message.channel.send(`**:x: Py log kanalı ayarlanmamış!!**`)
  if(!pyyetkilisi) return message.channel.send(`**:x: Yetkili rolü ayarlanmamış!**`)
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(pyyetkilisi)) return message.channel.send(`**Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.**`)
  
  if(!message.mentions.users.first()) return message.channel.send(`** :x: Lütfen Bir üye Etiketle!**`)
  
  await(archepy.roles.add(pyrol))
  message.author.send(`**:white_check_mark: Kullanıcuya Py rolünü başarryla verdin.**`)
  const embed = new Discord.MessageEmbed()
  .setTitle(`:wrench: Py Rolü Verildi!`)
  .addField(`:white_check_mark: Py Rolünü Veren Kişi:`,`Adı:${message.author.tag} \n\n ID:${message.author.id}`, true)
  .addField(`:pushpin: Py Rolü Verilen Kişi`, `${user}`, true)
 .addField(`:scroll: Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
  .setColor(`BLUE`)
  .setFooter(`Archex & Ghost Js & Html & Py Sistemi`)
  message.guild.channels.cache.get(pylog).send(embed)
}

exports.config = {
    name: "py",
    aliases: ["py"]
};