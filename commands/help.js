import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Lists all available commands!');

export async function execute(interaction) {
  await interaction.reply({
    content: '**Available Commands:**\n> `/help` - Shows this help message\n> `/ping` - Pong! 🏓\n> `/waifu` - Shows this waifu \n>',
    ephemeral: true, // only visible to the user
  });
}
