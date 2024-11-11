import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getAllEntries } from '$lib/getAllEntries';

export const load: PageLoad = ({ params }) => {
    return getAllEntries();
};
