import { Router } from "express";
import { createData, deleteData, fetchData, fetchSpecificData, updateData } from "../controllers/api.js";

const apiRouter = Router();

apiRouter.get('/', fetchData);

apiRouter.get('/:id', fetchSpecificData);

apiRouter.post('/', createData);

apiRouter.put('/:id', updateData);

apiRouter.delete('/:id', deleteData);

export default apiRouter;
