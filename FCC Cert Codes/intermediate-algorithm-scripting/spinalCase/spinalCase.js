function spinalCase(str) {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^ /, "")
    .replace(/_/g, "-")
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .join("-");
}

console.log(spinalCase("This Is Spinal Tap"));
// "this-is-spinal-tap"

console.log(spinalCase("AllThe-small Things"));
// "all-the-small-things"

console.log(spinalCase("thisIsSpinalTap"));
// "this-is-spinal-tap"

