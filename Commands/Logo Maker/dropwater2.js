const maker = require('mumaker')

module.exports = {
    name: "dropwater2",
    alias: ["dropwater2"],
    desc: "Make text logo.",
    react: "🥰",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}dropwater2 Sohan Matheesha*`);
        maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}