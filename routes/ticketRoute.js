import express from 'express';
import ticketController from '../controller/ticketController.js'

const router = express.Router();


router.get('/', ticketController.allTickets);

router.post('/api/ticket', ticketController.addTicket);

router.delete('/api/ticket/:id', ticketController.deleteTicket);

router.put('/api/tickets/:id', ticketController.updateTicket);


export default router;



// router.get('/api/tickets', ticketController.allTickets);