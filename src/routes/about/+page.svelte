<script>
    import { fly } from 'svelte/transition'
    import { messages } from './messages.js'
    import { onMount } from 'svelte'

    let i = -1;

	onMount(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="lg:hidden">
    <img src="aboutmePicture3.jpg" alt="" class="w-full">

    <div class="m-4 mt-8 flex justify-start">
        <div class="border border-cyan-500 rounded-full text-cyan-500 bg-cyan-950 px-4 py-1">About</div>
    </div>

    <div class="h-12 overflow-x-hidden md:hidden">
        {#key i}
            <h1 class="text-xl mb-2 px-4 absolute z-10 text-cyan-500" transition:fly={{ x: 100, duration: 2000 }}>
                {messages[i] || ''}
            </h1>
        {/key}
    </div>

    <div class="h-12 overflow-x-hidden hidden md:block">
        {#key i}
            <h1 class="text-xl mb-2 px-4 absolute z-10 text-cyan-500" transition:fly={{ x: 200, duration: 2000 }}>
                {messages[i] || ''}
            </h1>
        {/key}
    </div>
    <p class="pb-4 px-4 font-thin">I'm Andrew, a determined and dedicated developer from Utah, I am currently working to finish a degree in Web and App Development at the Utah Valley University. I also have a great understanding of design methods and principles in addition to having intrigue in backend development. I am very eager to apply my skills to a great team and develop amazing websites and applications.</p>
</div>

<div class="hidden lg:block">

    <div class="flex">
        <div class="basis-6/12">
            <img src="aboutmePicture2.jpg" alt="" class="w-full">
        </div>
        
        <div class="basis-6/12">
            <div class="m-4 mt-8 flex justify-start">
                <div class="border border-cyan-500 rounded-full text-cyan-500 bg-cyan-950 px-4 py-1">About</div>
            </div>
        
            <div class="h-12">
                {#key i}
                    <h1 class="text-xl mb-2 px-4 absolute z-20 text-cyan-500" transition:fly={{ x: 300, duration: 2000 }}>
                        {messages[i] || ''}
                    </h1>
                {/key}
            </div>
            <p class="px-4 font-thin">I'm Andrew, a determined and dedicated developer from Utah, I am currently working to finish a degree in Web and App Development at the Utah Valley University. I also have a great understanding of design methods and principles in addition to having intrigue in backend development. I am very eager to apply my skills to a great team and develop amazing websites and applications.</p>
        </div>
    </div>

</div>

<!-- makes it fly 
    <script>
	import { fly } from 'svelte/transition';
	let visible = true;
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<p transition:fly={{ y: 200, duration: 2000 }}>
		Flies in and out
	</p>
{/if} -->