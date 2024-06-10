<div class ="h-full w-full flex flex-col">
    <h1 class="font-semibold text-lg">Report Editor</h1>
    <hr />
    <div class="h-full w-full pt-2">
        <textarea class="w-full h-full bg-slate-50" value={appStore.shaclReportText} oninput={handleChange} spellcheck="false"></textarea>
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