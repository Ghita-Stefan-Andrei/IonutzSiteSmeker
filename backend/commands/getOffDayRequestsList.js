const fs = require('fs');

function getOffDayRequestsList(req, res){
    fs.readFile('./db/offDaysQueue.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Eroare la citirea fișierului:', err);
            return res.status(500).send('Eroare server!');
        }

        const jsonData = JSON.parse(data);

        const pendingRequests = jsonData.requests
            .map(request => ({
                ...request,
                req: request.req.filter(r => r.status === 'pending')
            }))
            .filter(request => request.req.length > 0);

        res.json(pendingRequests || []);
    });
}

module.exports = { getOffDayRequestsList };