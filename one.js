const nextCharacterForNumberString = str => {
    const trimmed = str.trim();
    const number = parseInt(trimmed);
    const nextNumber = number + 1;
    return String.fromCharCode(nextNumber);
}

const result = nextCharacterForNumberString(' 64 ');
console.log(result);

//====================================================

const nextCharacterForNumberString2 = str => {
    return String.fromCharCode(parseInt(str.trim()) + 1);
};
const result2 = nextCharacterForNumberString2(' 64 ');
console.log(result2);

//====================================================

const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
})

const nextCharacterForNumberString3 = str => {
    return Box(str)
        .map(s => s.trim())
        .map(s => parseInt(s))
        .map(i => i + 1)
        .map(s => String.fromCharCode(s))
        .fold(c => c.toLowerCase());
}

const result3 = nextCharacterForNumberString3(' 64 ')
console.log(result3)