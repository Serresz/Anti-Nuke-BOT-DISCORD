const { Client, Intents } = require('discord.js');
const config = require('./config');
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_BANS",
        "GUILD_EMOJIS",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "DIRECT_MESSAGES",
    ],
    shardCount: config.shardCount,
    shards: "auto",
})

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
process.on("uncaughtException", (err, origin) => {
    console.log('Uncaught Exception: ' + err);
}) 
process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('Uncaught Exception: ' + err);
});
process.on('multipleResolves', (type, promise, reason) => {
    console.log('Multiple Resolves: ' + type);
});

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag} Script by: Serresz`);
})

client.on("emojiCreate", async (emoji) => {
    if (emoji.guild.emojis.cache.size >= config.emojiamount) {
        emoji.guild.members.cache.get(emoji.guild.ownerID).ban({
            reason: "Create emoji limit reached"
        }).catch((err) => console.log(`I couldn't ban the owner because of: ${err}`));
    }
})

client.on("emojiDelete", async (emoji) => {
    if (emoji.guild.emojis.cache.size >= config.emojiamount) {
        emoji.guild.members.cache.get(emoji.guild.ownerID).ban({
            reason: "Delete emoji limit reached"
        }).catch((err) => console.log(`I couldn't ban the owner because of: ${err}`));
    }
})

client.on("channelCreate", async (channel) => {
    if (channel.guild.channels.cache.size >= config.channelamount) {
        channel.guild.members.cache.get(channel.guild.ownerID).ban({
            reason: "Create channel limit reached"
        }).catch((err) => console.log(`I couldn't ban the owner because of: ${err}`));
    }
})

client.on("channelDelete", async (channel) => {
    if (channel.guild.channels.cache.size >= config.channelamount) {
        channel.guild.members.cache.get(channel.guild.ownerID).ban({
            reason: "Delete channel limit reached"
        }).catch((err) => console.log(`I couldn't ban the owner because of: ${err}`));
    }
})

client.on("roleCreate", async (role) => {
    if (role.guild.roles.cache.size >= config.roleamount) {
        role.guild.members.cache.get(role.guild.ownerID).ban({
            reason: "Create role limit reached"
        }).catch((err) => console.log(`I couldn't ban the owner because of: ${err}`));
    }
})

client.on("roleDelete", async (role) => {
    if (role.guild.roles.cache.size >= config.roleamount) {
        role.guild.members.cache.get(role.guild.ownerID).ban({
            reason: "Delete role limit reached"
        }).catch((err) => console.log(`I couldn't ban the owner because of: ${err}`));
    }
})

client.on("guildMemberAdd", async(member) => {
    if (member.user.bot) {
        member.ban({
            reason: "Bot joined"
        }).catch((err) => console.log(`I couldn't ban the bot because of: ${err}`));
    }
})

client.on("messageCreate", async(message) => {
    if (message.content.includes("discord.gg")) {
        message.member.ban({
            reason: "Phishing links"
        }).catch((err) => console.log(`I couldn't ban the user because of: ${err}`));
    }
    if (message.content.includes("discord.me")) {
        message.member.ban({
            reason: "Phishing links"
        }).catch((err) => console.log(`I couldn't ban the user because of: ${err}`));
    }
    if (message.content.includes("discordapp.com")) {
        message.member.ban({
            reason: "Phishing links"
        }).catch((err) => console.log(`I couldn't ban the user because of: ${err}`));
    }
    if (message.content.includes("discord.me")) {
        message.member.ban({
            reason: "Phishing links"
        }).catch((err) => console.log(`I couldn't ban the user because of: ${err}`));
    }
    if (message.content.includes("discnrd.gift")) {
        message.member.ban({
            reason: "Phishing links"
        }).catch((err) => console.log(`I couldn't ban the user because of: ${err}`));
    }
})  

client.login(config.token);


// พี่เซอร์เรส พี่ขอเครดิดนะน้อง พี่กลัวน้องเอาไปขาย
