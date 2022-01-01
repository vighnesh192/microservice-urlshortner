export default function makeExpressCallback(controller) {
    return (req, res) => {
        const httpRequest = {
            body: req.body.url,
            params: req.params
        }

        controller(httpRequest)
            .then(({ body }) => {
                body.method == "GET" ? res.redirect(body.original_url) : res.json(body);
            })
            .catch(e => {
                console.log("EC Error:-", e);
                if(e == "Invalid URL") {
                    res.status(200).send({error: e})
                }
                res.status(500).send({error: e})
            })
    }
}