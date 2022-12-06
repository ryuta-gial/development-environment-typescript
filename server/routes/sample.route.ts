import { Router, Request, Response } from 'express';
import { currentTimeStamp } from '../controllers/sample.controller';
import { SampleModel } from '../models/types/sample.type';

const router = Router();

//リクエストエラー判定
/* function isReqBodyValid(res: Response, data: StaffPayload) { */
/*     if (!data || !data.name || !data.employmentStatus || !data.shiftType) { */
/*         // TODO: insufficient required items error */
/*         console.error('Missing required staff data'); */
/*         res.status(400).send(); */
/*         return false; */
/*     } */
/*     return true; */
/* } */

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/dummyUser', (req, res) => {
  res.json({
    name: 'Foo',
    content: 'bar',
  } as SampleModel);
});

router.get('/timestamp', (req, res) => {
  res.send(`Current Timestamp is: ${currentTimeStamp()}`);
});

router.post('/', (req: Request, res: Response) => {
  const now = new Date();
  const hour = now.getHours();
  if (hour >= 5 && hour <= 10) {
    res.json({
      msg: 'おはよう',
      data: req.body,
    });
  } else if (hour >= 11 && hour <= 18) {
    res.json({
      msg: 'こんにちは',
      data: req.body.input_name,
    });
  } else {
    res.json({
      msg: 'こんばんは',
      data: req.body,
    });
  }
});


/* staffRouter.post('/', async (req, res) => { */
/*     try { */
/*         const data: StaffPayload = req.body; */
/*         if (!isReqBodyValid(res, data)) { */
/*             // Error handled by called function */
/*             return; */
/*         } */
/*         saveUser(res, data); */
/*     } catch (err) { */
/*         console.error('Internal Server Error', err); */
/*         res.status(500).send(); */
/*     } */
/* }); */
/**/
/* staffRouter.delete('/:staff_id', async (req, res) => { */
/*     try { */
/*         const params = req.params; */
/*         const staffId = params['staff_id']; */
/*         if (!staffId) { */
/*             const e: ErrPayload = { msg: 'Staff ID not recognized' }; */
/*             res.status(400).send(e); */
/*             return; */
/*         } */
/*         const staffIdNum = Number.parseInt(staffId); */
/*         removeStaff(res, staffIdNum); */
/*     } catch (err) { */
/*         console.error('Internal Server Error', err); */
/*         res.status(500).send(); */
/*     } */
/* }); */
/**/
/* staffRouter.put('/:staff_id', async (req, res) => { */
/*     try { */
/*         const params = req.params; */
/*         const staffId = params['staff_id']; */
/*         if (!staffId) { */
/*             const e: ErrPayload = { msg: 'Staff ID not recognized' }; */
/*             res.status(400).send(e); */
/*             return; */
/*         } */
/*         const data: StaffPayload = req.body; */
/*         const usrId = Number.parseInt(staffId); */
/*         if (!isReqBodyValid(res, data)) { */
/*             // Error handled by called function */
/*             return; */
/*         } */
/*         editStaff(res, usrId, data); */
/*     } catch (err) { */
/*         console.error('Internal Server Error', err); */
/*         res.status(500).send(); */
/*     } */
/* }); */

export default router;
