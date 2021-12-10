export default function makeGetUrlController({ getUrl }) {
    return async function getUrlController(httpRequest) {
        try {
            const url = getUrl({ id: httpRequest.params.id })
            return {
                body: url
            }
        } catch (e) {
            throw new Error(e.message);        
        }
    }
}