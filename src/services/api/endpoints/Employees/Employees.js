import { makeRequestJSON } from '../../configuration/api';

export const Employees = {
	index: () => makeRequestJSON('GET', 'Employee'),
	single: id => makeRequestJSON('GET', `Employee/${id}`),
	create: employee => makeRequestJSON('POST', 'Employee', { employee }),
	update: employee => makeRequestJSON('POST', 'Employee', { employee }),
	delete: id => makeRequestJSON('DELETE', `Employee/${id}`),
	massDelete: ids =>
		makeRequestJSON('DELETE', 'Employee', { employeeIds: ids })
};
