//question # 13
var carBrands = ["toyota", "honda", "swift", "wagonar"];
//for (const car of my_fav) {
//  console.log(`I would like to own ${my_fav} one day.`);
//}
for (var _i = 0, carBrands_1 = carBrands; _i < carBrands_1.length; _i++) {
    var brand = carBrands_1[_i];
    console.log("I would like to own a ".concat(brand, " car."));
}
