<script lang="ts">
	import { onMount } from 'svelte';
	export let journey: Array<{ date: string; title: string; description: string }>;

	let timelineElements: HTMLElement[] = [];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							entry.target.classList.add('animate-in');
						}, index * 200);
					}
				});
			},
			{ threshold: 0.2 }
		);

		timelineElements.forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<section id="journey" class="py-20">
	<div class="container mx-auto px-6">
		<h2 class="section-title text-center text-3xl font-bold md:text-5xl">My Journey</h2>
		<div class="timeline mt-16">
			{#each journey as item, index}
				<div
					class="timeline-container {index % 2 === 0 ? 'left' : 'right'}"
					bind:this={timelineElements[index]}
				>
					<div class="timeline-content card">
						<div class="relative z-10">
							<p class="text-primary mb-2 text-sm font-semibold">{item.date}</p>
							<h3 class="gradient-text mb-3 mt-1 text-xl font-bold">{item.title}</h3>
							<p class="leading-relaxed text-zinc-300">{@html item.description}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
