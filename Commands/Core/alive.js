import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────═[Sohan-WhatsApp-UserBotZ]═────⋆
│╭───────────────···
┴│☂︎    HEY ${conn.getName(m.sender)}
⬡│☂︎ 🤪I\'m alive now..🥰
┬╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
 ▕ █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
 ▕ █-----╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗-----█
 ▕ █-----║║║╠─║─║─║║║║║╠─-----█
 ▕ █-----╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝-----█
 ▕ █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
┴│    *Sohan-WhatsApp-UserBotZ*
⬡│☂︎ *WHATSAPP BOT DEVELOPEE BY*
⬡│☂︎      *Sohan Matheesha*
⬡│☂︎Contact WhatsApp *wa.me/94757962326*
┬ 
│╰────────────────···
┠─────═[ GUIDE ]═─────⋆
│╭────────────────···
┴│☂︎ _*Litle Guide to use bot*_
⬡│☂︎ .menu *All menu of bot*
⬡│☂︎ .play *Youtube video/audio*
┬.   .ytmp3 *youtube audio*
│╰────────────────···
╰──────────═┅═───────
*Thanks For Using Sohan-WhatsApp-UserBotZ ✍🏽🌿🥰*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler