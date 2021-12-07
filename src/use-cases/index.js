import makePostUrl from "./post-url.js";

import urlDbAccess from "../data-access/index.js";

const postUrl = makePostUrl({ urlDbAccess });

const urlServices = Object.freeze({
    postUrl
})

export default urlServices
export { postUrl }