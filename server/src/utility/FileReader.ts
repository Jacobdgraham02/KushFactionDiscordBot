import { readdirSync } from "fs";
import * as fs from "node:fs";
import path from "path";
import { ISkill } from "../interface/ISkill";

/**
 * Helper function to enforce that the JSON structure is the same as the interface {@link ISkill}. 
 * We want to manually check all the fields in `value`
 * @param value unverified json data
 * @returns `true` or `false`, depending on if the json data has been validated to conform to our interface structure
 */
function isSkill(value: unknown): value is ISkill {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    const skill = value as Record<string, unknown>;

    return (
        typeof skill.skill_name === "string" &&
        typeof skill.skill_description === "string" &&
        typeof skill.max_level === "number" &&
        Array.isArray(skill.required_items) &&
            skill.required_items.every((item) => typeof item === "string") &&
        Array.isArray(skill.leveling) &&
            skill.leveling.every((level) => typeof level === "string")
    );
}

/**
 * Build file path to existing json files and read through the contents of each one. We use a helper function {@link isSkill} to validate the 
 * contents of these JSON files so they conform to structure of {@link ISkill} 
 * @param file_path_portions array of portions of a full folder path
 * @param file_ending the expected file suffix
 * @param encoding the encoding to use for the file, for example `utf-8`
 * @returns array of {@link ISkill} objects 
 */
export function loadSkillJsonFile(file_path_portions: string[], skill_name: string, file_ending: string, encoding: BufferEncoding): ISkill {
    const folder_path: string = path.join(process.cwd(), ...file_path_portions);

    const file_path: string = path.join(folder_path, `${skill_name}${file_ending}`);

    if (!fs.existsSync) {
        throw new Error(`The JSON file ${skill_name}${file_ending} does not exist`);
    }

    const file_contents = fs.readFileSync(file_path, encoding);

    const parsedJson: ISkill = JSON.parse(file_contents);

    if (!isSkill(parsedJson)) {
        throw new Error(`The parsed JSON is not formatted properly`);
    }

    return parsedJson;
}