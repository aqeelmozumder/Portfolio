<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let activeTab = 'profile';
	let skillsVisible = false;
	let mounted = false;

	const skillCategories = [
		{
			name: 'Languages & Databases',
			skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS', 'SQL', 'PowerShell']
		},
		{
			name: 'Frameworks & Libraries',
			skills: ['Node.js', 'React', 'Next.js', 'SvelteKit', 'jQuery']
		},
		{
			name: 'Tools & Platforms',
			skills: ['Git', 'Docker', 'Firebase', 'OKTA', 'M365 Admin', 'Active Directory']
		},
		{
			name: 'Concepts',
			skills: ['CI/CD', 'SDLC', 'Agile Methodologies', 'Network & App Security']
		}
	];

	onMount(() => {
		mounted = true;
		setTimeout(() => {
			skillsVisible = true;
		}, 500);
	});
</script>

<section id="about" class="py-20">
	<div class="container mx-auto px-6">
		<h2 class="section-title text-center text-3xl font-bold md:text-5xl">About Me</h2>

		{#if mounted}
			<div class="mt-12 flex flex-col gap-12 md:flex-row" in:fly={{ y: 30, duration: 600 }}>
				<div class="md:w-1/2">
					<div class="mb-6 flex space-x-4">
						<button
							class="tab-button {activeTab === 'profile' ? 'active' : ''}"
							on:click={() => (activeTab = 'profile')}
						>
							<span>Profile</span>
						</button>
						<button
							class="tab-button {activeTab === 'education' ? 'active' : ''}"
							on:click={() => (activeTab = 'education')}
						>
							<span>Education</span>
						</button>
						<button
							class="tab-button {activeTab === 'experience' ? 'active' : ''}"
							on:click={() => (activeTab = 'experience')}
						>
							<span>Experience</span>
						</button>
					</div>

					{#if activeTab === 'profile'}
						<div class="glass-card p-6">
							<p class="mb-6 leading-relaxed text-zinc-300">
								A dedicated professional with expertise in software engineering, constantly pushing
								boundaries and seeking innovative solutions to complex problems. Passionate about
								technology and its potential to create positive impact.
							</p>
							<h4 class="gradient-text mb-4 text-lg font-semibold">Professional Focus</h4>
							<ul class="space-y-3 text-zinc-300">
								<li class="group flex items-center">
									<i
										class="fas fa-check-circle text-primary mr-3 transition-transform group-hover:scale-110"
									></i>
									<span class="transition-colors group-hover:text-white"
										>Full-Stack Development</span
									>
								</li>
								<li class="group flex items-center">
									<i
										class="fas fa-check-circle text-primary mr-3 transition-transform group-hover:scale-110"
									></i>
									<span class="transition-colors group-hover:text-white"
										>Systems & Cloud Infrastructure</span
									>
								</li>
								<li class="group flex items-center">
									<i
										class="fas fa-check-circle text-primary mr-3 transition-transform group-hover:scale-110"
									></i>
									<span class="transition-colors group-hover:text-white"
										>Cybersecurity & Network Management</span
									>
								</li>
								<li class="group flex items-center">
									<i
										class="fas fa-check-circle text-primary mr-3 transition-transform group-hover:scale-110"
									></i>
									<span class="transition-colors group-hover:text-white"
										>Agile Methodologies & SDLC</span
									>
								</li>
							</ul>
						</div>
					{:else if activeTab === 'education'}
						<div class="glass-card p-6">
							<div class="flex items-start space-x-4">
								<div
									class="from-primary to-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r"
								>
									<i class="fas fa-graduation-cap text-white"></i>
								</div>
								<div>
									<h4 class="gradient-text text-lg font-semibold">
										Bachelor of Software Engineering
									</h4>
									<p class="font-medium text-zinc-400">University of Victoria</p>
									<span
										class="mt-2 inline-block rounded-full bg-indigo-900/30 px-2 py-1 text-sm text-indigo-400"
										>2017 - 2022</span
									>
									<p class="mt-3 text-sm leading-relaxed text-zinc-300">
										Comprehensive program covering software design, algorithms, databases, web
										development, and project management. Completed multiple co-op terms gaining
										real-world experience.
									</p>
								</div>
							</div>
						</div>
					{:else if activeTab === 'experience'}
						<div class="space-y-4">
							<div class="glass-card hover:border-primary/50 p-6 transition-colors">
								<div class="flex items-start space-x-4">
									<div
										class="from-primary to-secondary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r"
									>
										<i class="fas fa-briefcase text-sm text-white"></i>
									</div>
									<div>
										<h4 class="text-lg font-semibold text-white">Systems Analyst</h4>
										<p class="text-zinc-400">Brentwood College School</p>
										<span class="text-sm text-indigo-400">Jun 2023 - Present</span>
									</div>
								</div>
							</div>
							<div class="glass-card hover:border-primary/50 p-6 transition-colors">
								<div class="flex items-start space-x-4">
									<div
										class="from-primary to-secondary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r"
									>
										<i class="fas fa-shield-alt text-sm text-white"></i>
									</div>
									<div>
										<h4 class="text-lg font-semibold text-white">Junior Security Analyst</h4>
										<p class="text-zinc-400">BC Pension Corporation</p>
										<span class="text-sm text-indigo-400">Sep 2022 - Dec 2022</span>
									</div>
								</div>
							</div>
							<div class="glass-card hover:border-primary/50 p-6 transition-colors">
								<div class="flex items-start space-x-4">
									<div
										class="from-primary to-secondary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r"
									>
										<i class="fas fa-laptop-code text-sm text-white"></i>
									</div>
									<div>
										<h4 class="text-lg font-semibold text-white">Learning Technology Assistant</h4>
										<p class="text-zinc-400">University of Victoria</p>
										<span class="text-sm text-indigo-400">Sep 2021 - Dec 2021</span>
									</div>
								</div>
							</div>
							<div class="glass-card hover:border-primary/50 p-6 transition-colors">
								<div class="flex items-start space-x-4">
									<div
										class="from-primary to-secondary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r"
									>
										<i class="fas fa-code text-sm text-white"></i>
									</div>
									<div>
										<h4 class="text-lg font-semibold text-white">Software Application Developer</h4>
										<p class="text-zinc-400">Noratek Solutions Inc</p>
										<span class="text-sm text-indigo-400">Jan 2020 - Aug 2020</span>
									</div>
								</div>
							</div>
						</div>
					{/if}
				</div>
				<div class="md:w-1/2">
					<h3 class="gradient-text mb-6 text-2xl font-semibold">Technical Expertise</h3>
					{#each skillCategories as category, i}
						<div class="mb-6">
							<h4 class="mb-3 flex items-center font-semibold text-zinc-200">
								<span class="from-primary to-secondary mr-2 h-2 w-2 rounded-full bg-gradient-to-r"
								></span>
								{category.name}
							</h4>
							<div class="flex flex-wrap gap-2">
								{#each category.skills as skill, j}
									{#if skillsVisible}
										<span
											class="skill-tag"
											in:fly={{ y: 20, duration: 300, delay: i * 200 + j * 50 }}
										>
											<span>{skill}</span>
										</span>
									{/if}
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{:else}
			<div class="py-12 text-center text-zinc-400">
				<i class="fas fa-spinner fa-spin mb-4 text-2xl"></i>
				<p>Loading content...</p>
			</div>
		{/if}
	</div>
</section>
