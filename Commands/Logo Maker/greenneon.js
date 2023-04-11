const maker = require('mumaker')

module.exports = {
    name: "greenneon",
    alias: ["greenneon"],
    desc: "Make text logo.",
    react: "🥰",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}greenneon Sohan Matheesha*`);
        maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}