
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




global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUN1Tkw5bjJpbmJCQ2k4ZS9JS0dWZXd4TWxRT1M1YkQvbUpIcmxhOXVsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0t0TE1ycEVXbVBQekxCb29XTlFlbkRmU1RCUHRPOG52WWhFaDZoT0toZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT2lMQnZWcE14VTdkckFHRUMyS29TQWtCTTBhSkppbm5TT0lwZXRvYmtzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuVVY1OW1tbUtld3lKbmlTWHVNRVpLS1g1TFpySCtjUEswS1lWblN5NGdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDT2NLMmQ1NUlZcktlRXRyaGppRHkwSUtRYVoyZUdmV3BtQ202SWp0blE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhUbUFEWi9lMXorSGNxTklUbGpZVjlnZFFoYXBlc242WFE1M3g5aFptREU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUp3cURhTGxrNTFVU2lrUmIzQ3BucXJTZi9FTG9xcHBNOFh3MEo0QVQwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmc5VGF6REtTd0o1aEVpYlNTWmQ2OGFjaTRHdkFWdmk3WXJvVVRHZ01oOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks0cDMzNlBvaWtlUURmbXNDaWE2cUFHd09lMzdKeXdOejQ0NUp0bVRQd2N5MFVKRzRWbVg4NDV1Z0d3aFgybkVFWmtyU2tnOW1HWkUxZitWdWFVSmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6Im5QbFBpWFpnN2NGYXQzelgyU05uQ2t2YkQxdWc4S1BIWUFXdkNDQUYveTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjQzODUxODczOTYxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMzMzkwMTc1REEzNTMzMTU2NUIzQzhBM0I1QjFDQjE3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMxOTU4MDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI0Mzg1MTg3Mzk2MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MzBCQUU2NDlBQzYxQUEzRjdBNjg1NzUyRDM1MDg3RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMTk1ODA3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqTzhkZEVDdlNRdU1BRkhGYUtQeXdBIiwicGhvbmVJZCI6IjMyNDY3OTYxLWJkYmYtNGM2MS1hZjZlLWI0M2Y2YmQ0ZDVkOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqL0ExV0x3VENzSkdQTXRjcEF2RWpEMkJqQXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXc0Q3BiZnk0V2JHNkFQTWFkb3FUei9tQUFVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkMyQTVLR0FYIiwibWUiOnsiaWQiOiIyNDM4NTE4NzM5NjE6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLigZbihJjgvJJEzLfDiU3Mt0/Mt07MtyBEzLdFzLcgT8y3Tcy3Qsy3Usy3Rcy3U8y34LySIiwibGlkIjoiOTA1MzQxMTg5ODU4OTg6N0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BTZTFvOEZFSWZEMTdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imw2WHYrQ3V3Vm93bUk1YkRaa0lsdGFHb0Vuek9JT0dhRkFjY0ZxRUVpZzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlF6NEREV05Bd1kvZFpLeWxYWHc3Unpienp3bDNGL0Z1cW82N01RVjRvbzk2aStlSXpRSS9xTGIwNGpZRnd3MUpGWFVINkNPUWx0cStKZk4zSXUwWkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzTENob3I5UnZHVFNSSUtWQ3JYSlhRL1ptS1haaFdsSFJMUzVGVnhack9OVHgzMmRXVUpTWnhxc0g3clVwRHBGSW5uZ1A5ZDhhM3Eya3NtNW9QWGVnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0Mzg1MTg3Mzk2MTo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlplbDcvZ3JzRmFNSmlPV3cyWkNKYldocUJKOHppRGhtaFFISEJhaEJJb1AifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMxOTU3OTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlpyIn0=
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
