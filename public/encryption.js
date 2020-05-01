// Import Modules


function encryption(plainText,secretKey){
    console.log(`\n==> Encrypting : [ ${plainText} ]`)
    console.log(`==> Using Key  : [ ${secretKey} ]\n`)

    // Generate Key Stream
    const Key_Stream = PRG(KSA(secretKey),plainText.length)
    console.log("Encryption KSA : " + KSA(secretKey))
    console.log("Encrypt Key Stream Decimal : " + Key_Stream)

    // Process the Plain Text
    let processed_PlainText = []
    _.range(plainText.length).forEach( i => {
        processed_PlainText = [plainText.charCodeAt(i),...processed_PlainText]
    })
    console.log("Encrypt PlainText Decimal : " + processed_PlainText)

    // XOR PlainteText & KeyStream
    let cipherText = []
    _.range(processed_PlainText.length).forEach( i => {
        console.log("for i = " + i)
        console.log("KS : " + Key_Stream[i] + " XOR " + "PPT : " + processed_PlainText[i])
        let code = processed_PlainText[i] ^ Key_Stream[i]
        console.log("Turn " + i + ", Code = " + code)
        cipherText = [code,...cipherText]
    })
    console.log("Encrypt : " + cipherText)


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
