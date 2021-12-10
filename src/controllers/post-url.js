export default function makePostUrlController({ postUrl }) {
    return async function postUrlController(httpRequest) {
        try {
            const url = await postUrl({ original_url: httpRequest.body, short_url: httpRequest.params.id })
            return {
                body: url
            }
        }
        catch(e) {
            throw new Error(e.message);
        }
    }
}