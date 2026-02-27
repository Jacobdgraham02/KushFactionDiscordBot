import InteractionHandler from "../InteractionHandler";
import {ModalSubmitInteraction, MessageFlags, StringSelectMenuInteraction} from "discord.js";
import {BotDataRepository} from "../../database/mongodb/repository/BotDataRepository";
import {IFactionGoals} from "../../models/IFactionGoals";
import {UpdateResult} from "mongodb";
import IBotDataDocument from "../../models/IBotDataDocument";
import fs from "node:fs";

/**
 * Uses abstract class InteractionHandler to provide implementation specifically for
 * StringSelectMenuInteraction interaction types
 * @param form_interaction StringSelectMenuInteraction
 */
export default class SelectMenuHandler extends InteractionHandler {

    constructor(private select_menu_interaction: StringSelectMenuInteraction) {
        super(select_menu_interaction);
    }

    /**
     * A switch/case is used here along with the unique string select menu id to determine what action should be done
     */
    public async handle(): Promise<void> {
        const select_menu_id: string = this.select_menu_interaction.customId;

        switch (true) {
            case select_menu_id === "": {
                break;
            }
            default: {
                throw new Error(`No operation for the select menu id ${select_menu_id} was found`);
            }
        }
    }
}