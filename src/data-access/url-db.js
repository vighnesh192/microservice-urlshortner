// Needs URL Model so inject it from index.js
export default function makeUrlDb({ UrlDb }) {
    return Object.freeze({
        findById,
        findOne,
        insert
    })
    //Create insert, findbyid, etc methods and return frozen object
    async function findById({ id }) {
        const url = await UrlDb.findById(id).exec()
        const { _id } = url || {};
        // Return an object with properties matching the entity
        return { original_url, short_url: _id } 
    }

    async function findOne({ original_url }) {
        const url = await UrlDb.findOne(original_url).exec()
        // Add || {} bc destructuring fails if url is undefined or null
        const { _id } = url || {};
        return { original_url, short_url: _id } 
    }

    async function insert({ original_url }) {
        const url = new UrlDb({ original_url });
        url.save()
            .then(({ original_url }) => { original_url })
            .catch(err => { throw new Error(err) })
    }
}