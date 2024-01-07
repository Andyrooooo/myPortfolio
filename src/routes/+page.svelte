<script>
	import Navigation from './navigation/navigation.svelte'
	import { fly } from 'svelte/transition'
	import About from './about/+page.svelte'
	import Projects from './projects/+page.svelte'
	

	let stationary = true
	let stationaryTwo = true
	let homeL
	let homeS
	let aboutL 
	let aboutS
	let projectsL
	let projectsS

	function goToResume() {
		stationaryTwo = false
		setTimeout(() => {
			window.location.href = '/resume'
		}, 200)
	}

	function scrollToHomeL() {
		homeL.scrollIntoView({ behavior: 'smooth' })
	}

	function scrollToHomeS() {
		homeS.scrollIntoView({ behavior: 'smooth' })
	}

	function scrollToAboutL() {
		aboutL.scrollIntoView({ behavior: 'smooth' })
	}

	function scrollToAboutS() {
		aboutS.scrollIntoView({ behavior: 'smooth' })
	}

	function scrollToProjectsL() {
		projectsL.scrollIntoView({ behavior: 'smooth' })
	}

	function scrollToProjectsS() {
		projectsS.scrollIntoView({ behavior: 'smooth' })
	}
</script>


<Navigation on:scrollHomeL={scrollToHomeL} on:scrollHomeS={scrollToHomeS} on:scrollAboutS={scrollToAboutS} on:scrollAboutL={scrollToAboutL} on:scrollProjectsS={scrollToProjectsS} on:scrollProjectsL={scrollToProjectsL}/>

<div class="lg:hidden min-w-32" bind:this={homeS}>
	<div class="relative flex">
		<img src="backgroundImage5.jpg" alt="Desert Hot Springs - Suculant" class="w-6/12">
		<img src="backgroundImage6.jpg" alt="Desert Hot Springs - Suculant" class="w-6/12">
		<div class="absolute bg-black w-full h-full z-10 top-0 opacity-80"></div>
	</div>


	<div class="absolute z-20 top-0">

		<div class="flex justify-center h-5/6 items-center m-4 mt-20">
			<div class="lg:basis-6/12">
				<div class="mb-16 mt-4">
					<h2 class="text-4xl text-center lg:text-left">Web and App Developer</h2>
				</div>
	
				<div class="mb-4">
					<p class="font-thin">Hello, I'm a Developer at Utah Valley University. I have Great determination to get any job done and ensure I learn from every experience to come out better than before. I have a strong understanding of CSS, HTML, and JavaScript with an great understanding of various Web tools, libraries, and frameworks. So, check out my page, stay a while, and see what I have accomplished!</p>
				</div>
	
				<div class="flex justify-center lg:justify-start mb-8">
					<button on:click={scrollToProjectsS} class="text-cyan-500 hover:text-cyan-50 border border-cyan-500 hover:bg-cyan-500 py-2 px-4 rounded-sm transition-all duration-500">
						Projects & Case Studies
						<i class="fa-solid fa-chevron-right text-sm ml-2"></i>
					</button>
	
					<button on:click={goToResume} class="text-cyan-50 hover:text-cyan-500 border border-cyan-500 bg-cyan-500 hover:bg-inherit py-2 px-4 rounded-sm transition-all duration-500 ml-4">
						Resume
						{#if stationaryTwo}
						<i transition:fly={{ x: 200, duration: 1000 }} class="fa-solid fa-chevron-right text-sm ml-2"></i>
						{/if}
					</button>
				</div>
	
			</div>
		</div>
	</div>

	<div bind:this={aboutS}>
		<About />
	</div>

	<div class="mx-4 pb-24 bgBorderBot" bind:this={projectsS}>
		<div class="mb-24 pb-2 flex justify-start bgBorderTop pt-8">
			<div class="border border-cyan-500 rounded-full text-cyan-500 bg-cyan-950 px-4 py-1">Projects</div>
			<div class="border border-cyan-500 rounded-full text-cyan-500 bg-cyan-950 px-4 py-1 ml-4">Case Studies</div>
		</div>

		<Projects />
	</div>

	<div class="flex justify-center my-12">
		<img src="portfolio_logo2.png" alt="Andrew's first and last inital" class="w-1/12 rounded-md shadow-md border border-cyan-100 p-2">
	</div>

	<div class="relative gap-4 py-8 pt-9">

		<div class="absolute flex top-0 bg-gradient-to-r from-cyan-950 via-cyan-900 to-cyan-950 opacity-20 z-0 w-full h-full"></div>

		<div class="absolute top-5 z-10 flex justify-center w-full gap-4">
			<div class=""><!-- border-t border-b border border-cyan-950  -->
				<button on:click={scrollToHomeS} class="text-sm hover:text-cyan-50">Home</button>
			</div>
	
			<div class="">
				<button on:click={scrollToAboutS} class="text-sm hover:text-cyan-50">About</button>
			</div>
	
			<div class="">
				<a href="/resume" class="text-sm hover:text-cyan-50">Resume</a>
			</div>
			
			<div class="">
				<button on:click={scrollToProjectsS} class="text-sm text-cyan-500 hover:text-cyan-600">Case Studies</button>
			</div>
		</div>
		
	</div>

	<div class="flex justify-center gap-4 pt-4 pb-2">
		<a class="fa-brands fa-linkedin text-lg hover:text-cyan-50" href="https://www.linkedin.com/in/andrew-j-kester/" target="_blank"></a>
		<a class="fa-brands fa-github text-lg hover:text-cyan-50" href="https://github.com/Andyrooooo/" target="_blank"></a>
		<a class="fa-solid fa-envelope text-lg hover:text-cyan-50" href="mailto:10919987@my.uvu.edu"></a>
	</div>

	<p class="text-center text-sm mb-4">&#169; 2024 Andrew Kester</p>
</div>



<div class="hidden lg:block" bind:this={homeL}>
	
	<div class="relative z-0">
		<div class="absolute bg-black w-full h-full z-10 top-0 opacity-80"></div>

		<!-- <video autoplay loop muted playsinline class="top-0 md:w-full md:h-full"> 
			<source type="video/mp4" src="backgroundVideo.mp4" class="h-full"/>
		</video> -->

		<div class="top-0 lg:w-full">
			<img src="backgroundImage4.jpg" alt="Desert Hot Springs - Suculant" class="w-full">
		</div>
	
		<div class="absolute z-20 top-20 lg:h-full lg:w-full">
			
			<div class="mx-4 h-4/6 flex justify-center items-center">
				<div class="md:flex">
					<div class="flex justify-center mb-4 md:basis-6/12 items-center">
						<img src="profilePicture2.jpg" alt="Andrew smiling at the camera" class="rounded-full w-40 h-40 shadow-lg shadow-gray-800 ring-1 ring-cyan-500 md:w-60 md:h-60">
					</div>
		
					<div class="md:basis-6/12">
						<div class="mb-16">
							<h2 class="text-4xl text-center md:text-left">Web and App Developer</h2>
						</div>
			
						<div class="mb-4">
							<p class="font-thin">Hello, I'm a Developer at Utah Valley University. I have Great determination to get any job done and ensure I learn from every experience to come out better than before. I have a strong understanding of CSS, HTML, and JavaScript with an great understanding of various Web tools, libraries, and frameworks. So, check out my page, stay a while, and see what I have accomplished!</p>
						</div>
		
						<div class="flex justify-center lg:justify-start">
							<button on:click={scrollToProjectsL} class="text-cyan-500 hover:text-cyan-100 font-bold border-2 border-cyan-500 hover:bg-cyan-500 py-2 px-4 rounded-sm transition-all duration-500">
								Projects & Case Studies
								<i class="fa-solid fa-chevron-right text-sm ml-2"></i>
							</button>

							<button on:click={goToResume} class="text-cyan-100 hover:text-cyan-500 font-bold border-2 border-cyan-500 bg-cyan-500 hover:bg-inherit py-2 px-4 rounded-sm transition-all duration-500 ml-4">
								Resume
								{#if stationaryTwo}
								<i transition:fly={{ x: 200, duration: 1000 }} class="fa-solid fa-chevron-right text-sm ml-2"></i>
								{/if}
							</button>
						</div>
		
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="" bind:this={aboutL}>
		<About />
	</div>

	<div class="mx-4 pb-24 bgBorderBot" bind:this={projectsL}>
		<div class="mb-24 pb-2 flex justify-start bgBorderTop pt-8">
			<div class="border border-cyan-500 rounded-full text-cyan-500 bg-cyan-950 px-4 py-1">Projects</div>
			<div class="border border-cyan-500 rounded-full text-cyan-500 bg-cyan-950 px-4 py-1 ml-4">Case Studies</div>
		</div>

		<Projects />
	</div>

	<div class="flex justify-center my-12">
		<img src="portfolio_logo2.png" alt="Andrew's first and last inital" class="w-1/24 rounded-md shadow-md border border-cyan-100 p-2">
	</div>

	<div class="relative gap-4 py-8 pt-9">

		<div class="absolute flex top-0 bg-gradient-to-r from-cyan-950 via-cyan-900 to-cyan-950 opacity-20 z-0 w-full h-full"></div>

		<div class="absolute top-5 z-10 flex justify-center w-full gap-4">
			<div class=""><!-- border-t border-b border border-cyan-950  -->
				<button on:click={scrollToHomeL} class="text-sm hover:text-cyan-50">Home</button>
			</div>
	
			<div class="">
				<button on:click={scrollToAboutL} class="text-sm hover:text-cyan-50">About</button>
			</div>
	
			<div class="">
				<a href="/resume" class="text-sm hover:text-cyan-50">Resume</a>
			</div>
			
			<div class="">
				<button on:click={scrollToProjectsL} class="text-sm text-cyan-500 hover:text-cyan-600">Case Studies</button>
			</div>
		</div>
		
	</div>

	<div class="flex justify-center gap-4 pt-4 pb-2">
		<a class="fa-brands fa-linkedin text-lg hover:text-cyan-50" href="https://www.linkedin.com/in/andrew-j-kester/" target="_blank"></a>
		<a class="fa-brands fa-github text-lg hover:text-cyan-50" href="https://github.com/Andyrooooo/" target="_blank"></a>
		<a class="fa-solid fa-envelope text-lg hover:text-cyan-50" href="mailto:10919987@my.uvu.edu"></a>
	</div>

	<p class="text-center text-sm mb-4">&#169; 2024 Andrew Kester</p>
</div>


<style>
.bgBorderBot {
	border-bottom: 1px solid rgb(8, 47, 73, 0.5);
}
.bgBorderTop {
	border-top:  1px solid rgb(8, 47, 73, 0.5);
}
</style>