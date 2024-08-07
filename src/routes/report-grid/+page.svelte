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
	gridStore.data = [
		{
			path: ['uri:ex#DB3A04F0-5109-4514-9192-434AA2D34ADE', '_:n3-1'],
			id: '_:n3-1',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#DB3A04F0-5109-4514-9192-434AA2D34ADE',
			resultMessage:
				'"Value does not conform to Shape plV:Zone_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Zone_Atomics',
			detail: '_:n3-2',
			value: 'uri:ex#DB3A04F0-5109-4514-9192-434AA2D34ADE'
		},
		{
			path: ['uri:ex#963AE654-9F33-4847-87AD-44A180A9D186', '_:n3-3'],
			id: '_:n3-3',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#963AE654-9F33-4847-87AD-44A180A9D186',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-4',
			value: 'uri:ex#963AE654-9F33-4847-87AD-44A180A9D186'
		},
		{
			path: ['uri:ex#2CF3AAD7-C8A9-494A-B866-B526815C0E7B', '_:n3-5'],
			id: '_:n3-5',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#2CF3AAD7-C8A9-494A-B866-B526815C0E7B',
			resultMessage:
				'"Value does not conform to Shape plV:PinnedAdjacency_Node_Cardinality_Attributes. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape:
				'https://www.passivelogic.com/schema/EntityValidationShape#PinnedAdjacency_Node_Cardinality',
			detail: '_:n3-10',
			value: 'uri:ex#2CF3AAD7-C8A9-494A-B866-B526815C0E7B'
		},
		{
			path: ['uri:ex#F37BCE5F-C583-4F49-82FC-270002529D3A', '_:n3-12'],
			id: '_:n3-12',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#F37BCE5F-C583-4F49-82FC-270002529D3A',
			resultMessage: '"Less than 1 values on ex:F37BCE5F-C583-4F49-82FC-270002529D3A->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#95E6D323-FA10-42B2-B4A4-AFD423607E3B', '_:n3-13'],
			id: '_:n3-13',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#95E6D323-FA10-42B2-B4A4-AFD423607E3B',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-14',
			value: 'uri:ex#95E6D323-FA10-42B2-B4A4-AFD423607E3B'
		},
		{
			path: ['uri:ex#98D465D8-9513-4A30-93C4-B3104FAB6DAC', '_:n3-15'],
			id: '_:n3-15',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#98D465D8-9513-4A30-93C4-B3104FAB6DAC',
			resultMessage: '"Less than 1 values on ex:98D465D8-9513-4A30-93C4-B3104FAB6DAC->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#D7C0F57A-E02D-4FBC-BC55-0CADC0DA69D5', '_:n3-16'],
			id: '_:n3-16',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#D7C0F57A-E02D-4FBC-BC55-0CADC0DA69D5',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-17',
			value: 'uri:ex#D7C0F57A-E02D-4FBC-BC55-0CADC0DA69D5'
		},
		{
			path: ['uri:ex#4ED91862-62CF-4AC1-AC23-A333F3F73D05', '_:n3-18'],
			id: '_:n3-18',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#4ED91862-62CF-4AC1-AC23-A333F3F73D05',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-19',
			value: 'uri:ex#4ED91862-62CF-4AC1-AC23-A333F3F73D05'
		},
		{
			path: ['uri:ex#A0C672EB-3968-4E51-A578-D10DAA2EC68D', '_:n3-20'],
			id: '_:n3-20',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#A0C672EB-3968-4E51-A578-D10DAA2EC68D',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-21',
			value: 'uri:ex#A0C672EB-3968-4E51-A578-D10DAA2EC68D'
		},
		{
			path: ['uri:ex#91906073-FA68-4A33-8629-A3A1DE80E09D', '_:n3-22'],
			id: '_:n3-22',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#91906073-FA68-4A33-8629-A3A1DE80E09D',
			resultMessage: '"Less than 1 values on ex:91906073-FA68-4A33-8629-A3A1DE80E09D->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#C6A20E34-5B8B-4BAC-9F28-71B38EAEB885', '_:n3-23'],
			id: '_:n3-23',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#C6A20E34-5B8B-4BAC-9F28-71B38EAEB885',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-24',
			value: 'uri:ex#C6A20E34-5B8B-4BAC-9F28-71B38EAEB885'
		},
		{
			path: ['uri:ex#D93DC160-192E-4AD7-A094-68B3EA7065B1', '_:n3-25'],
			id: '_:n3-25',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#D93DC160-192E-4AD7-A094-68B3EA7065B1',
			resultMessage: '"Less than 1 values on ex:D93DC160-192E-4AD7-A094-68B3EA7065B1->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#C2A47813-616D-4927-B7D9-AA059F24B9FB', '_:n3-26'],
			id: '_:n3-26',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#C2A47813-616D-4927-B7D9-AA059F24B9FB',
			resultMessage: '"Less than 1 values on ex:C2A47813-616D-4927-B7D9-AA059F24B9FB->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#7331F64C-D87F-406C-940E-08B6523819F9', '_:n3-27'],
			id: '_:n3-27',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#7331F64C-D87F-406C-940E-08B6523819F9',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-28',
			value: 'uri:ex#7331F64C-D87F-406C-940E-08B6523819F9'
		},
		{
			path: ['uri:ex#F2419A30-3022-409E-AB38-5B75212BBCF2', '_:n3-29'],
			id: '_:n3-29',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#F2419A30-3022-409E-AB38-5B75212BBCF2',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-30',
			value: 'uri:ex#F2419A30-3022-409E-AB38-5B75212BBCF2'
		},
		{
			path: ['uri:ex#EDE510CE-4223-4199-8371-931A9F12AF22', '_:n3-31'],
			id: '_:n3-31',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#EDE510CE-4223-4199-8371-931A9F12AF22',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-32',
			value: 'uri:ex#EDE510CE-4223-4199-8371-931A9F12AF22'
		},
		{
			path: ['uri:ex#212BB4AC-F41C-4AD5-B738-BE3C6886F4CD', '_:n3-33'],
			id: '_:n3-33',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#212BB4AC-F41C-4AD5-B738-BE3C6886F4CD',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-34',
			value: 'uri:ex#212BB4AC-F41C-4AD5-B738-BE3C6886F4CD'
		},
		{
			path: ['uri:ex#40A4C684-5C15-4871-9F3C-70B3E77B3A97', '_:n3-35'],
			id: '_:n3-35',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#40A4C684-5C15-4871-9F3C-70B3E77B3A97',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-36',
			value: 'uri:ex#40A4C684-5C15-4871-9F3C-70B3E77B3A97'
		},
		{
			path: ['uri:ex#442CF638-CD7B-4F08-8BA0-F71967C09581', '_:n3-37'],
			id: '_:n3-37',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#442CF638-CD7B-4F08-8BA0-F71967C09581',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-38',
			value: 'uri:ex#442CF638-CD7B-4F08-8BA0-F71967C09581'
		},
		{
			path: ['uri:ex#9B44733E-F9F8-4C93-A9B5-2E6188E021C4', '_:n3-39'],
			id: '_:n3-39',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#9B44733E-F9F8-4C93-A9B5-2E6188E021C4',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-40',
			value: 'uri:ex#9B44733E-F9F8-4C93-A9B5-2E6188E021C4'
		},
		{
			path: ['uri:ex#DEF27301-FACC-4312-8775-224838850148', '_:n3-41'],
			id: '_:n3-41',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#DEF27301-FACC-4312-8775-224838850148',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-42',
			value: 'uri:ex#DEF27301-FACC-4312-8775-224838850148'
		},
		{
			path: ['uri:ex#6351291B-D137-4C79-82E0-EA614D362039', '_:n3-43'],
			id: '_:n3-43',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#6351291B-D137-4C79-82E0-EA614D362039',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-44',
			value: 'uri:ex#6351291B-D137-4C79-82E0-EA614D362039'
		},
		{
			path: ['uri:ex#230805BA-8A10-4F62-96E9-A5D5108401B9', '_:n3-45'],
			id: '_:n3-45',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#230805BA-8A10-4F62-96E9-A5D5108401B9',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-46',
			value: 'uri:ex#230805BA-8A10-4F62-96E9-A5D5108401B9'
		},
		{
			path: ['uri:ex#FDD42C09-F02C-4848-B933-893E9A734A1E', '_:n3-47'],
			id: '_:n3-47',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#FDD42C09-F02C-4848-B933-893E9A734A1E',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-48',
			value: 'uri:ex#FDD42C09-F02C-4848-B933-893E9A734A1E'
		},
		{
			path: ['uri:ex#4ACBA09A-0B0B-4BAF-BD13-AAE040A8E174', '_:n3-49'],
			id: '_:n3-49',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#4ACBA09A-0B0B-4BAF-BD13-AAE040A8E174',
			resultMessage:
				'"Value does not conform to Shape plV:Zone_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Zone_Atomics',
			detail: '_:n3-50',
			value: 'uri:ex#4ACBA09A-0B0B-4BAF-BD13-AAE040A8E174'
		},
		{
			path: ['uri:ex#89F8F498-933D-442E-8C1C-12A24FFA3298', '_:n3-51'],
			id: '_:n3-51',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#89F8F498-933D-442E-8C1C-12A24FFA3298',
			resultMessage:
				'"Value does not conform to Shape plV:Zone_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Zone_Atomics',
			detail: '_:n3-52',
			value: 'uri:ex#89F8F498-933D-442E-8C1C-12A24FFA3298'
		},
		{
			path: ['uri:ex#5F236212-6A12-4C64-9686-4700605CA09B', '_:n3-53'],
			id: '_:n3-53',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#5F236212-6A12-4C64-9686-4700605CA09B',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-54',
			value: 'uri:ex#5F236212-6A12-4C64-9686-4700605CA09B'
		},
		{
			path: ['uri:ex#6F4A090A-B6AE-489A-A77E-0ED64C68F75D', '_:n3-55'],
			id: '_:n3-55',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#6F4A090A-B6AE-489A-A77E-0ED64C68F75D',
			resultMessage: '"Less than 1 values on ex:6F4A090A-B6AE-489A-A77E-0ED64C68F75D->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#88D01B49-B730-450B-8F78-D2EB5E40FB11', '_:n3-56'],
			id: '_:n3-56',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#88D01B49-B730-450B-8F78-D2EB5E40FB11',
			resultMessage: '"Less than 1 values on ex:88D01B49-B730-450B-8F78-D2EB5E40FB11->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#FC3054E0-0D91-41FE-85F2-061BA6682E77', '_:n3-57'],
			id: '_:n3-57',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#FC3054E0-0D91-41FE-85F2-061BA6682E77',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-58',
			value: 'uri:ex#FC3054E0-0D91-41FE-85F2-061BA6682E77'
		},
		{
			path: ['uri:ex#53AD4181-BA71-4246-BB40-46AA28CAE807', '_:n3-59'],
			id: '_:n3-59',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#53AD4181-BA71-4246-BB40-46AA28CAE807',
			resultMessage: '"Less than 1 values on ex:53AD4181-BA71-4246-BB40-46AA28CAE807->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#69540638-4454-47A7-94EF-EC57C0C895AB', '_:n3-60'],
			id: '_:n3-60',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#69540638-4454-47A7-94EF-EC57C0C895AB',
			resultMessage: '"Less than 1 values on ex:69540638-4454-47A7-94EF-EC57C0C895AB->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#EE927495-69A5-4A56-BA5A-1AACF13251FB', '_:n3-61'],
			id: '_:n3-61',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#EE927495-69A5-4A56-BA5A-1AACF13251FB',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-62',
			value: 'uri:ex#EE927495-69A5-4A56-BA5A-1AACF13251FB'
		},
		{
			path: ['uri:ex#EFF65694-CD69-4DDA-9813-0E1598363BAF', '_:n3-63'],
			id: '_:n3-63',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#EFF65694-CD69-4DDA-9813-0E1598363BAF',
			resultMessage: '"Less than 1 values on ex:EFF65694-CD69-4DDA-9813-0E1598363BAF->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#249376DD-9F8B-449F-AC50-E6411415B7DF', '_:n3-64'],
			id: '_:n3-64',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#249376DD-9F8B-449F-AC50-E6411415B7DF',
			resultMessage: '"Less than 1 values on ex:249376DD-9F8B-449F-AC50-E6411415B7DF->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#6D486AB3-E8C4-404D-BB91-A8CC01F8EB33', '_:n3-65'],
			id: '_:n3-65',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#6D486AB3-E8C4-404D-BB91-A8CC01F8EB33',
			resultMessage:
				'"Value does not conform to Shape plV:Location_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Location_Atomics',
			detail: '_:n3-66',
			value: 'uri:ex#6D486AB3-E8C4-404D-BB91-A8CC01F8EB33'
		},
		{
			path: ['uri:ex#19E1CB19-4225-4772-91DE-42C993645C10', '_:n3-67'],
			id: '_:n3-67',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#19E1CB19-4225-4772-91DE-42C993645C10',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-68',
			value: 'uri:ex#19E1CB19-4225-4772-91DE-42C993645C10'
		},
		{
			path: ['uri:ex#3AE1B8CB-659C-4DD9-882B-6F557FDE8CF2', '_:n3-69'],
			id: '_:n3-69',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#3AE1B8CB-659C-4DD9-882B-6F557FDE8CF2',
			resultMessage: '"Less than 1 values on ex:3AE1B8CB-659C-4DD9-882B-6F557FDE8CF2->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#B902DEE1-9B3E-43E9-8962-20DD0DD66DF2', '_:n3-70'],
			id: '_:n3-70',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#B902DEE1-9B3E-43E9-8962-20DD0DD66DF2',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-71',
			value: 'uri:ex#B902DEE1-9B3E-43E9-8962-20DD0DD66DF2'
		},
		{
			path: ['uri:ex#1619D8A6-6F89-4F93-BDAA-19EDB6F29F43', '_:n3-72'],
			id: '_:n3-72',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#1619D8A6-6F89-4F93-BDAA-19EDB6F29F43',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-73',
			value: 'uri:ex#1619D8A6-6F89-4F93-BDAA-19EDB6F29F43'
		},
		{
			path: ['uri:ex#54834A9C-40A1-4A03-9B00-D53F1C19A61D', '_:n3-74'],
			id: '_:n3-74',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#54834A9C-40A1-4A03-9B00-D53F1C19A61D',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-75',
			value: 'uri:ex#54834A9C-40A1-4A03-9B00-D53F1C19A61D'
		},
		{
			path: ['uri:ex#AF36E71A-6541-4A49-AD8A-8B31BAA3E158', '_:n3-76'],
			id: '_:n3-76',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#AF36E71A-6541-4A49-AD8A-8B31BAA3E158',
			resultMessage: '"Less than 1 values on ex:AF36E71A-6541-4A49-AD8A-8B31BAA3E158->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#C5C8DEC9-0159-46A7-995F-480EC18A0126', '_:n3-77'],
			id: '_:n3-77',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#C5C8DEC9-0159-46A7-995F-480EC18A0126',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-78',
			value: 'uri:ex#C5C8DEC9-0159-46A7-995F-480EC18A0126'
		},
		{
			path: ['uri:ex#5700FF6B-ECC8-4748-966F-466406CF0674', '_:n3-79'],
			id: '_:n3-79',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#5700FF6B-ECC8-4748-966F-466406CF0674',
			resultMessage: '"Less than 1 values on ex:5700FF6B-ECC8-4748-966F-466406CF0674->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#898AF0F6-295B-42EE-B0D0-2844333B0498', '_:n3-80'],
			id: '_:n3-80',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#898AF0F6-295B-42EE-B0D0-2844333B0498',
			resultMessage:
				'"Value does not conform to Shape plV:Location_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Location_Atomics',
			detail: '_:n3-81',
			value: 'uri:ex#898AF0F6-295B-42EE-B0D0-2844333B0498'
		},
		{
			path: ['uri:ex#B9F846F3-31B7-4A7D-8B9E-D1DABBBC2692', '_:n3-82'],
			id: '_:n3-82',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#B9F846F3-31B7-4A7D-8B9E-D1DABBBC2692',
			resultMessage: '"Less than 1 values on ex:B9F846F3-31B7-4A7D-8B9E-D1DABBBC2692->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#2C9FA81C-4215-468A-BC08-55D1DBE0F960', '_:n3-83'],
			id: '_:n3-83',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#2C9FA81C-4215-468A-BC08-55D1DBE0F960',
			resultMessage: '"Less than 1 values on ex:2C9FA81C-4215-468A-BC08-55D1DBE0F960->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#CE0B3D61-8FA7-479B-AC02-DF49801F57D6', '_:n3-84'],
			id: '_:n3-84',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#CE0B3D61-8FA7-479B-AC02-DF49801F57D6',
			resultMessage:
				'"Value does not conform to Shape plV:Zone_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Zone_Atomics',
			detail: '_:n3-85',
			value: 'uri:ex#CE0B3D61-8FA7-479B-AC02-DF49801F57D6'
		},
		{
			path: ['uri:ex#182E9610-75BE-494B-A264-DB8B67D06DFA', '_:n3-86'],
			id: '_:n3-86',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#182E9610-75BE-494B-A264-DB8B67D06DFA',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-87',
			value: 'uri:ex#182E9610-75BE-494B-A264-DB8B67D06DFA'
		},
		{
			path: ['uri:ex#D1528B10-26A2-470A-80D0-E697ADA5677B', '_:n3-88'],
			id: '_:n3-88',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#D1528B10-26A2-470A-80D0-E697ADA5677B',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-89',
			value: 'uri:ex#D1528B10-26A2-470A-80D0-E697ADA5677B'
		},
		{
			path: ['uri:ex#C6DA0323-CD7B-4913-942F-15131B2012F1', '_:n3-90'],
			id: '_:n3-90',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#C6DA0323-CD7B-4913-942F-15131B2012F1',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-91',
			value: 'uri:ex#C6DA0323-CD7B-4913-942F-15131B2012F1'
		},
		{
			path: ['uri:ex#4F5BDD82-7C18-4EC7-8F57-838CC37F1AF8', '_:n3-92'],
			id: '_:n3-92',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#4F5BDD82-7C18-4EC7-8F57-838CC37F1AF8',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-93',
			value: 'uri:ex#4F5BDD82-7C18-4EC7-8F57-838CC37F1AF8'
		},
		{
			path: ['uri:ex#8D893A21-DFD0-4469-8498-F38360C44D56', '_:n3-94'],
			id: '_:n3-94',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#8D893A21-DFD0-4469-8498-F38360C44D56',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-95',
			value: 'uri:ex#8D893A21-DFD0-4469-8498-F38360C44D56'
		},
		{
			path: ['uri:ex#56E038AC-ACDE-4D0A-802F-6535103E00B7', '_:n3-96'],
			id: '_:n3-96',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#56E038AC-ACDE-4D0A-802F-6535103E00B7',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-97',
			value: 'uri:ex#56E038AC-ACDE-4D0A-802F-6535103E00B7'
		},
		{
			path: ['uri:ex#8E9E5081-1FAB-4B42-A532-D6D0019722F3', '_:n3-98'],
			id: '_:n3-98',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#8E9E5081-1FAB-4B42-A532-D6D0019722F3',
			resultMessage: '"Less than 1 values on ex:8E9E5081-1FAB-4B42-A532-D6D0019722F3->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#83C8CF61-E6C8-493A-B460-178E28B64A84', '_:n3-99'],
			id: '_:n3-99',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#83C8CF61-E6C8-493A-B460-178E28B64A84',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-100',
			value: 'uri:ex#83C8CF61-E6C8-493A-B460-178E28B64A84'
		},
		{
			path: ['uri:ex#E29170CA-359C-4F92-A773-3F5A42724312', '_:n3-101'],
			id: '_:n3-101',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#E29170CA-359C-4F92-A773-3F5A42724312',
			resultMessage:
				'"Value does not conform to Shape plV:Zone_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Zone_Atomics',
			detail: '_:n3-102',
			value: 'uri:ex#E29170CA-359C-4F92-A773-3F5A42724312'
		},
		{
			path: ['uri:ex#EBC607F8-4834-4FFA-921C-3C5525618292', '_:n3-103'],
			id: '_:n3-103',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#EBC607F8-4834-4FFA-921C-3C5525618292',
			resultMessage: '"Less than 1 values on ex:EBC607F8-4834-4FFA-921C-3C5525618292->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#C7611EB7-AAAE-4E0E-8F64-09310DFA9056', '_:n3-104'],
			id: '_:n3-104',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#C7611EB7-AAAE-4E0E-8F64-09310DFA9056',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-105',
			value: 'uri:ex#C7611EB7-AAAE-4E0E-8F64-09310DFA9056'
		},
		{
			path: ['uri:ex#C8877281-616B-4F84-B274-4C6D8F5233B9', '_:n3-106'],
			id: '_:n3-106',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#C8877281-616B-4F84-B274-4C6D8F5233B9',
			resultMessage: '"Less than 1 values on ex:C8877281-616B-4F84-B274-4C6D8F5233B9->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		},
		{
			path: ['uri:ex#777858D8-24EB-4595-B6BD-E9E64558F9F6', '_:n3-107'],
			id: '_:n3-107',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#777858D8-24EB-4595-B6BD-E9E64558F9F6',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-108',
			value: 'uri:ex#777858D8-24EB-4595-B6BD-E9E64558F9F6'
		},
		{
			path: ['uri:ex#2775F09B-8AC3-4DB0-B603-EAB435A90CB8', '_:n3-109'],
			id: '_:n3-109',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#2775F09B-8AC3-4DB0-B603-EAB435A90CB8',
			resultMessage:
				'"Value does not conform to Shape plV:Floor_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Floor_Atomics',
			detail: '_:n3-110',
			value: 'uri:ex#2775F09B-8AC3-4DB0-B603-EAB435A90CB8'
		},
		{
			path: ['uri:ex#D8CEC9E2-6DB3-4757-BC75-FD1A74ED39C6', '_:n3-111'],
			id: '_:n3-111',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#D8CEC9E2-6DB3-4757-BC75-FD1A74ED39C6',
			resultMessage:
				'"Value does not conform to Shape plV:Vertex_Node_Cardinality. See details for more information."',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#NodeConstraintComponent',
			sourceShape: 'https://www.passivelogic.com/schema/EntityValidationShape#Vertex_Atomics',
			detail: '_:n3-112',
			value: 'uri:ex#D8CEC9E2-6DB3-4757-BC75-FD1A74ED39C6'
		},
		{
			path: ['uri:ex#C7F08475-6CAA-4652-9201-C0B7402EDB56', '_:n3-113'],
			id: '_:n3-113',
			type: 'http://www.w3.org/ns/shacl#ValidationResult',
			focusNode: 'uri:ex#C7F08475-6CAA-4652-9201-C0B7402EDB56',
			resultMessage: '"Less than 1 values on ex:C7F08475-6CAA-4652-9201-C0B7402EDB56->pl:hasShape"',
			resultPath: 'https://www.passivelogic.com/schema/core#hasShape',
			resultSeverity: 'http://www.w3.org/ns/shacl#Violation',
			sourceConstraintComponent: 'http://www.w3.org/ns/shacl#MinCountConstraintComponent',
			sourceShape: '_:b0_n8b1237bed3344264a4681a4ea0713f1eb40'
		}
	];
</script>

<div class="container pt-5 mx-auto px-2 h-screen flex flex-col">
	<AgGrid bind:data={gridStore.data} bind:options={newOptions} {columnDefs} />
</div>
