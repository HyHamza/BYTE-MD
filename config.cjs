const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhsWWgxSEd5MFp3ak9MaGNPeERXM3AvS0cxeGwvdDNYcFNNTDRqOTRsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmxLTUUrcG5SOWVvWktucS8xbUlyWkcxYkRHZ1RwUk5NZDhIa3I5bWRrST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQmZrRWo4MzYxRFE0RHM4NkV2ZStzVFpHMmdwcUFyS1k2QTB4bDY5QVdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUjZPaTc5ZkpCS2IxbXFsS3ZwQnB4anE4YnhkK016VTVKNjNqUzNiY0EwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGTzNyWkZmOGYzQm44OXhOYmhubXFoQkhtd3VMTWswMG9uTk5GY2MwVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlZYmVjVlRlK2VkWDV6bGFCYWhLQis3SzJFV0tyYnU0cFZwTjBtRUYrMWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUU1Wnpsa1g0WktGWUFlS1ZIOWdPaXp2ODZoNlB3MnVkdXdhbHpIM2kwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlpGdVRPbzl6MHZkaTVacUZiajA0VFJKSGtJUnpOVjZXZVVlNk55NUxYTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt4T0tXUnRodldQQUN3RnRsb2Jpd2wzU3p6Zm1yNE43R2dsU3dGQnhOK2RlZ1phZDBOdndWeUVOWHB1akVPYkpyZ29RTnl2R3FWU1lRTlFkS2Z5R0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiJPaHRsN0RlVFJhd3JwVnEzOEM0MXhmdiszQVZ4TWN2blZXWWdXUWZqUmc0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiVjJaSEdBVDciLCJtZSI6eyJpZCI6IjIyOTk2NzQxNjY1OjQ1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKcWU1RTRReDZPT3ZBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYWkFobDVsV2FsWjU3bXV0L2JZUWluLy96RUVmdlRnRTdEODdaSXlLV0hZPSIsImFjY291bnRTaWduYXR1cmUiOiJhb1Y1U3hHNXQvN0cxZjNnMzBycXlrN0pGem5ZVGwveGN4Q1RvLyt0NnRVTllPQURxbXczRjVkbExKa21vOG5ISng5dE45akt3SnNsYzZKSXFMS0dEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiajhBNnI3b1I1NmRiNCtQQ2NSSm9iYXRCUXBnVytYaFlRUU1qS1U0R294a3ZGMkVqT2EzN0JNaXJDR3Z0T0pZR3R5UjN2M29hTWJyODIrRVhCeThDQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjk5Njc0MTY2NTo0NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWMlFJWmVaVm1wV2VlNXJyZjIyRUlwLy84eEJINzA0Qk93L08yU01pbGgyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIn0=",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'false',
  "MODE": process.env.MODE || "private",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'false',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'false',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'false',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'false',
  "ANTI_LINK": process.env.ANTI_LINK === 'false',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'false',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'false',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
