<script>
 import countdown from 'countdown';
 import { google, outlook, office365, yahoo, ics } from "calendar-link";
 let { entry } = $props();

 let initCountDownStr = entry.past ? "": countdown(entry.jsdeadline).toString();
 let countdownStr = $state(initCountDownStr);

 if (!entry.past) {
     setInterval(() => {
         countdownStr = countdown(new Date(entry.jsdeadline)).toString();
     }, 1000);
 }

 let opactiy = entry.past ? "opactiy-50": "";
 
</script>

<div id={entry.id} class="border border-gray-200 m-2 rounded-xl shadow-md shadow-gray-800 overflow-hidden text-ellipsis min-h-24 max-h-64 flex flex-col md:flex-row p-3 gap-2 {entry.past ? 'opacity-50': ''}">
    <div class="w-full md:w-1/2">
        <div class="text-base2">
            <span class="font-bold">
                <a title="Conference Website" href="{entry.link}" target="_blank">{entry.title} {entry.year}</a>
            </span>
            <span class="">
                &ZeroWidthSpace;
                {#if entry.paperslink}
                    <a title="Full List of Accepted Papers" href="{entry.paperslink}" target="_blank">📜</a>
                {/if}
            </span>
        </div>
        <div class="text-sm">
            <span class="conf-date">{entry.date}.</span>
            <span class="conf-place">
                <a href="http://maps.google.com/?q={entry.place}">{entry.place}</a>.
            </span>
            {#if entry.note}
                <div class="note">
                    <b>Note:</b> {entry.note}
                </div>
            {/if}
        </div>
    </div>
    <div class="w-full md:w-1/2">
        <div class="timer text-base font-semibold">
            <span>{countdownStr}</span>
        </div>
        <div class="text-sm">
            {#if entry.abstract_deadline}
            <div class="">
                <div><b>Abstract deadline:</b> {entry.abstract_deadline}
                </div>
            </div>
            {/if}
            <div class="">
                <div><b>Deadline:</b>
                    {entry.deadline}{entry.timezone ? ` (${entry.timezone})`: ""}
                </div>
            </div>
            {#if !entry.past}
            <div class="">
                <span>📅</span> 
                <a href={google(entry)}>Google</a> ⋅
                <a href={outlook(entry)}>Outlook</a> ⋅
                <a href={office365(entry)}>Office 365</a> ⋅
                <a href={yahoo(entry)}>yahoo</a> ⋅
                <a href={ics(entry)}>iCal</a>
            </div>
            {/if}
        </div>
    </div>
</div>
