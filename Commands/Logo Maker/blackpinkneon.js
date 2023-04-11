const maker = require('mumaker')

module.exports = {
    name: "blackpinkneon",
    alias: ["blackpinkneon"],
    desc: "Make text logo.",
    react: "🥰",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}blackpinkneon Sohan Matheesha*`);
        maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}