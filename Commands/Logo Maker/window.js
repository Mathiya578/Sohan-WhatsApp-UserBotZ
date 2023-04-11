const maker = require('mumaker')

module.exports = {
    name: "window",
    alias: ["window"],
    desc: "Make text logo.",
    react: "🥰",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}window Sohan Matheesha*`);
        maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}

