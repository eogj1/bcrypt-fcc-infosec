'use strict';
const express     = require('express');
const bcrypt      = require('bcrypt');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
    //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
      console.log(res); //true
    });
  });

//START_ASYNC -do not remove notes, place code between correct pair of notes.
  var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
    console.log(hash);

  var result = bcrypt.compareSync(myPlaintextPassword, hash);
    console.log(result);

//END_ASYNC

//START_SYNC



//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
