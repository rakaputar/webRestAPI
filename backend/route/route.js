 import express from 'express';
 //import bodyParser from 'body-parser';
 import { getNotes,createNote, updateNote, deleteNote, } from '../controller/noteController.js';

const router = express.Router();

router.get('/notes', getNotes); ///Notes ambil dari getNotes
router.post('/tambah-note', createNote); 
router.put('/edit-note/:id', updateNote);
router.delete('/hapus-note/:id', deleteNote);

export default router;