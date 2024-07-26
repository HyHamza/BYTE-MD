
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




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUovbExXWi9hZmlyaUNPY1lFOWo2Z0t2dzh3SkhjekNBUVNPNmRWM2ZFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpLM0l6SkdXVGNSVmFsUlkyUFN0WU9COUgvM05zdDlvYzRsdHZlaktIcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLT253bWhXdHJyaFJOc3JBcGNqT0UrbnlTTE5hdVN1UWllS0tHbUludkVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsb2p6RG9oWFM4SUpnMjVaR29qMWNCUUtyV29xbkRIYzRPd01nUHNiSmgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndBTUY2SHR3NnhrV1Q4Y0p1K0J0U3BOVkJnNUZnTWN2cFRvWUx0dC9Oa1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFNeE82UHh4a0dlT2tYd3Q3V0paU0dCVVhXRXczd3lyK2F3TjJONkFIVE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUE2TDNMWjh4eWhGWWdVQ0dOaklEZlJYMW92cGlXbCs4WUFHM29DL0dWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmZ5am1qRzEvQ1hnTjlVVUR2VDJHQ0pVQ29jOTRKRVJmRWRrdVhkRFNDND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik4zT2hjbGRjREttMGpMa1BpdjFpUW96dkNwOTlPZWc4UnVYYXkyMTJ6Vm0vV2FqNHpqZWNrdG5YaThGM0tvajFWN3NWdFN6aWtQQUZwUFFTbHhOU2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk1LCJhZHZTZWNyZXRLZXkiOiJnUmNZTnloMC81dWl4djhSVnVRVGgvRkNPcVlFYTBsL2F3aEUzamlNTTN3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxMzg4NTM1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFMzkzNjk4MEMxOTMwMURBRjdBREQyNDQwOTQxQUJDOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMDMwMjkyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTM4ODUzNTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0YwOTBFQzk1RDRCRDdEODhBRjU3NjFBMTFEQTFBMjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjAzMDI5M31dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVDRXVlhoWktRM212VUlpcDNsMXhiZyIsInBob25lSWQiOiI2ZjZjY2JhZi00NjAwLTRjZWMtOTRkNC0xYzliNTlmOTM3MjYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMCtSS2JuV2Q5SEdCVVB5azNTb1JlL3NBY2djPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhvdU1kLzlsaEY0VG9MREovWnU5eFpMRUhHVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSQzJFWTJHNSIsIm1lIjp7ImlkIjoiMjYzNzEzODg1MzUwOjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKcnvCTiojwkoacIOG0ueG0v+GthPCfh7jwnZuo8J+HqkwgTPCfh6bwnZuoIPCShpzwk4qJIOKcniJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzZoMTRjSEVNU3hrTFVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaXl1RHV5c3FpMUZkZTFKRG05Z05kWGtlSWp4N0JWYkgwOGZWUDJrV1lXST0iLCJhY2NvdW50U2lnbmF0dXJlIjoicnNLN2FmUnNMNHloQWg3c3VMS09nenVRcnVKcmE4eUQvTlAxUWlkM1ZkS0VoVS82bHlwemY5Y0RFL01RL25nNUFZVjZSN25SenpwNGMvRWtyZHZHRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlVJTW1CQytrM3dLS0dBZHQxa29mMlU3emk2K0NLNWFTZXE5RmlHODYrcnVPRHVid0RCZWYwVzNlRG9sYng5RXdzUkhtU2duNjNFVGF6dHF0VTJSZmpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzEzODg1MzUwOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllzcmc3c3JLb3RSWFh0U1E1dllEWFY1SGlJOGV3Vld4OVBIMVQ5cEZtRmkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIwMzAyODksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTi92In0=" //Make sure session id starts with Byte;;;



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
