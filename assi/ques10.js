//question # 10
var name1 = "John dylan .";
//first we set a name into variable name1
console.log(name1.toLowerCase());
//above command is to convert all alphabets into small letters or lower case
console.log(name1.toUpperCase());
//above command is to convert all alphabets into capital letters
function toTitleCase(name1) {
    return name1.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
var titleCaseName = toTitleCase(name1);
console.log(titleCaseName);
