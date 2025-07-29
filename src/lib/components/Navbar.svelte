<script lang="ts">
	let isMobileMenuOpen = false;
	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
	function closeMenu() {
		isMobileMenuOpen = false;
	}
</script>

<nav
	class="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-zinc-900/80 backdrop-blur-md"
>
	<div class="container mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<a href="#home" class="text-2xl font-bold">
				<span class="gradient-text">AQEEL MOZUMDER</span>
			</a>
			<div class="hidden space-x-8 md:flex">
				<a href="#home" class="nav-link text-zinc-300 hover:text-white">Home</a>
				<a href="#about" class="nav-link text-zinc-300 hover:text-white">About</a>
				<a href="#journey" class="nav-link text-zinc-300 hover:text-white">Journey</a>
				<a href="#projects" class="nav-link text-zinc-300 hover:text-white">Projects</a>
				<a href="#interests" class="nav-link text-zinc-300 hover:text-white">Interests</a>
				<a href="#contact" class="nav-link text-zinc-300 hover:text-white">Contact</a>
			</div>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="text-white focus:outline-none md:hidden" on:click={toggleMobileMenu}>
				<i class="fas {isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl"></i>
			</button>
		</div>
	</div>
	{#if isMobileMenuOpen}
		<div class="border-t border-white/10 bg-zinc-800/90 py-4 backdrop-blur-md md:hidden">
			<div class="container mx-auto flex flex-col space-y-4 px-6">
				<a href="#home" on:click={closeMenu} class="text-zinc-300 hover:text-white">Home</a>
				<a href="#about" on:click={closeMenu} class="text-zinc-300 hover:text-white">About</a>
				<a href="#journey" on:click={closeMenu} class="text-zinc-300 hover:text-white">Journey</a>
				<a href="#projects" on:click={closeMenu} class="text-zinc-300 hover:text-white">Projects</a>
				<a href="#interests" on:click={closeMenu} class="text-zinc-300 hover:text-white"
					>Interests</a
				>
				<a href="#contact" on:click={closeMenu} class="text-zinc-300 hover:text-white">Contact</a>
			</div>
		</div>
	{/if}
</nav>
