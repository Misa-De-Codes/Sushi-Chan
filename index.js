console.log("hi im Susie")


import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import { execute as helpExecute } from './commands/help.js';
import { execute as pingExecute } from './commands/ping.js';
import { execute as waifuExecute } from './commands/waifu.js';
import { execute as rockPaperScissor } from './commands/help.js';

config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = new Collection();
commands.set('help', helpExecute);
commands.set('ping', pingExecute);
commands.set('invite', waifuExecute);
commands.set('rock-paper-scissor', rockPaperScissor);

client.on('ready', () => {
  console.log(`🟢 Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command(interaction);
  } catch (err) {
    console.error(err);
    await interaction.reply({ content: 'There was an error executing this command.', ephemeral: true });
  }
});

client.login(process.env.TOKEN);
