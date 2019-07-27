function count_vowels(word){
    let countVocal = 0;
    const vocal = ['a','i','u','e','o'];
    for (let i = 0; i < word.length; i++) {
        if (vocal.includes(word.charAt(i))){
            countVocal += 1;
        }
    }
    console.log(countVocal)
}

count_vowels('programmer')
count_vowels('hmm..')
count_vowels('anjas maharesi')
