import { makeRequest } from '../../configuration/api';

export const HistoryEntries = {
	index: () => makeRequest('GET', 'History'),
	entriesForEmployee: id => makeRequest('GET', `History/${id}`)
};
