<script lang="ts">
 import type { PageData } from './$types';
 import Entry from '$lib/Entry.svelte';
 
 let { data }: { data: PageData } = $props();
 let year = new Date('2025-01-31').getFullYear();
 let years = [... new Set(data.entries
                              .filter(({ past }) => past)
                              .map(({ jsdeadline }) => jsdeadline.getFullYear()))]
         .sort().reverse()
</script>

<div id="confs">
    <div id="coming_confs">
        <div class="text-xl p-2"><b>Upcoming conference deadlines</b></div>
        <ul>
        {#each data.entries as entry}
        {#if !entry.past }
            <li><Entry entry={entry} /></li>
        {/if}
        {/each}
        </ul>
    </div>

    <div id="past_confs" class="mt-8 border-t border-gray-800">
        <div class="text-xl p-2"><b>Past conferences</b></div>
        {#each years as _year}
            <div class="text-base font-bold pl-2"><b>Deadline in {_year}</b></div>
            <ul>
            {#each data.entries as entry}
            {#if entry.jsdeadline.getFullYear() == _year && entry.past }
                <li><Entry entry={entry} /></li>
            {/if}
            {/each}
            </ul>
        {/each}
    </div>
</div>
