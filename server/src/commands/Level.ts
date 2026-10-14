import { MessageFlags, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder } from "discord.js";
import { ICommand } from "../interface/ICommand";
import { loadSkillJsonFile } from "../utility/FileReader";
import { ISkill } from "../interface/ISkill";

export default class Level implements ICommand {
    data: SlashCommandOptionsOnlyBuilder = new SlashCommandBuilder()
        .setName(`level`)
        .setDescription(`Use this command to find out ways to level a skill`)
        .addStringOption(option => 
            option.setName(`skill-name`)
                .setDescription(`(Required) enter a skill name`)
                .setRequired(true)
        );
        authorization_role_name: string[] = [];

        async execute(interaction: any): Promise<void> {
            const skill_name: string = interaction.options.getString("skill-name", true);
            if (!skill_name) {
                await interaction.reply({
                    content: `Skill name is invalid. Run the command again and ensure you have entered a proper skill name that exists in Zomboid`,
                    flags: MessageFlags.Ephemeral
                });
                return;
            }
            const skill_data: ISkill = loadSkillJsonFile(["src","json","skills"], `${skill_name}`,".json", "utf-8");
            const discord_message = 
`
**${skill_data.skill_name}**
${skill_data.skill_description}

**Max level:** ${skill_data.max_level}

**Required items:**
${skill_data.required_items.join("\n")}

**Leveling:**
${skill_data.leveling.join("\n")}
`;

            await interaction.reply({
                content: discord_message,
                flags: MessageFlags.Ephemeral
            });
        }
}