import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('rock-paper-scissor')
  .setDescription('Sends a random anime girl image with a flirty message.');

export async function execute(interaction) {
 

    const embed = new EmbedBuilder()
      .setTitle(`You: Rock \nSushi: papper`)
      .setDescription(`You: 4 \nSushi: 3`)
      .setColor(0xFFC0CB)
      .setFooter({ text: 'Powered by Waifu.pics MUSA' });

    await interaction.reply({ embeds: [embed] });
}
