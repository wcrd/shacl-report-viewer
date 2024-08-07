## TODO list

- [x] Add handler to file upload: process TTL -> store raw text
- [x] THEN parse text and populate graph store
- [x] Add raw result graph viewer (and editor)
- [ ] Update to monaco or high speed editor with syntax and code lines
- [ ] Add Tree Data store and methods to process graph to generate table data. Call this on update/upload.
- [x] Add ag grid viewer section
- [ ] UPDATE
  - [ ] AgGrid to use Svelte 5 - need to figure out this new events system...
  - [ ] AgGrid update - I'm using the old version syntax and it looks like some stuff has changed.
- [ ] Data is in, now just need to recurse data for detail and swap to a tree view.
- [ ] EnrichNode only writes a single value for "detail" (and maybe other fields). Not important for now, but this should write a list where multiple values exist.



## Design Plan

- Upload SHACL Report
  - Parse TTL into N3 store
  - Parse into Text Store
- Provide Editor Interface
  - Two way binding to text store
  - On change, need to reparse N3
- Provide tree result view
  - parse graph and generate tree data for ag-grid; keep in store.
    - Format:
      - Result -> Detail*


## Next Time
Past:
- Implemented tree data generation
Next:
- Update functions to enrich using source data graph
- Update grid to show extra info from enrichment