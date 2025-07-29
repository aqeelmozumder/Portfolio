<script lang="ts">
	import { onMount } from 'svelte';

	let catFact =
		'Click the button above to learn something interesting about our feline friends! 🐱';
	let isLoadingCatFact = false;
	let interestElements: HTMLElement[] = [];

	const interests = [
		{
			icon: 'fas fa-cat',
			title: 'Pet Care',
			description: 'Love playing with my cat, Lily',
			special: true
		},
		{
			icon: 'fas fa-code',
			title: 'Technology & Innovation',
			description:
				'Love to exploring emerging technologies. Always excited about new frameworks, tools, and methodologies that can improve development workflows.'
		},
		{
			icon: 'fas fa-futbol',
			title: 'Soccer',
			description:
				"Passionate about the beautiful game! Whether it's playing pickup games with friends or following my favorite teams, soccer brings excitement and keeps me active."
		},
		{
			icon: 'fas fa-gamepad',
			title: 'Gaming & Problem Solving',
			description:
				'Enjoy strategic games and puzzles that challenge problem-solving skills. Gaming provides a fun way to unwind while keeping the mind sharp and creative.'
		}
	];

	async function getCatFact() {
		try {
			isLoadingCatFact = true;
			catFact = 'Fetching an interesting cat fact...';

			const response = await fetch('https://catfact.ninja/fact');
			if (!response.ok) throw new Error('Failed to fetch');
			const data = await response.json();

			setTimeout(() => {
				catFact = data.fact;
				isLoadingCatFact = false;
			}, 500);
		} catch (error) {
			catFact = 'Oops! Could not fetch a cat fact right now. Please try again later. 🐱';
			isLoadingCatFact = false;
			console.error(error);
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							entry.target.classList.add('animate-in');
						}, index * 150);
					}
				});
			},
			{ threshold: 0.1 }
		);

		interestElements.forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<section id="interests" class="py-20">
	<div class="container mx-auto px-6">
		<h2 class="section-title text-center text-3xl font-bold md:text-5xl">Personal Interests</h2>
		<div class="interests-grid mt-12">
			{#each interests as interest, index}
				<div class="interest-card-enhanced card" bind:this={interestElements[index]}>
					<div class="interest-icon-enhanced">
						<i class={interest.icon}></i>
					</div>
					<h3 class="gradient-text mb-4 text-xl font-semibold">{interest.title}</h3>
					<p class="mb-4 leading-relaxed text-zinc-300">{interest.description}</p>

					{#if interest.special}
						<button class="btn-primary mb-4" on:click={getCatFact} disabled={isLoadingCatFact}>
							{#if isLoadingCatFact}
								<span class="loading-spinner"></span>
								Loading...
							{:else}
								Get Random Cat Fact
							{/if}
						</button>
						<div class="cat-fact-container {isLoadingCatFact ? 'loading' : ''}">
							{catFact}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
