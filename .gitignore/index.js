const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("Gopnik")) {
    message.channel.send("https://www.youtube.com/watch?v=QiFBgtgUtfw");
    message.channel.send("TRIPALOSKIIIIIIIIIIIIIIII");
  }
  
  if (message.content.startsWith("!thomas1")) {
    message.channel.send("https://imgur.com/PxZvdmv");
  }
  
  if (message.content.startsWith("!nico1")) {
    message.channel.send("https://imgur.com/a/K7NNNq4");
  }
  
});

client.login("NDU4MzI5OTYwNzEzNjgyOTQ1.DlDlJw.cL7uOynHuO-VxxYv6aq0AG4naHg");
