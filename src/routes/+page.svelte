<script lang="ts">
 import type { PageData } from './$types';
 import Entry from '$lib/Entry.svelte';
 
 let { data }: { data: PageData } = $props();
 const year = new Date().getFullYear();
</script>

<div id="confs">
    <div id="coming_confs">
        <div class="text-xl p-2"><b>Upcoming conferences</b></div>
        <ul>
        {#each data.entries as entry}
        {#if entry.year >= year && !entry.past }
            <Entry entry={entry} />
        {/if}
        {/each}
        </ul>
    </div>

    <div id="past_confs" class="mt-8 border-t border-gray-800">
        <div class="text-xl p-2"><b>Past conferences</b></div>
        <ul>
        {#each data.entries as entry}
        {#if entry.year >= year && entry.past }
            <Entry entry={entry} />
        {/if}
        {/each}
        </ul>
    </div>
</div>
