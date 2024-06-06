import { fileHandler } from '$lib/js/fileUtils'

class AppStore {
    file = $state(null);
    shaclReportText = $state("")

    async processTtlInput(fileObj){
        this.file = fileObj
        this.shaclReportText = await fileHandler(this.file) 
    }

    // NOTE: Unused. Old, to remove
    async processFile(){
        this.shaclReportText = await fileHandler(this.file)
    }
}

export const appStore = new AppStore()