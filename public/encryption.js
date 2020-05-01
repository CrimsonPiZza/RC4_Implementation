// Import Modules

// Initialization
const plainText = "Kill Him Kyle"
const secretKey = "password"

function encryption(plainText,secretKey){
    console.log(`\n==> Encrypting : [ ${plainText} ]`)
    console.log(`==> Using Key  : [ ${secretKey} ]\n`)

    // Generate Key Stream
    const Key_Stream = PRG(KSA(secretKey),plainText.length)

    // Process the Plain Text
    const processed_PlainText = []
    _.range(plainText.length).forEach( i => {
        processed_PlainText.push(plainText.charCodeAt(i))
    })

    // XOR PlainteText & KeyStream
    const cipherText = []
    _.range(plainText.length).forEach( i => {
        cipherText.push( processed_PlainText[i] ^ Key_Stream[i] )
    })


    // Convert cipher to Hexa-Decimal
    let processed_CipherText = ""
    cipherText.forEach( ascii => {
        processed_CipherText += Number(ascii).toString(16).toUpperCase() + " "
    })

    return processed_CipherText.trim()
}


// console.log(`==> Decryption Completed : ${processed_CipherText}\n`)
// ncp.copy(processed_CipherText.trim(), () => {
//     console.log("Successfully copied the encryped text to clipboard.\nPaste text with Ctrl + V")
// })
