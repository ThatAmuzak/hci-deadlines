<script lang="ts">
 import type { PageData } from './$types';
 import Entry from '$lib/Entry.svelte';
 
 let { data }: { data: PageData } = $props();
 const year = new Date().getFullYear();
</script>

<div id="confs">
    <div id="coming_confs">
        <ul>
        {#each data.entries as entry}
        {#if entry.year >= year }
            <Entry entry={entry} />
        {/if}
        {/each}
        </ul>
    </div>
</div>
