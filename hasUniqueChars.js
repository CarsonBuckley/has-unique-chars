// Write your code below

function hasUniqueChars(word) {
    let object = {

    }
    for (i = 0; i < word.length; i++) {
        let check = word[i]
        if (object[check]) {
            return false
        }
        object[check] = true
    }
    return true
    // console.log(object)
}

console.log(hasUniqueChars("abcdefghijklmnopqrstuvwxyz"))
console.log(hasUniqueChars("abcdefghii"))