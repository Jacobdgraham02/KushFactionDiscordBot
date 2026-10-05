import { ICommand } from "../interfaces/ICommand"

export type CommandModule = {
    default: new () => ICommand
}