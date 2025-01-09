const express = require('express');
const cors = require('cors'); 
const { getFluturasiMMYY } = require('./commands/getFluturasiMMYY');
const { getNavBarInfo } = require('./commands/getNavBarInfo');
const { setArraysOfWorkedHours } = require('./commands/setArraysOfWorkedHours');
const { generateFlyer } = require('./commands/generateFlyer');
const { sendTables } = require('./commands/sendTables');
const { submitTimesheet } = require('./commands/submitTimesheet');
const { offDaysAndPendingNumber } = require('./commands/offDaysAndPendingNumber');
const { offDayRequestReceiver } = require('./commands/offDayRequestReceiver');
const { getOffDayRequestsList } = require('./commands/getOffDayRequestsList');
const { updateRequestStatus } = require('./commands/updateRequestStatus');
const { loadPersonalProfile } = require('./commands/loadPersonalProfile');
const { getRequestsByUserId } = require('./commands/getRequestsByUserId');
const { getUserProfile  } = require('./commands/getUserProfile');
const { getLeaveByMonth  } = require('./commands/getLeaveByMonth');

const app = express();

app.use(cors());

app.get('/api/data', getFluturasiMMYY);

app.get('/api/user-info', getNavBarInfo);

app.get('/api/get-timesheet-data', setArraysOfWorkedHours);

app.get('/api/generate-flyer', generateFlyer);

app.get('/api/get-month-data', sendTables);

app.post('/api/submit-timesheet', express.json(), submitTimesheet);

app.get('/api/user-data-with-requests', offDaysAndPendingNumber);

app.post('/api/submit-request', express.json(), offDayRequestReceiver);

app.get('/api/get-requests', getOffDayRequestsList);

app.post('/api/update-request-status', express.json(), updateRequestStatus);

app.get('/api/get-profile-data', loadPersonalProfile);

app.get('/api/get-requests-personal', getRequestsByUserId);

app.get('/api/profile', getUserProfile);

app.get('/api/getLeaveByMonth', getLeaveByMonth);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
