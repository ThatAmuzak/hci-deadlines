import type { PageLoad } from './$types';
import { getAllEntries } from '$lib/getAllEntries';

export const load: PageLoad = ({}) => {
    return getAllEntries().then(({entries}) => {
        return {
            entries: entries,
            years: entries.then(entries => {
                return [... new Set(entries
                    .filter(({ past }) => past)
                    .map(({ jsdeadline }) => jsdeadline.getFullYear()))].sort().reverse();
        })}
    });
};
