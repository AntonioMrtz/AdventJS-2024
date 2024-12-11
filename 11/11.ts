function decodeFilename(filename: string): string {
  const pattern = /(?<=_)[^_].*/;
  const match = filename.match(pattern);

  const stripExtension = (filename: string): string => {
    return filename.replace(/\.[^.]*$/, "");
  };

  if (!match) {
    throw new Error("Filename not detected");
  }

  return stripExtension(match[0]);
}

console.log(decodeFilename("2023122512345678_sleighDesign.png.grinchwa"));
// ➞ "sleighDesign.png"

console.log(decodeFilename("42_chimney_dimensions.pdf.hack2023"));
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename("987654321_elf-roster.csv.tempfile"));
// ➞ "elf-roster.csv"
