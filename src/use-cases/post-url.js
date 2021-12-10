import makeShorturl from '../shorturl/index.js';

export default function makePostUrl({ urlDbAccess }) {
    // We'll get urlInfo from controller
    return async function postUrl(urlInfo) {
        const validatedUrl = makeShorturl(urlInfo)
        const checkIfPresent = await urlDbAccess.findOne({ originalUrl: validatedUrl.getOriginalUrl() })
        if(!checkIfPresent){
            return urlDbAccess.insert({ originalUrl: validatedUrl.getOriginalUrl() })
        }
        else {
            throw {
                shortUrl: checkIfPresent._id,
                error: new Error('Url already exists')
            }
        }
    }
}   