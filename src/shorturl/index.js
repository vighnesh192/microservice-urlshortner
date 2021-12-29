import buildMakeShorturl from "./shorturl.js";
import dns from 'dns';
import urlparser from 'url';

const validateUrl = (url) => {
    return new Promise((resolve, reject) => {
        dns.lookup(urlparser.parse(url).hostname, (err, value) => {
            if(err) {
                console.log("DNS Error", err)
                reject('invalid url');
            }
            resolve(value);
        })
    })
}

const makeShorturl = buildMakeShorturl({ validateUrl });

export default makeShorturl;