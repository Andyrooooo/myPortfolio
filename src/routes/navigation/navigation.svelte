<script>
    import { createEventDispatcher } from "svelte"
    const dispatch = createEventDispatcher()

    let position = "transform: translateX(105%);"

    let menuOpen = false

    function toggleMenu() {
        position = position === 'transform: translateX(105%);' ? 'transform: translateX(0);' : 'transform: translateX(105%);'
        menuOpen = !menuOpen
    }

    function scrollHomeL() {
        dispatch('scrollHomeL')
    }

    function scrollAboutL() {
        dispatch('scrollAboutL')
    }

    function scrollProjectsL() {
        dispatch('scrollProjectsL')
    }

    function scrollHomeS() {
        toggleMenu()
        dispatch('scrollHomeS')
    }

    function scrollAboutS() {
        toggleMenu()
        dispatch('scrollAboutS')
    }

    function scrollProjectsS() {
        toggleMenu()
        dispatch('scrollProjectsS')
    }
</script>

<div class="lg:hidden ">
    
    {#if !menuOpen}
        <div class="w-full fixed top-0 z-30">
            <div class="flex border border-cyan-500 rounded-full px-2 py-2 mx-4 mt-4 bg-cyan-900 bg-opacity-80">
                <div class="basis-4/12 ">
                    <button on:click={toggleMenu} class="fa-solid fa-bars text-lg hover:text-cyan-50 rounded-full px-3 bg-cyan-950"></button>
                </div>

                <div class="basis-4/12">
                    <h1 class="text-center text-xl">Andrew Kester</h1>
                </div>

                <div class="basis-4/12 flex justify-end gap-4 pr-2">
                    <a class="fa-brands fa-linkedin text-lg hover:text-cyan-50" href="https://www.linkedin.com/in/andrew-j-kester/" target="_blank"></a>
                    <a class="fa-brands fa-github text-lg hover:text-cyan-50" href="https://github.com/Andyrooooo/" target="_blank"></a>
                    <a class="fa-solid fa-envelope text-lg hover:text-cyan-50" href="mailto:10919987@my.uvu.edu"></a>
                </div>
            </div>
        </div>
    {/if}

        <div class="bg-cyan-950 bg-opacity-95 fixed z-30 transition-all duration-400 h-full right-0 top-0 w-full shadow-md border border-cyan-500 rounded-b-sm" style={position}>
            
            <div class="flex border border-cyan-500 rounded-full px-2 py-2 mx-4 mt-4 bg-cyan-900 bg-opacity-80">
                <div class="basis-4/12">
                    <button on:click={toggleMenu} class="fa-solid fa-x text-lg hover:text-cyan-50 rounded-full px-2 bg-cyan-950 "></button>
                </div>

                <div class="basis-4/12">
                    <h1 class="text-center text-xl">Andrew Kester</h1>
                </div>

                <div class="basis-4/12 flex justify-end gap-4 pr-2">
                    <a class="fa-brands fa-linkedin text-lg hover:text-cyan-50" href="https://www.linkedin.com/in/andrew-j-kester/" target="_blank"></a>
                    <a class="fa-brands fa-github text-lg hover:text-cyan-50" href="https://github.com/Andyrooooo/" target="_blank"></a>
                    <a class="fa-solid fa-envelope text-lg hover:text-cyan-50" href="mailto:10919987@my.uvu.edu"></a>
                </div>
            </div>
            
            <!-- {/if} -->
            <div class="p-4 flex flex-col justify-between mt-4">
                <div class="text-cyan-100 hover:text-cyan-50">
                    <div class="highlight mb-4 font-bold">
                        <button on:click={scrollHomeS}>Home</button>
                        <div class="border-b-2 transition-all duration-300 border-cyan-50"></div>
                    </div>
                    <div class="highlight mb-4 font-bold">
                        <button on:click={scrollAboutS}>About</button>
                        <div class="border-b-2 transition-all duration-300 border-cyan-50"></div>
                    </div>
                    <div class="highlight mb-4 font-bold">
                        <a  class="" href="/resume">Resume</a>
                        <div class="border-b-2 transition-all duration-300 border-cyan-50"></div>
                    </div>
                    <div class="highlight mb-4 text-cyan-500 hover:text-cyan-600 font-bold">
                        <button on:click={scrollProjectsS}>Case Studies</button>
                        <div class="border-b-2 transition-all duration-300 border-cyan-600"></div>
                    </div>
                </div>
                
            </div>
        </div>

</div> <!-- End of mobile menu -->



<div class="hidden lg:block mt-4 fixed z-30 top-0 w-full">
    <div class="border border-cyan-500 rounded-full bg-cyan-900 opacity-80 mx-4">
        <div class="flex justify-between p-4">

            <nav class="basis-4/12">
                <ul class="flex">
                    <li class="mr-4 highlight hover:text-cyan-50">
                        <button on:click={scrollHomeL}>Home</button>
                        <div class="border-b-2 transition-all duration-300 border-cyan-50"></div>
                    </li>
        
                    <li class="mr-4 highlight hover:text-cyan-50">
                        <button on:click={scrollAboutL}>About</button>
                        <div class="border-b-2 transition-all duration-300 border-cyan-50"></div>
                    </li>
        
                    <li class="mr-4 highlight hover:text-cyan-50">
                        <a href="/resume">Resume</a>
                        <div class="border-b-2 transition-all duration-300 border-cyan-50"></div>
                    </li>
        
                    
                    <li class="mr-4 highlight">
                        <button on:click={scrollProjectsL} class="text-cyan-500 hover:text-cyan-600">Case Studies</button>
                        <div class="border-b-2 transition-all duration-300 border-cyan-600"></div>
                    </li>
                </ul>
            </nav>
    
            <div class="basis-4/12">
                <h1 class="text-center text-xl">Andrew Kester</h1>
            </div>
        
            <div class="basis-4/12 flex justify-end gap-4">
                <a class="fa-brands fa-linkedin text-lg hover:text-cyan-50" href="https://www.linkedin.com/in/andrew-j-kester/" target="_blank"></a>
                <a class="fa-brands fa-github text-lg hover:text-cyan-50" href="https://github.com/Andyrooooo/" target="_blank"></a>
                <a class="fa-solid fa-envelope text-lg hover:text-cyan-50" href="mailto:10919987@my.uvu.edu"></a>
            </div>
        </div>
    </div>
</div>

<style>
.highlight .border-b-2 {
    width: 0;
    opacity: 0;
}

.highlight:hover .border-b-2 {
    width: 100%; 
    opacity: 1;
}
</style>