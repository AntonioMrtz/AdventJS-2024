function compile(instructions: string[]): number | undefined {
  const registerData = new Map<string, number>();

  const getValueFromInstruction = (value: string): number => {
    const parsedNumber = parseInt(value);

    if (isNaN(parsedNumber)) {
      const storedValue = registerData.get(value);
      if (storedValue !== undefined) {
        return storedValue;
      }
      return 0;
    }

    return parsedNumber;
  };

  for (let i = 0; i < instructions.length; i++) {
    let splittedCommand = instructions[i].split(" ");

    switch (splittedCommand[0]) {
      case "MOV":
        let value = getValueFromInstruction(splittedCommand[1]);
        registerData.set(splittedCommand[2], value);
        break;

      case "INC":
        let registerValueInc = registerData.get(splittedCommand[1]);
        if (registerValueInc !== undefined) {
          registerData.set(splittedCommand[1], registerValueInc + 1);
        } else {
          registerData.set(splittedCommand[1], 1);
        }
        break;
      case "DEC":
        let registerValueDec = registerData.get(splittedCommand[1]);
        if (registerValueDec !== undefined) {
          registerData.set(splittedCommand[1], registerValueDec - 1);
        } else {
          registerData.set(splittedCommand[1], 1);
        }
        break;
      case "JMP":
        if (getValueFromInstruction(splittedCommand[1]) === 0) {
          i = parseInt(splittedCommand[2]) - 1;
        }
        break;

      default:
        console.error(`Unhandled instruction ${instructions[i]}`);
        break;
    }
  }

  return registerData.get("A");
}

const instructions = [
  "MOV -1 C", // copies -1 to register 'C',
  "INC C", // increments the value of register 'C'
  "JMP C 1", // jumps to the instruction at index 1 if 'C' is 0
  "MOV C A", // copies register 'C' to register 'A',
  "INC A", // increments the value of register 'A'
];

console.log(compile(instructions)); // -> 2
