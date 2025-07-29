<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let projects: Array<{
		category: string;
		image: string;
		title: string;
		subtitle: string;
		description: string;
		tags: string[];
		github: string;
		live?: string;
	}>;

	const categories = ['all', ...new Set(projects.map((p) => p.category))];
	let activeFilter = 'all';
	let mounted = false;

	$: filteredProjects =
		activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

	onMount(() => {
		mounted = true;
	});
</script>

<section id="projects" class="py-20">
	<div class="container mx-auto px-6">
		<h2 class="section-title text-center text-3xl font-bold md:text-5xl">Featured Projects</h2>

		<div class="mb-12 mt-8 flex flex-wrap justify-center gap-4">
			{#each categories as category}
				<button
					class="filter-btn capitalize {activeFilter === category ? 'active' : ''}"
					on:click={() => (activeFilter = category)}
				>
					<span>{category.replace(/-/g, ' ')}</span>
				</button>
			{/each}
		</div>

		{#if mounted}
			<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredProjects as project, index (project.title)}
					<div class="project-item" in:fly={{ y: 20, duration: 500, delay: index * 100 }}>
						<div class="project-card card" style="background-image: url({project.image})">
							<div class="project-content">
								<!-- Always visible content -->
								<div>
									<h3 class="text-xl font-semibold text-white">{project.title}</h3>
									<p class="text-sm text-zinc-300">{project.subtitle}</p>
								</div>
								<!-- Content that appears on hover -->
								<div class="project-details">
									<p class="mb-4 text-sm leading-relaxed text-zinc-300">{project.description}</p>
									<div class="mb-4 flex flex-wrap gap-2">
										{#each project.tags as tag}
											<span
												class="rounded-full bg-zinc-700/80 px-2 py-1 text-xs text-zinc-200 backdrop-blur-sm"
											>
												{tag}
											</span>
										{/each}
									</div>
									<div class="mt-4 flex flex-wrap gap-3">
										{#if project.github.includes('github.com')}
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												class="btn-outline px-4 py-2 text-sm"
											>
												View Code <i class="fab fa-github ml-2"></i>
											</a>
										{:else}
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												class="btn-outline px-4 py-2 text-sm"
											>
												View Slides <i class="fas fa-presentation ml-2"></i>
											</a>
										{/if}
										{#if project.live}
											<a
												href={project.live}
												target="_blank"
												rel="noopener noreferrer"
												class="btn-primary px-4 py-2 text-sm"
											>
												Live Demo <i class="fas fa-external-link-alt ml-2"></i>
											</a>
										{/if}
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="py-12 text-center text-zinc-400">
				<i class="fas fa-spinner fa-spin mb-4 text-2xl"></i>
				<p>Loading projects...</p>
			</div>
		{/if}
	</div>
</section>

<style>
	.project-card {
		opacity: 1;
		transform: translateY(0);
	}
</style>
