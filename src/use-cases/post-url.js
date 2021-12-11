import makeShorturl from '../shorturl/index.js';

export default function makePostUrl({ urlDbAccess }) {
    // We'll get urlInfo from controller
    return async function postUrl(urlInfo) {
        try {
            const validatedUrl = makeShorturl(urlInfo)
            const checkIfPresent = await urlDbAccess.findOne({ original_url: validatedUrl.getOriginalUrl() })
            if(!checkIfPresent){
                const result = await urlDbAccess.insert({ original_url: validatedUrl.getOriginalUrl() })
                return result;
            }
            else {
                throw {
                    shortUrl: checkIfPresent.short_url,
                    error: 'Url already exists'
                }
            }
        }
        catch(e) {
            throw e
        }
    }
}   