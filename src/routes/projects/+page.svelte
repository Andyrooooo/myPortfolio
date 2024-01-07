<script>
    import { images } from './images.js'

    let defaultPositionS = 150
    let amountS = 75
    let endPositionS = -650

    let defaultPositionL = 250
 
    function scrollRightS() {
        defaultPositionS -= amountS
        if (defaultPositionS >= endPositionS) {
            return
        } else {
            defaultPositionS = endPositionS
        }
    }

    function scrollLeftS() {
        defaultPositionS += amountS
        if (defaultPositionS <= amountS) {
            return
        } else {
            defaultPositionS = amountS
        }
    }

    function scrollRightL() {
        defaultPositionL -= 175

        if (defaultPositionL >= -550) {
            return
        } else {
            defaultPositionL = -550
        }
    }

    function scrollLeftL() {
        defaultPositionL += 175

        if (defaultPositionL <= 175) {
            return
        } else {
            defaultPositionL = 250
        }
    }
</script>


<div class=""> <!-- pb-8 -->

    <div class="flex items-center overflow-hidden">
        <!-- <div class="overflow-hidden"> -->
        <div class="absolute z-10 lg:hidden">
            <button 
            on:click={scrollLeftS}
            class="fa-solid fa-chevron-left text-cyan-500 text-xl bg-cyan-900 rounded-full opacity-80 px-2 md:px-4 md:py-2">
            </button>
        </div>

        <div class="absolute z-10 hidden lg:block 2xl:hidden">
            <button 
            on:click={scrollLeftL}
            class="fa-solid fa-chevron-left text-cyan-500 text-xl bg-cyan-900 rounded-full opacity-80 lg:px-6 lg:py-4">
            </button>
        </div>

        <div class="whitespace-nowrap transition-all duration-300 w-3/12 lg:hidden" style="transform: translateX({defaultPositionS}%)">
            {#each images as image}
                <div class="inline-block mr-2">
                    <div class="relative selected">
                        <img src={image.src} alt={image.alt} class="rounded-lg border-2 border-cyan-500 shadow-lg">
                        <a href={image.link} target="_blank" class="rounded-lg title absolute inset-0 flex items-center justify-center transition-all duration-300 w-full">
                            {#if image.type === 1}
                                <div class="sm:hidden">
                                    <h1 class="text-2xs">Coming Soon</h1>
                                </div>
                                <div class="hidden sm:block md:hidden">
                                    <h1 class="text-xs">Coming Soon</h1>
                                </div>
                                <div class="hidden md:block lg:hidden">
                                    <h1 class="text-md">Coming Soon</h1>
                                </div>
                            {:else}
                                <div class="sm:hidden">
                                    <h1 class="text-2xs ">{image.title}</h1>
                                    <h1 class="text-2xs text-center text-cyan-500">{image.year}</h1>
                                </div>
                                <div class="hidden sm:block md:hidden">
                                    <h1 class="text-xs">{image.title}</h1>
                                    <h1 class="text-xs text-center text-cyan-500">{image.year}</h1>
                                </div>
                                <div class="hidden md:block lg:hidden">
                                    <h1 class="text-md">{image.title}</h1>
                                    <h1 class="text-md text-center text-cyan-500">{image.year}</h1>
                                </div>
                            {/if}
                        </a>
                    </div>
                    
                    <div class="mt-2">
                        {#if image.type === 1}
                            <h1 class="ml-2 text-xs text-center">Case Study</h1>
                        {:else}
                            <div class="flex gap-2 justify-center">
                                <div class="py-1 px-2 {image.type} rounded-full"></div>
                                <h1 class="text-xs">{image.type}</h1>
                            </div>
                            <!-- {#if image.typeTwo} 
                                <div class="mt-2 ml-2 flex gap-2">
                                    <div class="py-1 px-2 {image.typeTwo} rounded-full"></div>
                                    <h1 class="text-xs">{image.typeTwo}</h1>
                                </div>
                            {/if}
                            {#if image.typeThree} 
                                <div class="mt-2 ml-2 flex gap-2">
                                    <div class="py-1 px-2 {image.typeThree} rounded-full"></div>
                                    <h1 class="text-xs">{image.typeThree}</h1>
                                </div>
                            {/if} -->
                        {/if}
                    </div>
                </div>
                
            {/each}
        </div> <!-- Small and medium screens -->

        <div class="hidden lg:block whitespace-nowrap transition-all duration-300 w-2/12 2xl:hidden" style="transform: translateX({defaultPositionL}%)">
            {#each images as image}
                <div class="inline-block mr-2">
                    <div class="relative selected">
                        <img src={image.src} alt={image.alt} class="rounded-lg border-2 border-cyan-500 shadow-lg">
                        <a href={image.link} target="_blank" class="rounded-lg title absolute inset-0 flex items-center justify-center transition-all duration-300 w-full">
                            {#if image.type === 1}
                                <div class="hidden lg:block xl:hidden">
                                    <h1 class="text-sm text-center">Coming Soon</h1>
                                </div>
                                <div class="hidden xl:block 2xl:hidden">
                                    <h1 class="text-lg text-center">Coming Soon</h1>
                                </div>
                            {:else}
                                <div class="hidden lg:block xl:hidden">
                                    <h1 class="text-sm">{image.title}</h1>
                                    <h1 class="text-sm text-center text-cyan-500">{image.year}</h1>
                                </div>
                                <div class="hidden xl:block 2xl:hidden">
                                    <h1 class="text-lg">{image.title}</h1>
                                    <h1 class="text-lg text-center text-cyan-500">{image.year}</h1>
                                </div>
                            {/if}
                        </a>
                    </div>
                    
                    <div class="mt-2">
                        {#if image.type === 1}
                            <h1 class="ml-2 text-xs text-center">Case Study</h1>
                        {:else}
                            <div class="flex gap-2 justify-center">
                                <div class="py-1 px-2 {image.type} rounded-full"></div>
                                <h1 class="text-xs">{image.type}</h1>
                            </div>
                            <!-- {#if image.typeTwo} 
                                <div class="mt-2 ml-2 flex gap-2">
                                    <div class="py-1 px-2 {image.typeTwo} rounded-full"></div>
                                    <h1 class="text-xs">{image.typeTwo}</h1>
                                </div>
                            {/if}
                            {#if image.typeThree} 
                                <div class="mt-2 ml-2 flex gap-2">
                                    <div class="py-1 px-2 {image.typeThree} rounded-full"></div>
                                    <h1 class="text-xs">{image.typeThree}</h1>
                                </div>
                            {/if} -->
                        {/if}
                    </div>
                </div>
                
            {/each}
        </div> <!-- Large Screens -->
            
        <div class="absolute z-10 right-4 lg:hidden">
            <button 
            on:click={scrollRightS}
            class="fa-solid fa-chevron-right text-cyan-500 text-xl bg-cyan-900 rounded-full opacity-80 px-2 md:px-4 md:py-2">
            </button>
        </div>
        <div class="absolute z-10 right-4 hidden lg:block 2xl:hidden">
            <button 
            on:click={scrollRightL}
            class="fa-solid fa-chevron-right text-cyan-500 text-xl bg-cyan-900 rounded-full opacity-80 lg:px-6 lg:py-4">
            </button>
        </div>
    </div>

    <div class="hidden 2xl:inline-flex transition-all duration-300 justify-center gap-4">
        {#each images as image}
            <div>
                <div class="relative selected">
                    <img src={image.src} alt={image.alt} class="rounded-lg border-2 border-cyan-500 shadow-lg">
                    <a href={image.link} target="_blank" class="rounded-lg title absolute inset-0 flex items-center justify-center transition-all duration-300 w-full">
                        {#if image.type === 1}
                            <h1 class="text-center text-md">Coming Soon</h1>
                        {:else}
                            <div class="hidden 2xl:block text-center">
                                <h1 class="text-md">{image.title}</h1>
                                <h1 class="text-md text-center text-cyan-500">{image.year}</h1>
                            </div>
                        {/if}
                    </a>
                </div>

                <div class="mt-2">
                    {#if image.type === 1}
                        <h1 class="ml-2 text-xs text-center">Case Study</h1>
                    {:else}
                        <div class="flex gap-2 justify-center">
                            <div class="py-1 px-2 {image.type} rounded-full"></div>
                            <h1 class="text-xs">{image.type}</h1>
                        </div>
                        <!-- {#if image.typeTwo} 
                            <div class="mt-2 ml-2 flex gap-2">
                                <div class="py-1 px-2 {image.typeTwo} rounded-full"></div>
                                <h1 class="text-xs">{image.typeTwo}</h1>
                            </div>
                        {/if}
                        {#if image.typeThree} 
                            <div class="mt-2 ml-2 flex gap-2">
                                <div class="py-1 px-2 {image.typeThree} rounded-full"></div>
                                <h1 class="text-xs">{image.typeThree}</h1>
                            </div>
                        {/if} -->
                    {/if}
                </div>
            </div>
        {/each}
    </div> <!-- Extra Large Screens -->
</div>

<style>
    .selected .title{
        opacity: 0;
    }

    .selected:hover .title{
        opacity: 100;
        background: rgb(0, 0, 0, 0.8);
    }

    .Svelte {
        background: #FF3E00;
    }
    .JavaScript {
        background: #F0DB4F;
    }
    .React {
        background: #00D8FF;
    }
    .Node {
        background: #90C53F;
    }
    .TypeScript {
        background: #2F76C4;
    }
    .Vue {
        background: #41B883;
    }
</style>




<!-- 
    <div class="whitespace-nowrap transition-all duration-300" style="transform: translateX({defaultPosition}%)">
            {#each images as image}
                <div class="selected relative inline-block w-4/12 mr-2 shadow-lg">
                    <img src={image.src} alt={image.alt} class="rounded-lg border-2 border-primaryl50 shadow-lg">
                    <a href={image.link} class="rounded-lg title absolute inset-0 flex items-center justify-center transition-all duration-300 w-full">
                        <div class="">
                            {#if image.title.length <= 20}
                                <h1 class="text-white text-center text-md">{image.title}</h1>
                            {:else}
                                {#each characterSize(image.title) as characterPiece}
                                    <h1 class="text-white text-center text-md">{characterPiece}</h1>
                                {/each}
                            {/if}
                            <p class="text-gray-400 text-center font-bold">{image.year}</p>
                        </div>
                    </a>
                </div>
            {/each}
        </div> 
-->



<!-- 
// function characterSizeSmall(title) {
    //     let characterLimit = 23
    //     let characterPieces = []

    //     for (let i = 0; i < title.length; i += characterLimit) {
    //         characterPieces.push(title.slice(i, i + characterLimit))
    //     }

    //     return characterPieces 
    // }

    // function characterSizeMedium(title) {
    //     let characterLimit = 30
    //     let characterPieces = []

    //     for (let i = 0; i < title.length; i += characterLimit) {
    //         characterPieces.push(title.slice(i, i + characterLimit))
    //     }

    //     return characterPieces 
    // } -->