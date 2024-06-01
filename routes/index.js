const express = require('express');


const router = express.Router();

const homeController = require('../controllers/homecontroller');

router.get('/', homeController.home);
router.get('/home', homeController.home2);
router.get('/events', homeController.events);
router.get('/events/solosingingeastern', homeController.solosingingeastern);
router.get('/events/solosingingwestern', homeController.solosingingwestern);
router.get('/events/mrandmskaalrav', homeController.mrandmskaalrav);
router.get('/events/solodancingeastern', homeController.solodancingeastern);
router.get('/events/solodancingwestern', homeController.solodancingwestern);
router.get('/events/fashionshow', homeController.fashionshow);
router.get('/events/treasurehunt', homeController.treasurehunt);
router.get('/events/creativewriting', homeController.creativewriting);
router.get('/events/debate', homeController.debate);
router.get('/events/quiz', homeController.quiz);
router.get('/events/egames', homeController.egames);
router.get('/events/grpDEast', homeController.grpDEast);
router.get('/events/grpDWest', homeController.grpDWest);
router.get('/events/battleofbands', homeController.battleofbands);
router.get('/events/beatboxing', homeController.beatboxing);
router.get('/events/poetry', homeController.poetry);
router.get('/events/dumbcharades', homeController.dumbcharades);
router.get('/events/streetplay', homeController.streetplay);
router.get('/events/trifecta', homeController.trifecta);
router.get('/events/rapping', homeController.rapping);
router.get('/events/minutemasti', homeController.minutemasti);
router.get('/artists', homeController.artists);
router.get('/sponsors', homeController.sponsors);
router.get('/gallery', homeController.gallery);
router.get('/aboutus', homeController.aboutus);
// router.get('/treasurehunt/:id', homeController.treasurehuntqr);
router.get('/treasurehunt/code/:id', homeController.inputcode);
router.post('/treasurehunt/verifycode', homeController.codeverify);
module.exports = router;