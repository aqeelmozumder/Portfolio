<script lang="ts">
	import { onMount } from 'svelte';

	const roles = [
		'Software Engineer',
		'Systems Analyst',
		'DevOps Engineer',
		'CyberSecurity Analyst',
		'Network Engineer'
	];

	let typedText = '';
	let heroContent: HTMLElement;

	// Create floating particles
	function createParticles() {
		for (let i = 0; i < 50; i++) {
			const particle = document.createElement('div');
			particle.className = 'particle';
			particle.style.left = Math.random() * 100 + '%';
			particle.style.animationDelay = Math.random() * 15 + 's';
			particle.style.animationDuration = Math.random() * 10 + 10 + 's';
			document.body.appendChild(particle);
		}
	}

	// Create sparkle effects
	function createSparkle() {
		const sparkle = document.createElement('div');
		sparkle.innerHTML = '✨';
		sparkle.style.position = 'absolute';
		sparkle.style.left = Math.random() * 100 + '%';
		sparkle.style.top = Math.random() * 100 + '%';
		sparkle.style.fontSize = '20px';
		sparkle.style.opacity = '0';
		sparkle.style.animation = 'sparkle 2s ease-in-out';
		sparkle.style.pointerEvents = 'none';
		sparkle.style.zIndex = '10';

		heroContent?.appendChild(sparkle);
		setTimeout(() => {
			sparkle.remove();
		}, 2000);
	}

	onMount(() => {
		let roleIndex = 0,
			charIndex = 0,
			isDeleting = false;

		const type = () => {
			const currentRole = roles[roleIndex];
			if (isDeleting) {
				typedText = currentRole.substring(0, charIndex--);
				if (charIndex < 0) {
					isDeleting = false;
					roleIndex = (roleIndex + 1) % roles.length;
					charIndex = 0;
				}
			} else {
				typedText = currentRole.substring(0, ++charIndex);
				if (charIndex === currentRole.length) {
					isDeleting = true;
					setTimeout(type, 2000);
					return;
				}
			}
			setTimeout(type, isDeleting ? 50 : 100);
		};

		// Initialize effects
		createParticles();
		type();

		// Animate hero content
		setTimeout(() => {
			if (heroContent) {
				heroContent.style.opacity = '1';
				heroContent.style.transform = 'translateY(0)';
			}
		}, 300);

		// Create sparkles periodically
		const sparkleInterval = setInterval(createSparkle, 3000);

		return () => {
			clearInterval(sparkleInterval);
		};
	});
</script>

<section id="home" class="relative flex min-h-screen items-center pt-20">
	<div class="container z-10 mx-auto px-6">
		<div
			class="flex translate-y-8 flex-col items-center opacity-0 transition-all duration-1000 ease-out md:flex-row"
			bind:this={heroContent}
		>
			<div class="mb-10 text-center md:mb-0 md:w-1/2 md:text-left">
				<h1 class="mb-6 text-4xl font-bold leading-tight md:text-7xl">
					I'm <span class="gradient-text">Aqeel Mozumder</span>
					<div class="mt-2 h-12 text-2xl md:h-16 md:text-4xl">
						<span class="text-primary">{typedText}</span>
						<span class="typing-cursor"></span>
					</div>
				</h1>
				<p class="mx-auto mb-8 max-w-lg text-lg text-zinc-300 md:mx-0 md:text-xl">
					Software Engineer specializing in cloud, security, and full-stack development.
				</p>
				<p class="mx-auto mb-8 max-w-lg text-lg text-zinc-300 md:mx-0 md:text-xl">
					This portfolio highlights my academic journey, technical experience, and personal
					interests—including countries I have explored.
				</p>
				<div class="flex flex-wrap justify-center gap-4 md:justify-start">
					<a href="#projects" class="btn-primary">View My Work</a>
					<a href="#contact" class="btn-outline">Get In Touch</a>
				</div>
			</div>
			<div class="md:w-1/2">
				<div class="relative">
					<div class="group relative mx-auto h-64 w-64 md:h-96 md:w-96">
						<div
							class="absolute inset-0 overflow-hidden rounded-2xl border-2 border-white/10 backdrop-blur-sm"
						>
							<div class="animated-bg"></div>
						</div>
						<div
							class="from-primary to-secondary absolute inset-4 flex items-center justify-center overflow-hidden rounded-xl border-4 border-transparent bg-zinc-900 bg-gradient-to-r p-1"
						>
							<div class="h-full w-full overflow-hidden rounded-lg">
								<img
									src="/images/profile3.jpg"
									alt="Aqeel Mozumder"
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="scroll-indicator">
		<div class="mouse"></div>
		<p class="mt-2 text-sm text-zinc-400">Scroll Down</p>
	</div>
</section>
