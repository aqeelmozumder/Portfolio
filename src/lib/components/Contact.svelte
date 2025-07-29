<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly, scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    
    let contactElements: HTMLElement[] = [];
    let hoveredIndex = -1;
    let showCopyTooltip = false;
    let tooltipIndex = -1;

    const contactMethods = [
        {
            icon: 'fas fa-envelope',
            title: 'Email',
            subtitle: 'Drop me a line',
            info: 'aqeelmozumder@hotmail.com',
            color: '#f43f5e',
            action: () => {
                window.location.href = 'mailto:aqeelmozumder@hotmail.com';
            },
            copyAction: () => copyToClipboard('aqeelmozumder@hotmail.com', 0)
        },
        {
            icon: 'fas fa-map-marker-alt',
            title: 'Location',
            subtitle: 'Based in',
            info: 'Victoria, BC, Canada',
            color: '#10b981',
            action: () => {
                window.open('https://maps.google.com/?q=Victoria,BC,Canada', '_blank');
            },
            copyAction: () => copyToClipboard('Victoria, BC, Canada', 1)
        },
        {
            icon: 'fab fa-linkedin',
            title: 'LinkedIn',
            subtitle: 'Connect professionally',
            info: 'Let\'s network and collaborate',
            color: '#6366f1',
            action: () => window.open('https://linkedin.com', '_blank'),
            copyAction: null
        },
        {
            icon: 'fab fa-github',
            title: 'GitHub',
            subtitle: 'Check out my code',
            info: 'Explore my repositories',
            color: '#f59e0b',
            action: () => window.open('https://github.com', '_blank'),
            copyAction: null
        }
    ];

    const socialLinks = [
        { icon: 'fab fa-twitter', url: 'https://twitter.com', color: '#1da1f2' },
        { icon: 'fab fa-instagram', url: 'https://instagram.com', color: '#e4405f' },
        { icon: 'fab fa-discord', url: 'https://discord.com', color: '#7289da' }
    ];

    async function copyToClipboard(text: string, index: number) {
        try {
            await navigator.clipboard.writeText(text);
            tooltipIndex = index;
            showCopyTooltip = true;
            setTimeout(() => {
                showCopyTooltip = false;
                tooltipIndex = -1;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    function handleKeydown(event: KeyboardEvent, action: () => void) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            action();
        }
    }

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 150);
                }
            });
        }, { threshold: 0.1 });

        contactElements.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    });
</script>

<section id="contact" class="py-20 relative">
	
    <!-- Background Elements -->
    <div class="contact-bg-grid"></div>
    <div class="contact-blob contact-blob-1"></div>
    <div class="contact-blob contact-blob-2"></div>

    <div class="container mx-auto px-6 relative z-10">
        <!-- Header Section -->
        <div class="mb-16">
            <h2 class="section-title text-center text-3xl font-bold md:text-5xl">Get In Touch</h2>
        </div>

        <!-- Main Contact Cards -->
        <div class="contact-cards-grid mb-16">
            {#each contactMethods as method, index}
                <div 
                    class="contact-card-enhanced"
                    style="--card-color: {method.color}; --delay: {index * 100}ms;"
                    bind:this={contactElements[index]}
                    on:mouseenter={() => hoveredIndex = index}
                    on:mouseleave={() => hoveredIndex = -1}
                    on:click={method.action}
                    on:keydown={(e) => handleKeydown(e, method.action)}
                    role="button"
                    tabindex="0"
                    aria-label={`${method.title}: ${method.info}`}
                >
                    <!-- Card Background Effects -->
                    <div class="card-bg-effect"></div>
                    <div class="card-border-glow"></div>
                    
                    <!-- Card Content -->
                    <div class="card-content">
                        <div class="contact-icon-enhanced" style="background: linear-gradient(135deg, {method.color}, {method.color}cc);">
                            <i class={method.icon}></i>
                            {#if hoveredIndex === index}
                                <div class="icon-ripple" transition:scale={{ duration: 300, easing: quintOut }}></div>
                            {/if}
                        </div>
                        
                        <div class="contact-text">
                            <h3 class="contact-title">{method.title}</h3>
                            <p class="contact-subtitle">{method.subtitle}</p>
                            <p class="contact-info">{method.info}</p>
                        </div>

                        <!-- Copy Button for Email/Location -->
                        {#if method.copyAction}
                            <button 
                                class="copy-btn"
                                on:click|stopPropagation={method.copyAction}
                                aria-label="Copy to clipboard"
                            >
                                <i class="fas fa-copy"></i>
                            </button>

                            <!-- Copy Tooltip -->
                            {#if showCopyTooltip && tooltipIndex === index}
                                <div class="copy-tooltip" transition:fade={{ duration: 200 }}>
                                    <span>Copied!</span>
                                </div>
                            {/if}
                        {/if}
                    </div>

                    <!-- Hover Effects -->
                    {#if hoveredIndex === index}
                        <div class="card-shimmer" transition:fade={{ duration: 300 }}></div>
                    {/if}
                </div>
            {/each}
        </div>

        <!-- Status Indicator -->
        <div class="availability-status">
            <div class="status-indicator">
                <div class="status-dot"></div>
                <span class="status-text">Available for new opportunities</span>
            </div>
        </div>
    </div>
</section>