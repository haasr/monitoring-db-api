const knex = require('knex');

const connectedKnex = knex({
	client: 'pg',
	connection: {
		connectionString: 'someconnectionstring',
		ssl: { rejectUnauthorized: false },
	}
});

module.exports = connectedKnex;
