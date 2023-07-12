//question # 3
const name1 = "John dylan ."; 
console.log(name1.toLowerCase( ))
console.log(name1.toUpperCase( ))
function toTitleCase(name1: string): string {
  return name1.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
const titleCaseName = toTitleCase(name1);
console.log(titleCaseName); 