import flattenJSON from "./flattenJSON";

function getUrlByFilename(filename, dirIndex) {
    for (let file of flattenJSON(dirIndex))
        if (file.name.endsWith(filename))
            return file.name
}
export default getUrlByFilename;