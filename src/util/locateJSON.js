// return files[] json of specific directory.
const locateJSON = function(dirSequence, json, i = 0) {
    for (let j of json)
        if (j['type'] == 'directory' && j['name'] == dirSequence[i]) 
            return (i < dirSequence.length - 1) ? 
                locateJSON(dirSequence, j['contents'], i + 1) :
                j['contents'];
}

export default locateJSON;