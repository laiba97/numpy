//question # 15
const guestList = [" AlbertEinstein", 
"Mahira",
"LeonardoDaCaprio"];
for (const guest in guestList) {
    console.log(guestList[guest]);
}
console.log("As Mahira send a word that she could not make it to dinner sadly.")
  
const unableToAttend = "Mahira";
const newInvitee = "Imran Khan";

const updatedGuestList = [];

for (const guest of guestList) {
  if (guest === unableToAttend) {
    updatedGuestList.push(newInvitee);
  } else {
    updatedGuestList.push(guest);
  }
}
for (const guest of updatedGuestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
  }
