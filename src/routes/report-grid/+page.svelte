
<div class="container pt-5 mx-auto px-2 h-screen flex flex-col">
    <AgGrid bind:data={gridStore.data} bind:options={newOptions} {columnDefs}/>
</div>

<script>
    import AgGrid from "$lib/components/AgGrid.svelte"
    import { gridStore } from "$lib/stores/grid.svelte.js"


    // TESTING ONLY
    let newOptions = {
        // treeData: true,
        // getDataPath: (data) => { return data.path },
        // autoGroupColumnDef: {
        //         headerName: "Entity",
        //         width: 300,
        //         sortable: true,
        //         // comparator: (valueA, valueB, nodeA, nodeB, isDescending) => {
        //         //     if (nodeA.groupData == nodeB.groupData) return 0;
        //         //     return (nodeA.groupData > nodeB.groupData) ? 1 : -1;
        //         // },
        //         cellRendererParams: {
        //             suppressCount: true,
        //             innerRenderer: labelGetter
        //         },
        //         // filter: 'agTextColumnFilter',
        //         resizable: true
        // },
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
    }

    let columnDefs = [
        { headerName: "Result Node", field: "id", colId: "id", filter: 'agTextColumnFilter'}
    ]
</script>