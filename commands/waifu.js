import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import fetch from 'node-fetch';

export const data = new SlashCommandBuilder()
  .setName('waifu')
  .setDescription('Sends a random anime girl image with a flirty message.');

export async function execute(interaction) {
  try {
    const response = await fetch('https://waifu.pics/api/v1/waifu/random');
    const data = await response.json();

    const flirtyMessages = [
      "Is it hot in here, or is it just you? 💖",
      "You've summoned me, senpai~ ✨",
      "Careful, I might steal your heart! 💘",
      "Looking for me? I'm all yours! 💋",
      "Did someone call for a waifu? Here I am! 💞"
    ];

    const randomMessage = flirtyMessages[Math.floor(Math.random() * flirtyMessages.length)];

    const embed = new EmbedBuilder()
      .setTitle('Your Random Waifu')
      .setDescription(randomMessage)
      .setImage(data.url)
      .setColor(0xFFC0CB)
      .setFooter({ text: 'Powered by Waifu.pics API' });

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    console.error('Error fetching waifu image:', error);
    await interaction.reply({ content: 'Sorry, I couldn\'t fetch a waifu image right now. Please try again later.', ephemeral: true });
  }
}
