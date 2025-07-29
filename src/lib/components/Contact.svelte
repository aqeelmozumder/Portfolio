<script lang="ts">
	import { onMount } from 'svelte';

	let formSuccess = false;
	let isSubmitting = false;
	let contactElements: HTMLElement[] = [];

	const contactMethods = [
		{
			icon: 'fas fa-envelope',
			title: 'Email',
			info: 'aqeelmozumder@hotmail.com',
			action: () => (window.location.href = 'mailto:aqeelmozumder@hotmail.com')
		},
		{
			icon: 'fas fa-map-marker-alt',
			title: 'Location',
			info: 'Victoria, BC, Canada',
			action: () => {}
		},
		{
			icon: 'fab fa-linkedin',
			title: 'LinkedIn',
			info: 'Connect professionally',
			action: () => window.open('https://linkedin.com', '_blank')
		},
		{
			icon: 'fab fa-github',
			title: 'GitHub',
			info: 'Check out my projects',
			action: () => window.open('https://github.com', '_blank')
		}
	];

	async function handleSubmit(event: Event) {
		const form = event.target as HTMLFormElement;
		event.preventDefault();

		isSubmitting = true;

		// Simulate form submission
		setTimeout(() => {
			isSubmitting = false;
			formSuccess = true;
			form.reset();

			setTimeout(() => {
				formSuccess = false;
			}, 5000);
		}, 1500);
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							entry.target.classList.add('animate-in');
						}, index * 100);
					}
				});
			},
			{ threshold: 0.1 }
		);

		contactElements.forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<section id="contact" class="py-20">
	<div class="container mx-auto px-6">
		<h2 class="section-title text-center text-3xl font-bold md:text-5xl">Get In Touch</h2>
		<div class="contact-grid mt-12">
			<div
				class="contact-info translate-y-8 opacity-0 transition-all duration-700 ease-out"
				bind:this={contactElements[1]}
			>
				<h3 class="gradient-text mb-6 text-2xl font-semibold">Contact Information</h3>
				{#each contactMethods as method, index}
					<div
						class="contact-item"
						on:click={method.action}
						role="button"
						tabindex="0"
						on:keydown={(e) => e.key === 'Enter' && method.action()}
					>
						<div class="contact-icon">
							<i class={method.icon}></i>
						</div>
						<div>
							<h4 class="font-semibold text-white">{method.title}</h4>
							<p class="text-zinc-300">{method.info}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.contact-grid .glass-card.animate-in,
	.contact-info.animate-in {
		opacity: 1;
		transform: translateY(0);
	}
</style>
