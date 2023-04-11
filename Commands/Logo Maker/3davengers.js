const maker = require('mumaker')

module.exports = {
    name: "3davengers",
    alias: ["3davengers"],
    desc: "Make text logo.",
    react: "🥰",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}3davengers Sohan Matheesha*`);
        maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}