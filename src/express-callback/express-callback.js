export default function makeExpressCallback(controller) {
    return (req, res) => {
        const httpRequest = {
            body: req.body.url,
            params: req.params
        }

        controller(httpRequest)
            .then(({ body }) => {
                body.method == "GET" ? res.redirect("https://"+body.original_url) : res.json(body);
            })
            .catch(e => {
                res.status(500).send({error: e})
            })
    }
}