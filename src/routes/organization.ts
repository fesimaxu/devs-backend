import express from 'express';
import { getOrganization } from "../controller/organization"

const router = express.Router();

/* GET users listing. */
router.get('/resource', getOrganization);

router.post("/", () => { });
router.put("/", () => { });
router.patch("/", () => { });
router.delete("/", () => { });

export default router;
