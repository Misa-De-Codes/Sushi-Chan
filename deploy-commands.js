import { REST, Routes } from 'discord.js';
import { config } from 'dotenv';
import { data as helpData } from './commands/help.js';
import { data as pingData } from './commands/ping.js';
import { data as waifuData } from './commands/waifu.js';
import { data as rockPaperScissorData} from './commands/rockPaperScissor.js';

config(); // for .env

const commands = [helpData.toJSON(), pingData.toJSON(), waifuData.toJSON(), rockPaperScissorData.toJSON()];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

try {
  console.log('🌀 Refreshing slash commands...');
  await rest.put(
    Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), // faster
    Routes.applicationCommands(process.env.CLIENT_ID, process.env.GUILD_ID), // slower but global
    { body: commands }
  );
  console.log('✅ Slash commands updated!');
} catch (error) {
  console.error(error);
}
