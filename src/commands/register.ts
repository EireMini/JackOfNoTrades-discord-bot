import { SlashCommandBuilder } from "@discordjs/builders";
import { ColorResolvable, MessageEmbed } from "discord.js";
import { CommandInterface } from "src/interfaces/CommandInterface";
import { registerFlag } from "../modules/users";

export const register: CommandInterface = {
	data: new SlashCommandBuilder()
	.setName("register")
	.setDescription("Register & represent your country's flag for the 10 Man!")	.addStringOption((option) => option.setName("flag").setDescription("Enter a Flag ISO Code").setRequired(true)) as SlashCommandBuilder,

	run: async (interaction) => {
		const flag = interaction.options.getString("flag")!;
		await registerFlag(interaction.user.id, flag);

		// Embed
		var subEmbed = new MessageEmbed()
			.setColor("0xFF6F00" as ColorResolvable)
			.setTitle(`Successfully registered your country's flag (${flag}) for the 10 Man.`)
			.setTimestamp();

		await interaction.reply({ embeds: [subEmbed], ephemeral: true });
	},
};
