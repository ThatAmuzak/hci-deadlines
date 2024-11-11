import yaml from 'js-yaml';
import rawEntries from "../../data/conferences.yml?raw";

export function getAllEntries() {
    const entries = yaml.load(rawEntries);
    return { entries };
}
