const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("blyat!");
  }
});

client.login("NDU4MzI5OTYwNzEzNjgyOTQ1.DlDlJw.cL7uOynHuO-VxxYv6aq0AG4naHg");
