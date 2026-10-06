import { MessageFlags, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder } from "discord.js";
import { ICommand } from "../interface/ICommand";

export default class Level implements ICommand {
    data: SlashCommandOptionsOnlyBuilder = new SlashCommandBuilder()
        .setName(`skill-name`)
        .setDescription(`Use this command to find out ways to level a skill`)
        .addStringOption(option => 
            option.setName(`skill-name`)
                .setDescription(`(Required) enter a skill name`)
                .setRequired(true)
        );
        authorization_role_name: string[] = [];

        async execute(interaction: any): Promise<void> {
            const skill_name: string = interaction.options.get("bot-username");
            if (!skill_name) {
                await interaction.reply({
                    content: `Skill name is invalid. Run the command again and ensure you have entered a proper skill name that exists in Zomboid`,
                    flags: MessageFlags.Ephemeral
                });
                return;
            }

            
        }
}