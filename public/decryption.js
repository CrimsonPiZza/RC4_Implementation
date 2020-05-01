// Import Modules

// Initialization
// const plainText = "AB AA A1 B9 99 E5 DF AB FD B4 B5 80 60"
// const secretKey = "password"

function decryption(plainText,secretKey){
    console.log(`\n==> Decrypting : [ ${plainText} ]`)
    console.log(`==> Using Key  : [ ${secretKey} ]\n`)

    // Process the Plain Text
    const processed_PlainText = plainText.trim().split(" ").map(item => parseInt(item, 16))

    // Generate Key Stream
    const Key_Stream = PRG(KSA(secretKey),processed_PlainText.length)

    // XOR PlainteText & KeyStream
    const cipherText = []
    _.range(processed_PlainText.length).forEach( i => {
        cipherText.push( processed_PlainText[i] ^ Key_Stream[i] )
    })


    // Convert cipher to Real Text
    let processed_CipherText = ""
    cipherText.forEach( ascii => {
        processed_CipherText += String.fromCharCode(ascii)
    })

    return processed_CipherText
}


// console.log(`==> Decryption Completed : ${processed_CipherText}\n`)
// ncp.copy(processed_CipherText, () => {
//     console.log("Successfully copied the decryped text to clipboard.\nPaste text with Ctrl + V")
// })


