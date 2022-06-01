import { SlashCommandBuilder } from "@discordjs/builders";
import { ColorResolvable, MessageEmbed } from "discord.js";
import { CommandInterface } from "src/interfaces/CommandInterface";
import { unregisterFlag } from "../modules/users";

export const unregister: CommandInterface = {
    data: new SlashCommandBuilder().setName("unregister").setDescription("Unregister your country's flag from the 10 Man."),

	run: async (interaction) => {
		await unregisterFlag(interaction.user.id);

		// Embed
		var subEmbed = new MessageEmbed()
			.setColor("0xFF6F00" as ColorResolvable)
			.setTitle("Unregister your countries flag from the 10 Maan.")
			.setTimestamp();

		await interaction.reply({ embeds: [subEmbed], ephemeral: true });
	},
};
