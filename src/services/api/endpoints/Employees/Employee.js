import { makeRequest } from '../../configuration/api';

export const Employee = {
	index: () => makeRequest('GET', 'Employee'),
	single: id => makeRequest('GET', `Employee/${id}`),
	create: employee => makeRequest('POST', 'Employee', { employee }),
	update: employee => makeRequest('POST', 'Employee', { employee }),
	delete: id => makeRequest('DELETE', `Employee/${id}`),
	massDelete: ids => makeRequest('DELETE', 'Employee', { employeeIds: ids })
};
