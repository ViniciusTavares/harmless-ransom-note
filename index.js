const harmlessRansomNote = (note, magazine) => {
    const nArr = note.toLowerCase().split(' ');
    const mArr = magazine.toLowerCase().split(' ');

    magazineHashTable = {};

    mArr.forEach(item => {
        if (!magazineHashTable[item]) {
            magazineHashTable[item] = 0;
        }

        magazineHashTable[item]++;
    });

    let isNotePossible = true;

    nArr.forEach(item => {
        if (magazineHashTable[item]) {
            magazineHashTable[item]--;

            if (magazineHashTable[item] < 0) {
                isNotePossible = false;
            }
        }
        else isNotePossible = false;
    });

    return isNotePossible;

}

const magazine = 'Taking computer science is a great idea if you are into algorithms, programming, computers and math. Moreover, you will learn to forecast using statistics ';

const resultTrue = harmlessRansomNote('Computers and science are great', magazine);
const resultFalse = harmlessRansomNote('It is not possible to make this note out the given magazine', magazine);

console.log('Should be true', resultTrue);
console.log('Should be false', resultFalse);


