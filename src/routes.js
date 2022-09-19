import express from "express";
import xmlgen from 'facturacionelectronicapy-xmlgen'

const router = express.Router();

router.post('/generatexmlde', (req, res) => {

    const {data, params} = req.body;

    xmlgen.default.generateXMLDE(params, data).then(xml => {
        res.header("Content-Type", "application/xml");
        return res.status(200).send(xml);
    }).catch(error => {
        return res.status(400).json({
            statusCode: 400,
            message: error?.message ?? error,
            stack: error?.stack ?? ""
        })
    });
})

router.post('/generateXMLEventoCancelacion', (req, res) => {

    const {data, params} = req.body;

    xmlgen.default.generateXMLEventoCancelacion(1, params, data).then(xml => {
        res.header("Content-Type", "application/xml");
        return res.status(200).send(xml);
    }).catch(error => {
        return res.status(400).json({
            statusCode: 400,
            message: error?.message ?? error,
            stack: error?.stack ?? ""
        })
    });
})

router.post('/generateXMLEventoInutilizacion', (req, res) => {

    const {data, params} = req.body;

    xmlgen.default.generateXMLEventoInutilizacion(1, params, data).then(xml => {
        res.header("Content-Type", "application/xml");
        return res.status(200).send(xml);
    }).catch(error => {
        return res.status(400).json({
            statusCode: 400,
            message: error?.message ?? error,
            stack: error?.stack ?? ""
        })
    });
})

router.post('/generateXMLEventoConformidad', (req, res) => {

    const {data, params} = req.body;

    xmlgen.default.generateXMLEventoConformidad(1, params, data).then(xml => {
        res.header("Content-Type", "application/xml");
        return res.status(200).send(xml);
    }).catch(error => {
        return res.status(400).json({
            statusCode: 400,
            message: error?.message ?? error,
            stack: error?.stack ?? ""
        })
    });
})

router.post('/generateXMLEventoDisconformidad', (req, res) => {

    const {data, params} = req.body;

    xmlgen.default.generateXMLEventoDisconformidad(1, params, data).then(xml => {
        res.header("Content-Type", "application/xml");
        return res.status(200).send(xml);
    }).catch(error => {
        return res.status(400).json({
            statusCode: 400,
            message: error?.message ?? error,
            stack: error?.stack ?? ""
        })
    });
})

router.post('/generateXMLEventoDesconocimiento', (req, res) => {

    const {data, params} = req.body;

    xmlgen.default.generateXMLEventoDesconocimiento(1, params, data).then(xml => {
        res.header("Content-Type", "application/xml");
        return res.status(200).send(xml);
    }).catch(error => {
        return res.status(400).json({
            statusCode: 400,
            message: error?.message ?? error,
            stack: error?.stack ?? ""
        })
    });
})

router.post('/generateXMLEventoNotificacion', (req, res) => {

    const {data, params} = req.body;

    xmlgen.default.generateXMLEventoNotificacion(1, params, data).then(xml => {
        res.header("Content-Type", "application/xml");
        return res.status(200).send(xml);
    }).catch(error => {
        return res.status(400).json({
            statusCode: 400,
            message: error?.message ?? error,
            stack: error?.stack ?? ""
        })
    });
})

export default router
