<script>
	import { graphStore, dataGraphStore } from '$lib/stores/graph.svelte.js';
	import { appStore } from '$lib/stores/app.svelte.js';
	import { gridStore } from '$lib/stores/grid.svelte.js';
	import { generateValidationResultTreeData } from '$lib/js/shaclUtils.js';
	import { enrichShaclReportFromDataGraph } from '$lib/js/dataGraphUtils.js';

	// $inspect(graph)

	$effect(() => {
		window._debug = { gs: graphStore, dgs: dataGraphStore, as: appStore, grs: gridStore };
	});

	async function processInput(event) {
		const file = event.target.files[0] || null;
		if (file) {
			await appStore.processSHACLTtlInput(file).then(console.debug('File processing complete.'));

			await graphStore
				.parse(appStore.shaclReportText)
				.then(console.debug('Graph generation complete.'));

			// TEMP: putting this here for testing; remove.
			// populate grid with some temp data
			// gridStore.data = graphStore.getResultNodes()

			// debug
			// gridStore.data = getAndEnrichTopLevelResults(graphStore.graph) // OLD, simple top level only method
			gridStore.data = generateValidationResultTreeData(graphStore.graph);
		}
	}

	async function processDataGraphInput(event) {
		const file = event.target.files[0] || null;
		if (file) {
			await appStore
				.processDataGraphTtlInput(file)
				.then(console.debug('File processing complete.'));

			await dataGraphStore
				.parse(appStore.dataGraphText)
				.then(console.debug('Graph generation complete.'));

			// TEMP: putting this here for testing; remove.
			// populate grid with some temp data
			// gridStore.data = graphStore.getResultNodes()

			// debug
			// manually add enriched data to the graph store
			const enrichment = enrichShaclReportFromDataGraph(gridStore.data, dataGraphStore.graph);
			console.debug(enrichment);
			gridStore.data.forEach((row, idx) => {
				Object.assign(gridStore.data[idx], enrichment[row.id]);
			});
		}
	}

	// =======================================================
	// DEBUG STUFF

	// =======================================================
</script>

<div class="container pt-5 mx-auto px-2 h-screen flex flex-col">
	<div id="headings">
		<h1 class="text-xl font-semibold">SHACL Result Graph Viewer</h1>
		<h6 class="text-lg">Interactive result and source graph viewing</h6>
	</div>
	<hr class="my-2" />
	<div
		id="upload-control"
		class="flex flex-row flex-nowrap w-full border rounded-md border-slate-200 px-1 py-2"
	>
		<div class="flex flex-row w-1/3 items-center">
			<div class="flex-initial flex">
				<label for="shacl-result-upload" class="font-semibold italic w-max pr-2"
					>Upload SHACL results graph:
				</label>
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
		<div class="flex flex-row w-1/3 items-center">
			<div class="flex-initial flex">
				<label for="data-graph-upload" class="font-semibold italic w-max pr-2"
					>Upload data graph (optional):
				</label>
			</div>
			<div class="w-full">
				<input
					type="file"
					id="data-graph-ttl-upload"
					name="data-graph-ttl-upload"
					accept=".ttl"
					class="w-full"
					oninput={processDataGraphInput}
				/>
			</div>
		</div>
	</div>
	<hr class="my-2" />
	<div id="page-links" class="flex flex-row w-full gap-x-1">
		<a
			href="./texteditor"
			class="border rounded-md border-teal-800 p-1 bg-indigo-400 text-white inline-block"
			>💻 Raw Data</a
		>
		<a
			href="./report-grid"
			class="border rounded-md border-teal-800 p-1 bg-teal-500 text-white inline-block"
			>📄 Report View
		</a>
	</div>
</div>
