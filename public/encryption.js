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
    let processed_PlainText = []
    _.range(plainText.length).forEach( i => {
        processed_PlainText = [plainText.charCodeAt(i),...processed_PlainText]
    })

    // XOR PlainteText & KeyStream
    let cipherText = []
    _.range(plainText.length).forEach( i => {
        let code = processed_PlainText[i] ^ Key_Stream[i]
        cipherText = [code,...cipherText]
    })


    // Convert cipher to Hexa-Decimal
    let processed_CipherText = ""
    cipherText.forEach( ascii => {
        let hexa = Number(ascii).toString(16).toUpperCase() + " "
        if (hexa.length == 2){
            processed_CipherText += "0" + hexa
        }else{
            processed_CipherText += hexa
        }
    })


    return processed_CipherText.trim()
}


// console.log(`==> Decryption Completed : ${processed_CipherText}\n`)
// ncp.copy(processed_CipherText.trim(), () => {
//     console.log("Successfully copied the encryped text to clipboard.\nPaste text with Ctrl + V")
// })
