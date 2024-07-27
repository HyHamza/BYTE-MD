
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
global.allowJids = process.env.ALLOW_JID || "236713885350@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "263713885350";
global.sudo = process.env.SUDO || "263713885350";
global.owner = process.env.OWNER_NUMBER || "263713885350";
global.style = process.env.STYLE || "4";
global.gdbye = process.env.GOODBYE || "on";
global.wlcm = process.env.WELCOME || "on";
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxGOXNtQVFrTnlqZlhTRVFwSmhMQWtFNS92dVVzY1dlREYvZnl6RWJGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXRZbUt4QXkzUmRFNFJiTTNXamlIUU84M21WOXZyOVQxTndEVDFQdmtWQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSkRmeldzV3RiTExKT2dOdmpwZGZhL1Y5b1FqcURsK2pQM3ExdGRWLzE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQNWVSN2FDd0hXTU1Tb0xlaWQ5MEc4bDR4YzM2Y2pZWXNRaVQ4M04xV1RvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNMkJCSUx1TmtmaC9aRGNBSUlLYUVNcU52OW4yVExpcDN0RXo2OFVubEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhNQW9neStNdi94RWRIYnNFSjEzK1BsTGhMVjlOL3dZL1lRRWwybUFTRGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUNkeXJKemViUXAzYytlNnBQczV5bUlVS09GTzFFT0hDMnZZR0gxVGZHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVRKK1Jjb0lNajRGRTNSbitnWVF2UjRRb1lwbkdwbnJEc0ExM2o4N21sYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild1RTZsaU5pTkV0ZmtuVzZqNXpCUjFUMU01ZytkU2JSTUx4VklZVHNnTUFqQ0FQSmpWK0MzV2JSOWVQQVV1bVNBNTFYWVpHSm5UcmszbVNKSmh0d0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE3LCJhZHZTZWNyZXRLZXkiOiI4bUxaY1QwU25EZXJ3MEpPYTV5bk1EajF0SDRyd3drSGFMTGlyQXpoMVVZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxMzg4NTM1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDOTY3MjlDMzMwQjg3NkExREYzMUFFOEJFRkQ2M0I5OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMDY0MTQxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoLTMwMDFWY1F4cUNxakdfNTZXZWh3IiwicGhvbmVJZCI6ImY2Y2MzY2NlLTczMzctNGMzYy04ZjA0LTYxYTlmMWI0MzQ0NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCTG1MMExNbXNVbytZQnB4cFVXcis3eFRrdEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMCsrVWk1S3NtV3pxeTVMaS9wcGNiZWtDK21vPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikg5NkM0OEU3IiwibWUiOnsiaWQiOiIyNjM3MTM4ODUzNTA6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4pye8JOKiPCShpwg4bS54bS/4a2E8J+HuPCdm6jwn4eqTCBM8J+HpvCdm6gg8JKGnPCTiokg4pyeIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLNmgxNGNIRVB5NWtyVUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpeXVEdXlzcWkxRmRlMUpEbTlnTmRYa2VJang3QlZiSDA4ZlZQMmtXWVdJPSIsImFjY291bnRTaWduYXR1cmUiOiIrZUhqNWhTRDhVenpCWHFxZENZRnd3L2x2ekRMTHo2NFlWZ2xQSGphQ3U5UlZyQ2U5Zm1ob0tzS0xYYmRKQzFmbkJ1OGN3WVJ6R0o5c0ptZ1BnR3dEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS0dDemJyRzhMWkg5d08zYWNjZHRGUVJka0hrMTF6cmQ5SExZbkRPeGdyaVUwVW9MbVRJbmRiV1M5VS9YRm1vNnBiUzkxby9WWXpsbVB4TUhhN3FmQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTM4ODUzNTA6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXNyZzdzcktvdFJYWHRTUTV2WURYVjVIaUk4ZXdWV3g5UEgxVDlwRm1GaSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjA2NDEzNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOL3YifQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Mr shellah*",
  author: process.env.PACK_AUTHER || "Shellah-md",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "shellag-MD",
  ownername: process.env.OWNER_NAME || "shellah",
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
  LANG: (process.env.THEME || "shellah md").toUpperCase(),
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
