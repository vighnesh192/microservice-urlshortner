import { getUrl, postUrl } from "../use-cases/index.js";
import makeGetUrlController from './get-url.js';
import makePostUrlController from "./post-url.js";

const getUrlController = makeGetUrlController({ getUrl });
const posttUrlController = makePostUrlController({ postUrl });

export { getUrlController, posttUrlController }