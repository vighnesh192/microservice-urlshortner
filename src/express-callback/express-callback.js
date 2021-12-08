module.exports = function makeExpressCallback(controller) {
    return (req, res) => {
        const httpRequest = {
            body: req.body,
            params: req.params
        }

        controller(httpRequest)
            .then(httpResponse => res.json(httpResponse.body))
            .catch(error => res.status(500).send({error}))
    }
}