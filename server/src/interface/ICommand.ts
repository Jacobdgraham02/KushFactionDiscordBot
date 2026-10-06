import {AnyComponentBuilder, SlashCommandBuilder} from "discord.js";

/**
 * When each class in src/commands is created, it must implement this interface so
 * it contains all the below fields
 */
export interface ICommand {
    data: any;
    authorization_role_name: string[];
    execute(interaction: any): Promise<void>;
}
