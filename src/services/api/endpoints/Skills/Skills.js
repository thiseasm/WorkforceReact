import { makeRequest } from '../../configuration/api';

export const Skills = {
	index: () => makeRequest('GET', 'Skill'),
	single: id => makeRequest('GET', `Skill/${id}`),
	create: skill => makeRequest('POST', 'Skill', { skill }),
	delete: id => makeRequest('DELETE', `Skill/${id}`),
	massDelete: ids => makeRequest('DELETE', 'Skill', { ids })
};
