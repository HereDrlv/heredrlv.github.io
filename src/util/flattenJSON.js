// return files list
const flattenJSON = function (json) {
    if (!json)  return [];
    let res = [];
    for (let j of json)
        if (j['type'] == 'directory')
            res.push(...flattenJSON(j['contents']));
        else if (j['type'] == 'file')
            res.push(j)
    return res;
}
export default flattenJSON;