
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
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdLSnFGUDJlVGQ3bW9KQjYxWVl5bm45bndaTzIyNGl3WTdLVURQbEMyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEdha1ZDSjQzQWNyV0prNDNsRzI5VVJSWVFFYjRuNDNQRTEzVnZkS2VCTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RHZaQ3k2a2JpMG1ZRDJpcVo1NkN2MFVhcHQ2dlhVeTlVUjc3TkkycmtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGbEd3Tjk4a21Vd053UjYxSHRmVUNUVUtFb2U3NVNucHBpaHczNjZqZ2cwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1Qam1ha2hsVDBWUWNnd3dDN1UzcldKYUlGalFXelJFcEp2MU9YdmtJRk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxSMU5MY2xvclNESGdtUmppc0FDOXlSL2k1UkxTV1FXTEx1RFdwb3FwM3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVyUUxzeDY4SHZZWkp0RjFVVDRyaGtkdWFuUlg4dHA2V3VGNGZncXJVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQW9nNzFtTUFhemlSaVV3MlJlNGJ0elRNSnN2TXZjd1YveGVRUkZVcGwydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZDOXJkNDAyUFNzTEx0VG9mbGNmYXpUSjZ2N1l3Vy9qTEdTckE0a0JZTU5KSmw4RTV6RVlIQ2VXQmVJTFROSTJxVFNKT042SVFrcTc4dncwalU0RkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6Ik5DUkE1MGR2cU1aWk1laW1MSlF5NDc2c28zR21RNHFkRVg2ejNJSzdmS2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldzZWdOMVJMU3dhSFVMZ0F3eDhycnciLCJwaG9uZUlkIjoiOWZiZDU2YWItOWU5ZS00NjY3LWJlNDgtYzI4YmRhZTEzM2E0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRSSkRJbUNyemxQdkFpOXpkYkhzZlJSdGI1Yz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJONDkra1JuSXVPQnZvRVE5NDhaUUtGOHI4eW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS0ZRTVZWNjEiLCJtZSI6eyJpZCI6IjIzNDgxNjI2NTY1MTI6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJHaXJscyBDYW52YXMgTmF0aW9uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMSzBtYWdLRUxTN3o3VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSRTlKb2FhZHlxMFR0cHBObXhmL2xKUGMwTDVXZFRoWlZjUXpGM283UVZzPSIsImFjY291bnRTaWduYXR1cmUiOiJURDd0OUxLWVNyTDJTenY1ZHNYQkxsQ3VtR290amZKaXJ2NWdPNWtCU3M1ZHZVVHpDMm1hL2V2cjdmUWVhZnk4ajFOS25ndzI0NkVBcXlmeWVmckdBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieUhyRW55OVJ4TnBhV29xVEl5TVNFRytmZWpyUXkzSVV3c21OaXZ5SzZwME92a1lFNGRUUDd5NkxXczE3YUFsRHQ1blN3cDgxSTF1aGlvTXQ3V3l4RFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTYyNjU2NTEyOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVJQU2FHbW5jcXRFN2FhVFpzWC81U1QzTkMrVm5VNFdWWEVNeGQ2TzBGYiJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzA2Mzc0Nn0=" //Make sure session id starts with Byte;;;



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
  botname: process.env.BOT_NAME || "Bubu",
  ownername: process.env.OWNER_NAME || "Deckland",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
