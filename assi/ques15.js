//question # 15
var guestList = [" AlbertEinstein",
    "Mahira",
    "LeonardoDaCaprio"];
for (var guest in guestList) {
    console.log(guestList[guest]);
}
console.log("As Mahira send a word that she could not make it to dinner sadly.");
var unableToAttend = "Mahira";
var newInvitee = "Imran Khan";
var updatedGuestList = [];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    if (guest === unableToAttend) {
        updatedGuestList.push(newInvitee);
    }
    else {
        updatedGuestList.push(guest);
    }
}
for (var _a = 0, updatedGuestList_1 = updatedGuestList; _a < updatedGuestList_1.length; _a++) {
    var guest = updatedGuestList_1[_a];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence."));
}
