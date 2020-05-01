
function PRG(S_Vector,n){
    i = 0
    j = 0
    key_stream = []

    while (n > 0){
        // Decrease iteration count
        n -= 1

        // Set up i & j
        i = ( i + 1 ) % 256
        j = ( j + S_Vector[i] ) % 256

        // Swap S[i] & S[j]
        let temp = S_Vector[i]
        S_Vector[i] = S_Vector[j]
        S_Vector[j] = temp

        //Generate key stream
        let code = S_Vector[ ( S_Vector[i] + S_Vector[j] ) % 256 ]
        key_stream = [ code,...key_stream ]
    }

    return key_stream
}