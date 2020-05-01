document.getElementById("encryptBtn").addEventListener("click",() => {

    let encryptLog = document.getElementById("encryptLog")
    let keyLog = document.getElementById("keyLog")
    let outputCipher = document.getElementById("outputCipher")

    encryptLog.setAttribute("style","display:none")

    const plainText = document.getElementById("plainTextEncrypt").value
    const secretKey = document.getElementById("secretKeyEncrypt").value

    let cipherHex = ""

    if (plainText != "" && secretKey != ""){
        try{
            cipherHex = encryption(plainText,secretKey)
            encryptLog.setAttribute("style","display:block")
            keyLog.innerText = `# Using Key [ ${secretKey} ]`
            outputCipher.innerText = cipherHex
        }catch(err){
            return null
        }
    }else{
        return null
    }

})

document.getElementById("decryptBtn").addEventListener("click",() => {

    let decryptLog = document.getElementById("decryptLog")
    let keyLog = document.getElementById("keyLogDecrypt")
    let outputPlainText = document.getElementById("outputPlainText")

    decryptLog.setAttribute("style","display:none")

    const cipherHexa = document.getElementById("cipherHexaDecrypt").value
    const secretKey = document.getElementById("secretKeyDecrypt").value

    let plainText = ""

    if (cipherHexa != "" && secretKey != ""){
        try{
            plainText = decryption(cipherHexa,secretKey)
            decryptLog.setAttribute("style","display:block")
            keyLog.innerText = `# Using Key [ ${secretKey} ]`
            outputPlainText.innerText = plainText
        }catch(err){
            return null
        }
    }else{
        return null
    }

})