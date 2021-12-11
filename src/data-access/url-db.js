// Needs URL Model so inject it from index.js
export default function makeUrlDb({ UrlDb }) {
    return Object.freeze({
        findById,
        findOne,
        insert
    })
    //Create insert, findbyid, etc methods and return frozen object
    async function findById({ id }) {
        try {
            const url = await UrlDb.findById(id).exec()
            const { _id, original_url } = url || {};
            // Return an object with properties matching the entity
            return { original_url, short_url: _id } 
        } catch (error) {
            throw new Error(error)
        }
    }

    async function findOne({ original_url }) {
        const url = await UrlDb.findOne({ original_url }).exec()
        // Add || {} bc destructuring fails if url is undefined or null
        const { _id } = url || {};
        if(url) {
            return { original_url, short_url: _id } 
        }
        return null;
    }

    async function insert({ original_url }) {
        const url = new UrlDb({ original_url });
        url.save()
            .then(({ original_url }) => { original_url })
            .catch(err => { throw new Error(err) })
        return {original_url: url.original_url, short_url: url._id}
    }
}