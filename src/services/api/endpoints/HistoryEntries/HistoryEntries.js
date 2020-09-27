import { makeRequestJSON } from '../../configuration/api';

export const HistoryEntries = {
	index: () => makeRequestJSON('GET', 'History'),
	entriesForEmployee: id => makeRequestJSON('GET', `History/${id}`)
};
