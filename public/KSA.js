
function KSA(key){

    const Key_Len = key.length
    let S = _.range(256)
    let j = 0

    _.range(256).forEach(i => {

        // Set up J
        j = ( j + S[i] + key.charCodeAt( i % Key_Len ) ) % Key_Len

        // Swap S[i] & S[j]
        let temp = S[i]
        S[i] = S[j]
        S[j] = temp

    });

    return S
}