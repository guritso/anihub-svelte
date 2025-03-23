import { json } from '@sveltejs/kit';

export async function GET() {
	try {
		const response = await fetch('https://api.github.com/users/guritso/repos');
		const repos = await response.json();

		return json(reduceJson(repos));
	} catch (error) {
		return json({ error: 'Failed to fetch repositories' }, { status: 500 });
	}
}

function reduceJson(json) {
	return json.map((repo) => {
		return {
			name: repo.name,
			description: repo.description,
			url: repo.html_url,
			language: repo.language,
			stars: repo.stargazers_count,
			forks: repo.forks_count,
			issues: repo.open_issues_count,
			updated: repo.updated_at,
			isFork: repo.fork,
			isArchived: repo.archived,
		};
	});
}