import yaml from 'js-yaml';

export async function getAllEntries() {
    let now:Date = new Date();
    const allFiles = import.meta.glob('/conf-database/conferences/*.yml' , {
        query: '?raw',
        import: 'default',
    });

    let entries = Promise.all(
        Object.entries(allFiles)
            .map(async ([path, resolver]) => {
                const content = await resolver();
                return yaml.load(content);
            })
    ).then(entries => entries
        .flat()
        .map((entry: any) => ({
            ...entry,
            jsdeadline: new Date(entry.deadline + (entry.timezone ? entry.timezone.replace("UTC", ""): "")),
            past: new Date(entry.deadline) < now,
            location: entry.place
        }))
        .sort((a: any, b: any) => a.jsdeadline < b.jsdeadline ? -1 : 1));
    return { entries };
}
