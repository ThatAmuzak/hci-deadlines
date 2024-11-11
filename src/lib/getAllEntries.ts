import yaml from 'js-yaml';
import rawEntries from "../../data/conferences.yml?raw";

export function getAllEntries() {
    let now:Date = new Date();
    let entries = yaml.load(rawEntries)
                      .map((entry:any) => ({
                          ...entry,
                          jsdeadline: new Date(entry.deadline),
                          past: new Date(entry.deadline) < now,
                          location: entry.place
                      }))
                      .sort((a:any, b:any) => a.jsdeadline < b.jsdeadline ? -1: 1);
    return { entries };
}
