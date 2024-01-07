<script>
    import { fly } from 'svelte/transition'

    let stationary = true

	function goToHomepage() {
        stationary = false
		setTimeout(() => {
			window.location.href = '/'
		}, 200)
	}
</script>

<!-- <div class="mb-20 lg:mb-24">
    <Navigation />
</div> -->

<div class="m-4">
    <img src="Resume.png" alt="Andrew's Resume" class="mx-auto w-6/12"/>
</div>

<div class="flex justify-center mb-4">
    <button on:click={goToHomepage} class="text-cyan-500 hover:text-cyan-100 border border-cyan-500 hover:bg-cyan-500 py-2 px-4 rounded-sm transition-all duration-500">
        Back to Homepage
        {#if stationary}
        <i transition:fly={{ x: 200, duration: 1000 }} class="fa-solid fa-chevron-right text-sm ml-2"></i>
        {/if}
    </button>

</div>