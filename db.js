const outdoorUnits=require('./assets/outdoor-units.json');
const marinaUnits=require('./assets/marina-units.json');
const buildingUnits=require('./assets/building-units.json');
const sites=require('./assets/sites.json');
const contacts = require('./assets/contacts.json');
const reservations = require('./assets/reservations.json');
const leases = require('./assets/leases.json');

module.exports = () => ({
    outdoorUnits, marinaUnits, buildingUnits, sites, contacts, reservations, leases
  });