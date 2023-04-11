const maker = require('mumaker')

module.exports = {
    name: "harrypot",
    alias: ["harrypot"],
    desc: "Make text logo.",
    react: "🥰",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}3dchristmas Sohan Matheesha*`);
        maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}