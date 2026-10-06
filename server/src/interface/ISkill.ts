/**
 * When importing a json file from json/skills/..., this interface will enforce that the json read from that file contains 
 * all of the below fields
 */
export interface ISkill {
    skill_name: string;
    skill_description: string;
    max_level: number;
    required_items: string[];
    leveling: string[];
}