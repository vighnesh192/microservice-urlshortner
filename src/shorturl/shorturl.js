// Injecting validateUrl so that this entity doesn't directly upon Node's dns module
export default function buildMakeShorturl({ validateUrl }) {
    return function makeShorturl({ original_url, short_url }) {
        try {
            const validatedUrl = validateUrl(original_url);
            return { 
                original_url: validatedUrl, short_url
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}