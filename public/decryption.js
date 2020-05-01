// Import Modules

function decryption(plainText,secretKey){
    console.log(`\n==> Decrypting : [ ${plainText} ]`)
    console.log(`==> Using Key  : [ ${secretKey} ]\n`)

    // Process the Plain Text
    const processed_PlainText = plainText.trim().split(" ").map(item => {
        console.log(item + " : " + item.length)
        return(parseInt(item, 16))
    })
    console.log("Decrypted Decimal : " + processed_PlainText)
    console.log("Decrypt HexaDecimal : " + plainText.trim().split(" "))
    // Generate Key Stream
    const Key_Stream = PRG(KSA(secretKey),processed_PlainText.length)
    console.log("Decryption KSA : " + KSA(secretKey))
    console.log("Decrypt Key Stream Decimal : " + Key_Stream)
    
    // XOR PlainteText & KeyStream
    let cipherText = []
    _.range(Key_Stream.length).forEach( i => {
        console.log("for i = " + i)
        console.log("KS : " +Key_Stream[i] + " XOR " + "PPT : " + processed_PlainText[processed_PlainText.length - i - 1])
        let code = processed_PlainText[processed_PlainText.length - i - 1] ^ Key_Stream[i]
        console.log("Turn " + i + ", Code = " + code)
        cipherText = [code,...cipherText]
    })
    console.log("Decrypted Cipher : " + cipherText)


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


