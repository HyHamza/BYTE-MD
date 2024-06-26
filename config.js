
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
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01YTExBNDIwVmUxcWFkRzhkVGJ2eVhSUU1qczJMRkNMR2FvdDE2VHkxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDR0cXpQRnl0YlI0ZjJCWmUwZWNwUlNjWjl5REtqQ0RidllxM05NVERBbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRW9BZ3NVblY0MGphbC9wcGYvMWdOQ3BlZEN5RVNrSE4xZEFXcm9xZm1FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJENzcveGJOYWllZXkxQVZFZEwzQXQ2OGd6SjJtVkRWSWhhZGFBNjdraEZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdPT2ZzZjRhaHFqRHJwN1k5aEJFM0JBQXo3VkRXOGZ2T0M3QWFTTHU2bUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJWMEhhcjAweUJOVWtpSzJ0WlNWN0Y4TXRVQjV4YktjRTRkNktZU0FTUzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05UOFo3aFBnaFYxNVR6c1JtamxWVDZ2eFIvUDNoQ09vemtWT2FWbzZuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjJDTTY1RUZTRk5Kcy9wdE04TG5CbGF3RCtGVDdyNWtkY0x6V3dhbkpSMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFJUHRVWEt6TkVMbkl6T0Y3N2Y5dWo2ZUJTbjdaUm9BWExoNUNEWUlZVm45b3pkaEJkT2x5aEMxMXJiV2VuMzBiMkFBeDMyL25wRXprSGVnVUQwcmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJjTHRKak1BNG05NHNGbVQvY0xHTE96UVNWaHBSeGorOWRpZnlVcHorWDBVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjMxOTcwMTAyOTAyNzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTNBOTlDQkI1QUIwNkI4ODIzMDlFMkQwQzczMEEwMUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTM5NTMwM30seyJrZXkiOnsicmVtb3RlSmlkIjoiMzE5NzAxMDI5MDI3NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyMDY2NTc1RTFDMUU1NDg3Mjg4QTZGMUQ0RkIzODFCOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5Mzk1MzAzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIzMTk3MDEwMjkwMjc2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVGMDFEOEIyQUI5RjQ1RkQwNkQ1NTJCMzc3N0Q2QTMyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTkzOTUzMDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjMxOTcwMTAyOTAyNzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDRDMzIyQTgwOTY5N0VCNkQzMDhGMzU5Q0Q3RDlEQUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTM5NTMwNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTTJYU191czdRVzYzRVdLYWpLYlpPdyIsInBob25lSWQiOiIyYzhhMmY5OC1lN2U5LTQxYjgtYjgzNS1kY2E5Y2Q1YjQ4OTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlhtaC9zbnlzV05CZHVEdEt4MTdjSFVWU01JPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJEc0FVRjFUK202RmdyVFNxWHpjZHJhdFgrQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJRR0JBOUdUTCIsIm1lIjp7ImlkIjoiMzE5NzAxMDI5MDI3NjoxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLM2NuNEFFRU9QSDc3TUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhd29pb0J2elNGUzZSMFltNitzeWloa2xFOHcvRVNuYmpOV3BJWWdOT25vPSIsImFjY291bnRTaWduYXR1cmUiOiJBampBUldEN2Z6L21IdkdUVzBYblJ1RmZySzFlOVg5bXVNQjJ4ZHRmR05CVFUzWUl3YjdwRDF1cDdVNnVNYW9qL1BmQ1pFNCs2MkVrTlk1RTBnWnVBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRlRSNlF6VE9DbWdpc0piUFRucjBCZ0xDUlhqckJGMVM1a3VpalV6NmVnOXM1MUt3ZExqTlFNNXQwTEJZS2JCWEcrcjJGQ1hnSjdtQlUwVjJzRVVtamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzMTk3MDEwMjkwMjc2OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV3NLSXFBYjgwaFV1a2RHSnV2ck1vb1pKUlBNUHhFcDI0elZxU0dJRFRwNiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTM5NTMwMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNMUQifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Hamza",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
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
