import buildMakeShorturl from "./shorturl.js";
import dns from 'dns';
// import urlparser from 'url';

const validateUrl = (url) => {
    return new Promise((resolve, reject) => {
        let nodeUrl = new URL(url);
        if (nodeUrl.protocol === "ftp:") {
            reject('Invalid URL');
        }
        dns.lookup(nodeUrl.hostname, (err, value) => {
            if(err) {
                console.log("DNS Error", err)
                reject('Invalid URL');
            }
            resolve(value);
        })
    })
}

const makeShorturl = buildMakeShorturl({ validateUrl });

export default makeShorturl;