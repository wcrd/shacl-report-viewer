async function fileHandler(file){
    const text = await readFileAsync(file)
    return text
};

// Helper function to read async
function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsText(file);
    })
}