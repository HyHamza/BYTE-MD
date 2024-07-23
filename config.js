
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

Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0NZOEs0cGJ5Ky9WbVZZaTBJTnhHaHY0UGxrZWRjOVhTVDdxZkF4VEhrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGFaaHBCYUJueDc2NlpEeW0vaWhYS1d2OHJhTzdkY2hwV2lvWFBXSlhEVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRXkxa1ArNVg2WXN4NUJTUDVyV1Z3TVFUT2NEUTk5SW9GSDV3Ti9DZDBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRd1hJQVFTR3hEOU8wSmJtakFNRzZOblY4cW4xRVQ2SmxZWi9UakoxU25NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBWWt3cE9lWmVJZG5QckJ1dGR2SCtsMlN2aUNBL280K3hWNlVpSXg3RUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRxR1Y2MEtqczJoOVFoR1NGUjBxYTNpanlEczRTajA4c2IwQXE4UWl1Z289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZBMUd5NmZxKyt5ZUFDMjVEYThndGF4QW9kZjZDMDlQUWMvNkpIV1hsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXVqcThxa1BaeEo1aWY1aEFPb1pIWE4yWjBoQ3k0QTQxUExZZEE2d0p5Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVpNGhQZ1R3RmZVSHAzNlpnZHc4MTBPTy9SdnNhVXFsNTRmZkMrM25IZnZkdU9OdDd6em1FeHZzVEdENzlQb2Uxa09EOUtrRk5ibkM2ajAzL2pvU2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiJYOFdQK2laRHBIQkFpS0hpZGx4bHp2enU2OGFRak1yT1NmTC9EWVNDRWZnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0Mzk4MzcxNDU3NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2RDhFRTQwQkU0QjA0MUI1QjEyRURBOEQzQTY0OUJDQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNzU2ODU4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDM5ODM3MTQ1NzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTUzM0E1ODgxQzAzRUEyQTA5QjI0ODRFMEZGMjhCQzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTc1Njg1OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNEJhTEhSTkpRcnFIT0VNcGdfLW8tQSIsInBob25lSWQiOiI5YjZjNTQ1Yy0wMTBiLTQ3MmMtOWRkNi1mMTFiNDc3MDljNjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTW85ZnREdWVndGlJNE41MmloTldZenZ6YXE4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlCeW5WQm1tQUNQTlAyNm8xNTVaa09SVzBJbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSV1BKQ1lCSiIsIm1lIjp7ImlkIjoiMjQzOTgzNzE0NTc2OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6qeB4Ly68J2XpvCdl6LwnZeh4rO74be84rO68J2XmvCdl6LwnZee8J2XqOC8u+qngiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVdSdTR3Q0VLalovN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZHdKN0phN0E5ejJ0SzE4WWxoeWNVZVl1RTdxdDIzY2xWdFFSTms4N1ppaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYm9Ga3EzK1FYZW1rZkgwNDY0RC9yY29SUTkrQU5uNjA3WEZjMmlkNERFWWdnQ0lOeUIzNCtFaXNKamVwS2c1bnlrbTBQa0JnWG1JcWtZSkc1SlFvRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlB5MG5raW9aODR2dm5tQWlKd1llUGgwMjc2czFwN2VEZ3l2bEVQUVYzcVpYTzkzbytnWWxKTFJKTGNOQlhKQUY5dXZSc05YSitVM2IwWkVITWZKbmdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQzOTgzNzE0NTc2OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGNDZXlXdXdQYzlyU3RmR0pZY25GSG1MaE82cmR0M0pWYlVFVFpQTzJZcCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTc1Njg1NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNUzkifQ==

  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Your session ID" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
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
