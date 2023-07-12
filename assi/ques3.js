//question # 3
var name1 = "John dylan .";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
function toTitleCase(name1) {
    return name1.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
var titleCaseName = toTitleCase(name1);
console.log(titleCaseName);
