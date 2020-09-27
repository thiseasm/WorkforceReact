import { makeRequestJSON } from '../../configuration/api';

export const Skills = {
	index: () => makeRequestJSON('GET', 'Skill'),
	single: id => makeRequestJSON('GET', `Skill/${id}`),
	create: skill => makeRequestJSON('POST', 'Skill', { ...skill }),
	delete: id => makeRequestJSON('DELETE', `Skill/${id}`),
	massDelete: ids => makeRequestJSON('DELETE', 'Skill', { ids })
};
