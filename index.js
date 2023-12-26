import "dotenv/config";
import { Client, GatewayIntentBits, Events } from "discord.js";

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on("messageCreate", (msg) => {
  msg.reply("Hello World!");
});

// Log in to Discord with your client's token
client.login(process.env.TOKEN);
