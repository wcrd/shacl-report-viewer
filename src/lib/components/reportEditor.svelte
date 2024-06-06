<div class ="h-full w-full">
    <h1>Report Editor</h1>
    <!-- <div bind:innerText={appStore.shaclReportText} contenteditable> </div>-->
        <div class="h-full w-full">
            <textarea class="w-full h-full" value={appStore.shaclReportText} oninput={handleChange} spellcheck="false"></textarea>
        </div>
</div>

<script>
    import { appStore } from '$lib/stores/app.svelte.js'

    let timer;

    function handleChange(event){
        clearTimeout(timer);
		timer = setTimeout(() => {
			appStore.shaclReportText = event.target.value;
            console.debug("Set new value of SHACL REPORT TEXT in store.")
		}, 1000);
        // console.debug(event.target.value)
    }
</script>