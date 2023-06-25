import {inputData} from '../controllers/dataController.js'
import express from 'express';

const router = express.Router();

router.post('/postData',inputData);

export default router