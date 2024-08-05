
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "1";
global.video = "2";
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
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "true";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";
global.record_audio_from = process.env.AUTO_RECORDING_AUDIO_FROM || "all";
global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app";


global.SESSION_ID = 
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________
"Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR00wbkFTSGJTR2w1cTlCVHY2Yko2SWZSekVNQWZlb3FLcHhBRjVCR21sZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NMZkxmY0JHR2VEQU9uS2FqWFgvbDdFUVVJQWtwY1Qza1dwbzIwOEJRYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSmhJQTZkU1FjRURxL3JaVjFieTFlTDFmYmNoaVFMaUF1YXJ3RXN4b0VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXeklMcGhFbW9ZakVwOXhFQTkvaHBnUjF3dzNzVzd2MnUvK3VZN2ErOFFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1FS3h2QTJyRWFoWlVrSEdZU21FRGZqWjRpckdTNVhtVW9oNEtQYzRpMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF1cWR6RnV1SnNyVDUzd2pIVm4vVFkwWjdkWDZkelNtU0MraGhzRlpnUTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUo0OEorK0dvL3VMUkZ6YUxKb2U5WldyS1l0TGpMbnNwRiszQjNtdWhrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlppVGUwNWduRGpHbCtRQXYxNDI0eEdoallNa2lNRU11eHRXaVpjcWNVTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldENG1sNVBuQnpDd3h1YjRKQzExR21odzQyekJrUDgxOERuMWsrd3FVU1h4QzJxL3VxMmlEclFKSjRMRGJrYUtPZFd1WDlkYkV3OTFCSFl3Yk5kYkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJQZkFnaUpxUS8zUGg5RWZxN25ndkhsZm5kT0xSci9wZThlQjdJVFExTmJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxMzg4MTU5N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2MjZBOTNBMTg0NTRBRjg2ODU0NDg3OTVBQ0U5QzRDQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyODY1MTM1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MTM4ODE1OTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEIxOEQwMEJCRDY5OEIzRDEyMDMzM0IwNkEzMTQ4REQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjg2NTEzNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQVdvTzlPT3RUTjZCdU0wc3hRUDBiQSIsInBob25lSWQiOiIyNmNlMDk3MS0xNmU2LTRhNTAtOGQ1Ni00MWFiODM1YjU3NWMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGNiVnE1dDUzTE9TMHpVUGRzT0lDSml5S1Z3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJjR1NaSXl2T1pWN1dGUUdzazc3QzA0bnQrbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaOEpHSEJBTiIsIm1lIjp7ImlkIjoiMjU0NzEzODgxNTk3OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+SpWrDuGrDtfCfkpYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09HU2dib0dFTjZydzdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imd0aEdKdWZqeHd3YjhBVVcwMlF2N2ZXbStMZG9walp5Vk9oQ2FwMHJJMDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InZsbWFsT0ZMVTlZMDZ1NWxqKzZBQWdkNURueFRFMllFT0t6bUZKdG56ajllajZtdml1czBNRnA1WDBiRWRTSHU5VXgwVnNVSm5BTHJhZ3BKMDhHcEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5YW9EbkxCcXlPYXM3YjM3djg2N0NJMW5SRFNtZ1lwcnN1eHRRWUF5ZVdOSk45RlBxaERrQWU3c3MvU25UTmRrYytDendkN2VCM05PMDdHcDJqSGJCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxMzg4MTU5NzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllMWVJpYm40OGNNRy9BRkZ0TmtMKzMxcHZpM2FLWTJjbFRvUW1xZEt5Tk4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4NjUxMzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQzVqIn0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "Jojo 254",
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
