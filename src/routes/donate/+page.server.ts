import { redirect } from '@sveltejs/kit';

export async function load() {
	throw redirect(302, 'https://streamlabs.com/codinggarden/tip');
}
