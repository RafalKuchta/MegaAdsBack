import {Router} from "express";
import {AdRecord} from "../records/ad.record";
import {AdEntity} from "../types";

export const adRouter = Router();

adRouter
    .get('/search/:name?', async (req, res) => {
        const ads = await AdRecord.findAll(req.params.name ?? "");
        res.json(ads);
    })
    .get('/:id', async (req, res) => {
        const ad = await AdRecord.getOne(req.params.id);
        res.json(ad);
    })
    .post('/add', async (req, res) => {
        const ad = new AdRecord(req.body as AdEntity);
        await ad.insert();
        res.json(ad);
    })