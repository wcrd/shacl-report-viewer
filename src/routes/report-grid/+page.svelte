<script>
	import AgGrid from '$lib/components/AgGrid.svelte';
	import { gridStore } from '$lib/stores/grid.svelte.js';

	// TESTING ONLY
	let newOptions = {
		treeData: true,
		getDataPath: (data) => {
			return data.path;
		},
		autoGroupColumnDef: {
			headerName: 'focusNode',
			width: 300,
			sortable: true,
			// comparator: (valueA, valueB, nodeA, nodeB, isDescending) => {
			//     if (nodeA.groupData == nodeB.groupData) return 0;
			//     return (nodeA.groupData > nodeB.groupData) ? 1 : -1;
			// },
			cellRendererParams: {
				suppressCount: false
			},
			filter: 'agTextColumnFilter',
			resizable: true
		},
		defaultColDef: {
			sortable: true,
			flex: 1,
			resizable: true,
			floatingFilter: true
		},
		sideBar: {
			toolPanels: ['filters'],
			defaultToolPanel: null
		}
	};

	let columnDefs = [
		{
			headerName: 'Result Node',
			field: 'id',
			colId: 'id',
			filter: 'agTextColumnFilter',
			initialHide: true
		},
		{ field: 'type', filter: 'agTextColumnFilter' },
		{ field: 'focusNode', filter: 'agTextColumnFilter' },
		{ field: 'detail', filter: 'agTextColumnFilter' },
		{ field: 'resultMessage', filter: 'agTextColumnFilter' },
		{ field: 'sourceShape', filter: 'agTextColumnFilter' },
		{ field: 'value', filter: 'agTextColumnFilter' }
	];

	// TEST DATA
	import test_data from '$lib/data/test_data.json';
	gridStore.data = test_data;
</script>

<div class="container pt-5 mx-auto px-2 h-screen flex flex-col">
	<AgGrid bind:data={gridStore.data} bind:options={newOptions} {columnDefs} />
</div>
