const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
	const { Products, A_AddressEmailAddress } = this.entities;
	const service = await cds.connect.to('NorthWind');
    const service2 = await cds.connect.to('API_BUSINESS_PARTNER');

	this.on('READ', Products, request => {
		return service.tx(request).run(request.query);
	});

    this.on('READ', A_AddressEmailAddress, async request => {
		try {
			const tx = service2.transaction();
			let entity = 'A_AddressEmailAddress';
			let columnsToSelect = ["AddressID", "EmailAddress"];
			return await tx.run(
				SELECT.from(entity).columns(columnsToSelect).where({ 'AddressID': `25253` })
			)
		}
		catch (err) {
			request.reject(err);
		}
		//return service2.tx(request).run(request.query);
	});
});