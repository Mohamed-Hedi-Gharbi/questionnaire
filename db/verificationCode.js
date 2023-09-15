const VerificationCode = require("../models/VerificationCode");


async function getNumberOfWrongAttempts(ip) {
    const codeProperties = await VerificationCode.findOne({ ip });
    return codeProperties === null ? null : codeProperties.numberOfAttempts;
}

async function deleteCode(ip) {
    await VerificationCode.findOneAndDelete({ ip });
}

async function saveCode({ code, ip }) {
    const isCodeExist = await getCode(ip);
    if(isCodeExist === null){
        
        const makeCode = new VerificationCode({ code, ip });
        await makeCode.save();
        return { message: 'Code saved', error: false };

    } else {
        return { message: 'Already exist', error: true };
    }
}

async function incrementWrongAttempts(id, numberOfAttempts) {
    await VerificationCode.findByIdAndUpdate(id, { numberOfAttempts: numberOfAttempts + 1 });
}

async function getCode(ip) {
    const code = await VerificationCode.findOne({ ip });
    console.log({ code });
    return code;
}

module.exports = {
    getNumberOfWrongAttempts,
    deleteCode,
    saveCode,
    incrementWrongAttempts,
    getCode
}
