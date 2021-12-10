module.exports = function makeExpressCallback(controller) {
    return (req, res) => {
        const httpRequest = {
            body: req.body,
            params: req.params
        }

        controller(httpRequest)
            .then(httpResponse => res.json(httpResponse.body))
            .catch(e => res.status(500).send({error: e.message}))
    }
}