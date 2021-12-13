// Injecting validateUrl so that this entity doesn't directly upon Node's dns module
export default function buildMakeShorturl({ validateUrl }) {
    return async function makeShorturl({ original_url, short_url }) {
        original_url = original_url.replace('https://', '')
        try {
            await validateUrl(original_url);
        } catch (error) {
            throw error;
        }
        return Object.freeze({
            getOriginalUrl: () => original_url,
            getShortUrl: () => short_url
        })
    }
}