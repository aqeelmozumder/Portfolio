import journey from '$lib/data/journey.json';
import projects from '$lib/data/projects.json';
import travels from '$lib/data/travels.json';

export function load() {
	return {
		journey,
		projects,
		travels
	};
}
