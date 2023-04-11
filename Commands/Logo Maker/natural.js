const maker = require('mumaker')

module.exports = {
    name: "natural",
    alias: ["natural"],
    desc: "Make text logo.",
    react: "🥰",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}natural Sohan Matheesha*`);
        maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}