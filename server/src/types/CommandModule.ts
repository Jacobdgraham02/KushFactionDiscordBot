import { ICommand } from "../interface/ICommand"

/**
 * When dynamically importing a file into the discord bot for use as a command in Discord via Index.ts loadSetupCommandsIntoCollection,
 * we import an exported class, so we must create a new instance of it so we can use the function inside the class
 */
export type CommandModule = {
    default: new () => ICommand
}