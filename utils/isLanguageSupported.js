module.exports = function isLanguageSupported(language) {
    try {
        const supportedLanguage = ['javascript', 'php', 'cs'];
        let index = 0;
        let length = supportedLanguage.length;
        
        while(index < length) {
            if(language === supportedLanguage[index]){
                return true;
            }
            ++index;
        }
    
        return false;

    } catch (error) {
        throw new Error(error);
    }
}