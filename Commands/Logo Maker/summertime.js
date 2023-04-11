const maker = require('mumaker')

module.exports = {
    name: "summertime",
    alias: ["summertime"],
    desc: "Make text logo.",
    react: "🥰",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}summertime Sohan Matheesha*`);
        maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}