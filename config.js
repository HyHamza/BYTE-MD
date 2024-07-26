
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "0713885350@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "africa/harare";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "+263713885350";
global.owner = process.env.OWNER_NUMBER || "+263713885350";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "on";
global.wlcm = process.env.WELCOME || "on";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "on";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV01Tb282V3NPWWJUZUNLdjBsYzBBeS95SFRPVUpCZGpQaWdwbEJiejVFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXdtVmRSQ1VwNGl2RFV2VVNqb0JPTHVKb1h3eDdoMnF0dEFqQ2dQMEFuVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSGp5SW4wSmhoY3UvUmVnVmZPNFZNUkFDdHAvOUgycDFtQ3FzVFFhY0hnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkR004azRnelJRWEFYR0FPVVJWOVN1UkY1bHd2Q21TL3FCYWdsTFRWUHpVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktDK3JVYWRKTy9VR3FZbS9PRS9JcTFMengwQTQ2ZkpzRFp4T09nMjhkWEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhLLzRUR0JoOXAxZ28vVEs4SDNWdE9rWlIyUWp5WkVvQzBKb3B3L0p1RlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBqbmZaK0d0VTJ2NHErOXkrWWlITnpzbDM2aW5GK3BTNEk3Snc4eHEzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1pwbjFGYWdJbEFBS1dQdHNxRE5jcG41eU8yTkorNDRrblZyYzdFNk5rbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI2UUxOLytXeGVlVVRGQ3k2UFRHL20vU3hTYU50R3J1MjVtQXB1d3hrWndkSnhSNzZuZHEvMFNONG1wQW1QeEVOeHJ6ZFVmbklWcWlQMlpDZWlrNER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMzLCJhZHZTZWNyZXRLZXkiOiIwdDhHWEptSU5rcjlyQXdIN0tEd2ErQ3o1WDl6RUljRzNXWjdJWWMyZnBNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxMzg4NTM1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4NUNCNDFEQzA2NjVFNDg2MzcyNTVGNkFBOTg1ODc4RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMDI1NjA4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTM4ODUzNTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0Y2NzNCQUE2MDZCQ0VDMjQ2M0M5MUUxQjkxRUI4QTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjAyNTYwOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMFNvN2N4MlVTM21SZFR5Qks3enZ5USIsInBob25lSWQiOiI4MjlmM2EyMy1kNzZlLTRkNmMtODE0NC0zMjU5NTkwNWQzNTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1krVWVUUjBwYzc2c2VONTRiOTk5L2VpdzZvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind2TmowTTc5L1MraTdOQ0R3Y0RRVHZtOGY1MD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0SkdQQk0zVCIsIm1lIjp7ImlkIjoiMjYzNzEzODg1MzUwOjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4pye8JOKiPCShpwg4bS54bS/4a2E8J+HuPCdm6jwn4eqTCBM8J+HpvCdm6gg8JKGnPCTiokg4pyeIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLMmgxNGNIRVBpTWtMVUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpeXVEdXlzcWkxRmRlMUpEbTlnTmRYa2VJang3QlZiSDA4ZlZQMmtXWVdJPSIsImFjY291bnRTaWduYXR1cmUiOiIwMitSRWRYWEU5V3VNZ2owZ1EzY0Q0cGUzbjNxSE1xenMrKytPVWN5OFMzWkJIYmJXVVFVc3RzbEpScllXSm9IN3o0UldGQ29hL05kcmZBUGZDeE9BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia1NycTlPY20zbXNmTGYrYVB0WXplR0w1bGdiZGFIdk1wSTVCb2VYYyt5ejR1V08zS0dhL2RWbThQWlNjSjlwNFJtTUE3eUk3RnIzMFAvbkZJd3Y1QWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTM4ODUzNTA6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZc3JnN3NyS290UlhYdFNRNXZZRFhWNUhpSThld1ZXeDlQSDFUOXBGbUZpIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMDI1NjA0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU4vbiJ9 //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By shellah_md*",
  author: process.env.PACK_AUTHER || "shellah_md",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "shellah-MD",
  ownername: process.env.OWNER_NAME || "shellah",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
