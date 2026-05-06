import express from 'express'

import router from '../modules/fees/payment/router.js';
import routerf from '../modules/fees/feeType/router.js';
import routers from '../modules/fees/feeStructure/router.js';
import routerb from '../modules/fees/balance/router.js';

const routerFees = express.Router();

routerFees.use('/payment', router);
routerFees.use('/fee-type', routerf);
routerFees.use('/fee-structure', routers);
routerFees.use('/balance', routerb);

export default routerFees