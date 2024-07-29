
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kipkogeimeshack6@gmail.com";
global.location = "Kapsabet,Kenya.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "254707541188@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "254707541188";
global.sudo = process.env.SUDO || "254707541188";
global.owner = process.env.OWNER_NUMBER || "254707541188";
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
global.autoreaction = process.env.AUTOREACTION || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU9vajZyWG1QNWpibCtjKzg3T2Rwa21DZldXUFZDTzlhQVh6Smw0TjJIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmRuRHQ1MkRteUxyS3VKZkFsVzNrT2dYSVo3ME1aa2RCUVBsdDVxRG9HWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQnhIby9EU0JrTDVKTkFUaVkvY05wZWxzTGJtaE5ISDB5eWJVUHJhaVc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmL3U5ZzkwSmhNT1ZjeEVGcXdPLzBzY3VkeC9lOWlGZWlBVnFTQW8zc0dFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZOeExLQ2Z2UVY5d01Ybk1PRHNkMWpHOGVOOEFkZTJJSjFrNjdaSnA4VkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc3ZGhlRS9wY3MyTG1neTVqN1pkVHlpWG9wdjdjcHNEbWErdFA3SXljQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUVrZVEvZzZsMTJKdWN2Zy9yRGYwS0lwWHNaRlQxQVp2WHdNcy9oN1JYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0I4clhXT2dKYnVSTE1GVWg1c0F4VjNiNFo3R2lOcVpFalU4RVljN21YWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHMkNIeDF0dURpQmNoLzBkdHdEQ1BpN09pMnJHMGZCU1JaTzFnQnpZMUprQzhMczRxN0JURWFVNklpeGw4NjIyMEtnQ0Rxck9ONzg3cWVrUjhsUkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJxRm9rUTN1S1lMUitleG81RSs4SFNOZVBVOFlQZTI0dzZXTjBDbnZaY2lRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRRWdFRFRENVJQcXpQTkR0LTZrMDlBIiwicGhvbmVJZCI6ImQyOGQ2YWNiLWE1Y2UtNDVlYy1hNTAxLWJjMTQ5ZmFhMTU1YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOd0pKdDhVakNQcFF0TjJHRXd1NUxWTHVJOE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUgzQzRrRHpmc1huSFR6L0IxcjB1NEVOaGM4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQ2UEpRTUVWIiwibWUiOnsiaWQiOiIyNTQ3MDc1NDExODg6MjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xlWDErRUVFTUthbjdVR0dCSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpKMXZ3bHdLTjdrOFJIMVc2dEZXWlExR0dOQzhNQkZIQjhCQjVqbGJvSFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ild6c2FlampCYXhza3VMZDJ1RVA5RVVnT09aMjRUQUc0UXMwK016MTFwME13ZGNKSlg2dEllQjlVL25uci9RVjhQaTFvTEErbWRjTGd5SENmeFlEK0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrU3YwSTErNExUSHhXWWc3d3JVVURUTmtZMkxsdVEvc3hHVWFycHpSU084blJEdGJhZ0ZWUEltNk9GSGttc1dxUkV1a2NPSzZWN0tYYjJ3YW9ZNlpEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwNzU0MTE4ODoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjeWRiOEpjQ2plNVBFUjlWdXJSVm1VTlJoalF2REFSUndmQVFlWTVXNkIyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMjczMTAzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9XZCJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By MeshTech*",
  author: process.env.PACK_AUTHER || "Mesh KE",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "MESH-MD",
  ownername: process.env.OWNER_NAME || "Mesh KE",
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
