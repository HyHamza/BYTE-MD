
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kipkogeimeshack6@gmail.com";
global.location = "Nairobi,Kenya.";
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENWSVpKZjZFRzkxQ0MrbSs2R0ZmSTJicWYzZjRsTi8rWFV1QWhEbzBGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHY5SHE2Zk9OSmE0Vllmak1kSTlzR3ZLazJKZCtWeXNyS2JqN0liU1hSYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT09lc2tOelIyRTdyN2ZMeDZPK1UraytJbXRua1phWkM0Z3Vaand6MVdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUMUxuUnVsWXJ1R1R4YWZZZ0JBZzJidlFXTnFLWXZ1U0wzOFMzMHIvRUhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRBZDVjUUZqWDV3M2tZVjhkZVl3TmRWdUhHOGJPTzJYVWQ0SHovQlpBSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlkdCtRdmxucFhPZ3pFT2lneitIS05BQXdPUjE2RGlBRlpaUWwxSzd3RDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1RWUppSXFyWjA2TjZHSytQY1dYSmlJdWtIU1Zrcm9LU0x6ajZjQUxVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVlDbE01WDU3d0JYY0h4emFES0pabWpwQ2hQclUxano0NGltUHdKUWdodz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZCckI2RkhWM1dVNW1JYUVtSGtSSW1DY2pWYm40dFVCcDRpR0tDeGh5dXBOcisramlyR1lJY1JsOXV2S1FBYkhQVWNOTERuWldScElCcU5EeCswT2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6IlI2VmNZTGJLSS82ZkxEMGxFTFgzZHdmL3JmZFF2OVlUWGhHeW5qelZtQms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InI1LUcwUzNKUmo2cEUtZHFQNVUzalEiLCJwaG9uZUlkIjoiZjNkMzQ1M2QtOTc4YS00NGMxLWE0NGYtYmJkM2Q4NWNlZGZlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJUYng2ZStZTDd2eHN4cjVRdkI2bzZDMXdDQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTeUJWNW1UTzgwTmN5a1QrTURacUllTms2MGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMzZUR005NFoiLCJtZSI6eyJpZCI6IjI1NDcwNzU0MTE4ODoxOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGVYMStFRUVQZlBuYlVHR0JBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoiekoxdndsd0tON2s4UkgxVzZ0RldaUTFHR05DOE1CRkhCOEJCNWpsYm9IWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSHk5cVJnQzFvTHdHaFRQYXpGa0VDTU8zM3FwTjlLWHM3RlowTENyQmtNQVpaWnlndWMyZHoraGUrSmhzazJzZjFPU0t0dHdEVk9tbWxBK0dGeS8vREE9PSIsImRldmljZVNpZ25hdHVyZSI6Im1GK29CNDFXcUxBMkE2UTJ0czhPWXFJR2dDYXN0Qnd6MGJwSnBNd0RkakdxSGJ2R1J3MkczTDM2ZWRLM2tyOFBwUmZBNC8yT2E1VTVjYUI2VDl1MmpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzA3NTQxMTg4OjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN5ZGI4SmNDamU1UEVSOVZ1clJWbVVOUmhqUXZEQVJSd2ZBUWVZNVc2QjIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIyNDcxNzIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1dkIn0=" //Make sure session id starts with Byte;;;



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
