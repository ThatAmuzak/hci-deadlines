<script>
 let { entry } = $props();
</script>

<div id={entry.id} class="">
    <div class="row">
        <div class="">
            <span class="">
            {#if entry.full_name}
	        {entry.full_name}
            {:else}
                 Deadline
            {/if}
                 Details
            </span>
            <span class="">
                <a title="Conference Website" href="{entry.link}" target="_blank">O</a>
                &ZeroWidthSpace;
                {#if entry.paperslink}
                    <a title="Full List of Accepted Papers" href="{entry.paperslink}" target="_blank">F</a>
                {/if}
            </span>
        </div>
        <div class="">
            <span class="timer">TODO</span>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-sm-6">
            <div class="meta">
                <span class="conf-date">{entry.date}.</span>
                <span class="conf-place">
                    <a href="http://maps.google.com/?q={entry.place}">{entry.place}</a>.
                </span>
            </div>
              {#if entry.note}
                  <div class="note">
                      <b>Note: </b>{entry.note}
                  </div>
              {/if}
        </div>
        <div class="col-12 col-sm-6">
              {#if entry.abstract_deadline}
                  <div class="deadline">
                      <div><b>Abstract deadline:</b> TODO
                      </div>
                  </div>
              {/if}
              <div class="deadline">
                  <div><b>Deadline:</b>
                      <span class="deadline-time"></span> TODO
                  </div>
              </div>
              <div class="calendar"></div>
        </div>
    </div>
</div>
