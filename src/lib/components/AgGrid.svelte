<script>
    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import { Grid } from "ag-grid-community";
    import 'ag-grid-enterprise'
    import "ag-grid-community/styles/ag-grid.css";
    import "ag-grid-community/styles/ag-theme-alpine.css";
  
    const dispatch = createEventDispatcher();
  
    export let columnDefs;
    export let data;
    export let theme = "alpine";
    export let options = {
      defaultColDef: {
        flex: 1,
        minWidth: 150,
        filter: true,
      },
      suppressFieldDotNotation: true,
      rowSelection: "multiple",
    };
    export let loading = false;
  
    let ref;
    let grid;
    export let api;

  
    const onSelectionChanged = () => {
      const selectedRows = api.getSelectedRows();
      dispatch("select", selectedRows);
    };
  
    const onCellValueChanged = (e) => {
      data[e.rowIndex] = e.data;
      dispatch("update", { row: e.rowIndex, data: e.data });
    };
  
    const onGridReady = () => {
      api = grid.gridOptions.api;
      if (loading) api.showLoadingOverlay();
    };
  
    const updateData = (data) => {
      if (grid && api) {
        api.setRowData(data);
        api.setColumnDefs(columnDefs);
      }
    };
  
    onMount(() => {
      grid = new Grid(ref, {
        ...options,
        columnDefs,
        rowData: data,
        onGridReady,
        onCellValueChanged,
        onSelectionChanged,
      });
    });
  
    onDestroy(() => {
      if (grid) {
        grid.destroy();
      }
    });
  
    $: updateData(data);
</script>
  
<style>
    .ag-grid-component-local {
      width: 100%;
      height: var(--grid-height, 95%);
    }
</style>
  
<div class={`ag-grid-component-local ${$$restProps.class}`}>
    <div
      bind:this={ref}
      style="height: 100%; width:100%"
      class="ag-theme-{theme}" 
    />
</div>