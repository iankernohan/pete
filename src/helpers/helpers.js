export function formatName(nameToFormat) {
  if (nameToFormat.includes("_and_")) {
    nameToFormat = nameToFormat.replace("_and_", " & ");
  }
  let newName = "";
  let prev = " ";
  let curr = "";
  for (let i = 0; i < nameToFormat.length; i++) {
    curr = nameToFormat[i];
    if (curr == "_") {
      curr = " ";
    } else if (prev == " ") {
      curr = curr.toUpperCase();
    }
    newName = newName + curr;
    prev = curr;
  }
  return newName;
}
