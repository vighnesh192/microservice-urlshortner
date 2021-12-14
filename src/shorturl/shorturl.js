// Injecting validateUrl so that this entity doesn't directly upon Node's dns module
export default function buildMakeShorturl({ validateUrl }) {
    return async function makeShorturl({ original_url, short_url }) {
        original_url = original_url.replace('https://', '')
        original_url = original_url.replace('ftp:/', '')
        let clone = original_url
        clone.splice(clone.indexOf('/'));
        console.log(clone+" && "+original_url)
        try {
            await validateUrl(clone);
        } catch (error) {
            console.log("DNS ERROR:-", error)
            throw error;
        }
        return Object.freeze({
            getOriginalUrl: () => original_url,
            getShortUrl: () => short_url
        })
    }
}