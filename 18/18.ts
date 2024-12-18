function findInAgenda(
  agenda: string,
  phone: string,
): { name: string; address: string } | null {
  const splittedAgenda = agenda.split("\n");

  if (!splittedAgenda) return null;

  const namePattern: RegExp = /<([^<>]+)>/;
  const phonePattern: RegExp = /\+[\d+|-]+/;
  const replaceAngleBrackets = /[<>]/g;

  let phoneRegexResult: RegExpMatchArray | null;
  let nameRegexResult: RegExpMatchArray | null;

  let line = "";

  let phoneMatched = "";

  let nameMatched = "";
  let adressMatched = "";

  for (let i = 0; i < splittedAgenda.length; i++) {
    line = splittedAgenda[i];
    phoneRegexResult = line.match(phonePattern);
    nameRegexResult = line.match(namePattern);

    if (!phoneRegexResult || !nameRegexResult) {
      return null;
    }

    if (phoneRegexResult[0].includes(phone)) {
      if (phoneMatched) {
        return null;
      }
      phoneMatched = phoneRegexResult[0];
      nameMatched = nameRegexResult[0];
      adressMatched = line
        .replace(phonePattern, "")
        .replace(namePattern, "")
        .trimStart()
        .trimEnd();
    }
  }

  if (!nameMatched || !adressMatched) return null;

  return {
    name: nameMatched.replace(replaceAngleBrackets, ""),
    address: adressMatched,
  };
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

console.log(findInAgenda(agenda, "34-600-123-456"));
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, "600-987"));
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, "111"));
// null
// Explanation: No results

console.log(findInAgenda(agenda, "1"));
// null
// Explanation: Too many results
