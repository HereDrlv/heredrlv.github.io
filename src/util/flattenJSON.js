const flattenJSON = function (json) {
    if (!json)                 return [];
    if (json instanceof Array) return json;

    let res = [];
    for (let key in json)
        res.push(...flattenJSON(json[key]));
    return res;
}
export default flattenJSON;