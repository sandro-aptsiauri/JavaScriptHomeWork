
const names = ["Anna", "James", "Nick", "Sophie", "David", "Emma"];

while (names.length > 0) {
  
  const removedName = names.shift(); 
  console.log(`Removing ${removedName}`);
}

console.log(names);