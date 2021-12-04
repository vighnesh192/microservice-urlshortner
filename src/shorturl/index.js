import buildMakeShorturl from "./shorturl.js";
import dns from 'dns';

const validateUrl = (url) => {
    dns.lookup(url, (err, value) => {
        if(err) {
            throw new Error(err)
        }
        return value;
    })
}

const makeShorturl = buildMakeShorturl({ validateUrl });

export default makeShorturl;