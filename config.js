
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
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVBzSFVaZjNsdHRhSHQ2SFFoQzJHMy9LU2tqRTYwTTZCcXArakxBbkdFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVo4a2RjYk40VXEvMTdzNnBZdHV1QmY5eDNZaEU3aVc0R0Q5SGt5anhtMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RHA5TG4wSktGbkdUTC9HamFoUDVFcTV5aHN5dTVrcWVLOHd3Q3ZCYjNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsTnExUG9yVnFoTU9rTTAwZmpWa2lFVDZsTlV2VEUyZUlWZUVvK0c1N3k4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QT1VlR3JzWFRRT2EvWExlQlZPSmlYR0NYdFM5dm1DRUJ1aHdlV1lhMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZmWHl2d1FZM0JvUDN5bW9BWnFvUXJLemVyazF2WWRZekhRanlQNHlpbnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhQNW1sTUhZdno0TmdyUFhkMUloRmlyaTBYRlNjUk9CTDlVYzcrMmRYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhqTzBoTVR1YU40TzZHVThtU3BhU0YyT3dtL1dvSXlyS0EwTndEbjRTTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN1U3p6cjdBMTdsMzR3bktZcncrNUNubzFzeUxtUjNyNFB1RHdMUWFSd1hKYkR6RHBJNU91dHJ3R0ZuMDNYTjRKbUlLWmtUNkxkZEE0RHg0Z21mYWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6InJiWVRFSHVBMkVOWE1jaHc0b3hvQlVjTkFjemtibTlFMExRYmVESUdkclk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzAyNDg0ODI3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU4MzVDMkJFNDg5MEVCQjY4MTE5MTUyM0QzNzkxREFGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAzNzY3MzV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwMjQ4NDgyN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3QzFDRTJEQjRDM0E5NjcwQ0EwREYzNjg4RENBRjMxNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMzc2NzM1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRY2hDVlZ4Q1RBS0hJSjJmMlpBTVJ3IiwicGhvbmVJZCI6ImMxZTQxZjMwLTQzNjItNDI5Mi1hYTVhLTIzMWMyZWY2MWU1OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6TWduZnAwYk52SE1CbW5mV1FGYXR6bFNhQUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTBhc3l1VlpMVlpiVldJZSs4TXEzWGpQSkpzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilo2NURLUTk4IiwibWUiOnsiaWQiOiI5MjMzMDI0ODQ4Mjc6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLinaXvuI4gICAgICDinqogICAg8J2XlfCdkJHwnZCO2qnwnZCE8J2QjSDhtKXvuI7vuI7gvIYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xhdHV0TUdFSnE3cTdRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1BTjRaSy9keWEweEIrNTVUN1cyMGNYcnZ2aFJXWHdWVFdWRU10bDNhUlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFHL0hyc3piRjc4bkg1enRZWE9oVmJrRFhjSy84VURwUXp3NTFVaUZpb282dVczWlp4b2NuK0xwSnhWaHhhZEZobnJtU2FYVXhYbHJMQUpSMGJEU0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYbUM1R1hNSllWR1hWOFN0WmlPZWs5RkEvTm4rQUxlb255QkRlYVNMMlU2VkdXN3ZmcHRZRnd4YkJwTWxIclNveTNIZ1RPQ2dBa2UzZlJUOFVaT3lnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMwMjQ4NDgyNzo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRBRGVHU3YzY210TVFmdWVVKzF0dEhGNjc3NFVWbDhGVTFsUkRMWmQya1YifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAzNzY3MzMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTms4In0= //Make sure session id starts with Byte;;;"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
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
