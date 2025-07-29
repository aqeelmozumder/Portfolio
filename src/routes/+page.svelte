<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Journey from '$lib/components/Journey.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Interests from '$lib/components/Interests.svelte';
	import Contact from '$lib/components/Contact.svelte';

	export let data;

	onMount(() => {
		// Enhanced navbar scroll effect
		const handleScroll = () => {
			const navbar = document.querySelector('nav');
			if (navbar) {
				if (window.scrollY > 100) {
					navbar.classList.add('scrolled');
				} else {
					navbar.classList.remove('scrolled');
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		// Smooth scrolling for navigation links
		const handleNavClick = (e: Event) => {
			const target = e.target as HTMLAnchorElement;
			if (target.href && target.href.includes('#')) {
				e.preventDefault();
				const id = target.href.split('#')[1];
				const element = document.getElementById(id);
				if (element) {
					element.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});
				}
			}
		};

		document.addEventListener('click', handleNavClick);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('click', handleNavClick);
		};
	});
</script>

<svelte:head>
	<title>Aqeel Mozumder | Software Engineer</title>
	<meta
		name="description"
		content="Software Engineer specializing in cloud, security, and full-stack development. Explore my portfolio, projects, and journey."
	/>
	<meta
		name="keywords"
		content="Software Engineer, Full Stack Developer, Cloud Computing, Cybersecurity, Victoria BC"
	/>
</svelte:head>

<!-- Enhanced Background Effects -->
<div class="grid-bg"></div>
<div class="blob blob1"></div>
<div class="blob blob2"></div>

<Navbar />

<main>
	<Hero />
	<About />
	<Journey journey={data.journey} />
	<Projects projects={data.projects} />
	<Interests />
	<Contact />
</main>

<footer class="border-t border-white/10 bg-zinc-900/50 py-8 text-center">
	<div class="container mx-auto px-6">
		<p class="mb-4 text-zinc-400">&copy; 2025 Aqeel Mozumder. All Rights Reserved.</p>
		<div class="flex justify-center space-x-6">
			<a
				href="mailto:aqeelmozumder@hotmail.com"
				class="hover:text-primary text-zinc-400 transition-colors"
				aria-label="Email Aqeel Mozumder"
			>
				<i class="fas fa-envelope"></i>
			</a>
			<a
				href="https://linkedin.com"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-primary text-zinc-400 transition-colors"
				aria-label="LinkedIn Profile"
			>
				<i class="fab fa-linkedin"></i>
			</a>
			<a
				href="https://github.com"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-primary text-zinc-400 transition-colors"
				aria-label="GitHub Profile"
			>
				<i class="fab fa-github"></i>
			</a>
		</div>
	</div>
</footer>
