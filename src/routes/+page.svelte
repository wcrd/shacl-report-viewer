<div class="container pt-5 mx-auto px-2 h-screen flex flex-col">
	<div id="headings">
		<h1 class="text-xl font-semibold">SHACL Result Graph Viewer</h1>
		<h6 class="text-lg">Interactive result and source graph viewing </h6>
	</div>
	<hr class="my-2">
	<div id="upload-control" class="flex flex-row flex-nowrap w-full border rounded-md border-slate-200 px-1 py-2">
		<div class="flex flex-row w-1/3 items-center">
			<div class="flex-initial flex">
				<label for="shacl-result-upload" class="font-semibold italic w-max pr-2">Upload SHACL results graph: </label>
			</div>
			<div class="w-full">
				<input 
					type="file"
					id="ttl-upload"
					name="ttl-upload"
					accept=".ttl"
					class="w-full"
					oninput={processInput}
				/>

			</div>
		</div>
	</div>
	<hr class="my-2">
	<div id="page-links" class="flex flex-row w-full gap-x-1">
		<a href="./texteditor" class="border rounded-md border-teal-800 p-1 bg-indigo-400 text-white inline-block">💻 Raw Data</a>
		<a href="./report-grid" class="border rounded-md border-teal-800 p-1 bg-teal-500 text-white inline-block">📄 Report View </a>
	</div>
</div>

<script>
    import { graphStore } from '$lib/stores/graph.svelte.js'
	import { appStore } from '$lib/stores/app.svelte.js'
	import { gridStore } from '$lib/stores/grid.svelte.js'
	import { getAndEnrichTopLevelResults } from '$lib/js/shaclUtils.js'

    // $inspect(graph)

    $effect(()=>{ window._debug = {gs: graphStore, as: appStore, grs: gridStore } })

	async function processInput(event){
		const file = event.target.files[0] || null
		if (file) {
			await appStore.processTtlInput(file)
				.then(console.debug("File processing complete."))
			
			await graphStore.parse(appStore.shaclReportText)
				.then(console.debug("Graph generation complete."))

			// TEMP: putting this here for testing; remove.
			// populate grid with some temp data
			// gridStore.data = graphStore.getResultNodes()

			// debug
			gridStore.data = getAndEnrichTopLevelResults(graphStore.graph)

		}
		
	}

</script>