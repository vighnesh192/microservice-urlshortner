// Injecting validateUrl so that this entity doesn't directly upon Node's dns module
export default function buildMakeShorturl({ validateUrl }) {
    return async function makeShorturl({ original_url, short_url }) {
        try {
            await validateUrl(original_url);
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