const maker = require('mumaker')

module.exports = {
    name: "3dbox",
    alias: ["3dbox"],
    desc: "Make text logo.",
    react: "🥰",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}3dbox Sohan Matheesha*`);
        maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}