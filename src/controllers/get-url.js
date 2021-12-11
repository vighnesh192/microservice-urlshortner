export default function makeGetUrlController({ getUrl }) {
    return async function getUrlController(httpRequest) {
        try {
            const url = await getUrl({ id: httpRequest.params.id })
            return {
                body: {
                    ...url,
                    method: "GET"
                }
            }
        } catch (e) {
            throw new Error(e.message);        
        }
    }
}