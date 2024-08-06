
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkNzWElFMnpKL3k1MEpIV2xOanVLZjhFcXhyRFZVbEZxUEJJNkZZb2dXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGo4STVUd2UvNkkzaHN6M1NoQlJzZm5KbCsyNUNDR1NLS3MyMlh4VTNIMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TW1oNWFPQkJMeXZYZzNSd0crcW94RGxaUnYrdm9GaHhKWFNKVVd6RlY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIR1pkVS8wZkRXb0FrZXgrQTFsTEJDVlFtaWpZOVpVOFAwTHFpSitsR3pnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNNR0F6QkhnZmdDQ25xY2ZMS3ZheksrS2xCSm1ERzVmVGVLejdhSlhoSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVpUkgyNzJpRzZ0bkxUYW16TnlzbmZtSFZrbFAyK0lJR2Z0YTZIL01mMDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0tEaEtGaTNNbWNmQ3kwcXFQRkRkM2dTaWN6N0ZkUHh6cjU5LzVlNG4yRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieENwTUNFeXRXTFV3T2hkQ3EzWlgvUU9mNkYyWm9NaHcwQmRudkdFdWwyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkwS2thV2M1a3cwU2FhNmV5ZVZkTWNVdXBhMnN6bkY0OFpHZEhaK1lQcmZ1bG9LNUFXSjRQbXlYcEVQVTlmc014VjhzRHI2VDRwRkRoZmI2UjBlK2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJKQ2JxVUJSbzRYdk9takxwaTlpTmVwaXoxQzBNUE9Ma3R2SDYyYm4vRGRRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlRUdjOUwtMVRzNjFCYlkzbjdSeF9RIiwicGhvbmVJZCI6IjQ4Y2FlMDBkLWI2ZDktNDY0Mi1hNmIzLWNlNWEwNGQ2YWRhYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTTNFNGVLUU4yMUFCTkg0WksxaW02aEl6c1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjR3WXcyR1lnRzFyZzE0MW1Ic3Q1RUpLbmVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdBQkNBSkJXIiwibWUiOnsiaWQiOiIyNTQ3MDQzMjI0MzQ6MTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lxQ3JKc0NFTUw1eHJVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNNVjlrbEh5anJmdndnVWx3c2Q2ZE9qRTNTcmJ0TVp5dmNCNS9LR2YvVU09IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNHU1FXRW9Ham1iUlVjc09Fb21jc1FBL3F3Z21oUGc3OW9MaVRtSHBGSCtUbjRGblZpSjdmdU9NaFI5dVFVVXVpbTdLNXBmazJyWFdDd1RSb3JsbEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrZkRIdW5aS3pGVndiaER3TzEvMW8xMEJBbEs4dEpKVWxoL2t3Y2UxOEJkdlp3R3VUYWIxQlBuWGxDTm1vRnBYSkZiUytTeVYxN0hMQUlsd1hLN01nUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwNDMyMjQzNDoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiREZmWkpSOG82Mzc4SUZKY0xIZW5Ub3hOMHEyN1RHY3IzQWVmeWhuLzFEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyOTI0MjQwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdzMyJ9" //Make sure session id starts with Byte;;;



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
