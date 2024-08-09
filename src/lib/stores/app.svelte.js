import { fileHandler } from '$lib/js/fileUtils'

class AppStore {
    file = $state(null);
    shaclReportText = $state("")

    dataGraphFile = $state(null)
    dataGraphText = $state("")

    async processSHACLTtlInput(fileObj) {
        this.file = fileObj
        this.shaclReportText = await fileHandler(this.file)

    }

    // TODO: Make these two methods 1; should be generic.
    async processDataGraphTtlInput(fileObj) {
        this.dataGraphFile = fileObj
        this.dataGraphText = await fileHandler(this.dataGraphFile)
    }

    // NOTE: Unused. Old, to remove
    async processFile() {
        this.shaclReportText = await fileHandler(this.file)
    }
}

export const appStore = new AppStore()