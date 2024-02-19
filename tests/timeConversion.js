const moment = require('moment-timezone');


const timeZones = {
UTC: 'Etc/UTC',
EST: 'America/New_York',
CST: 'America/Chicago',
PST: 'America/Los_Angeles',
AEST: 'Australia/Sydney'
};

for(const timeZone in timeZones){
    const value = timeZones[timeZone];
    const updatedTime = (moment().tz(value)).format('MMMM Do, YYYY');
    console.log(`${timeZone}:${updatedTime}`);
}