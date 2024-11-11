<script>
 import "../app.css";
 import { base } from '$app/paths'
 import IoCevronUpCircleArrow from "$lib/icons/ioCevronUpCircleArrow.svelte";
 let { children } = $props();
</script>

<svelte:head>
    <meta name="robots" content="index, follow"/>
    <meta name="googlebot" content="index, follow"/>
</svelte:head>

<div class='flex flex-col min-h-screen bg-blue-100'>
    <header class='bg-blue-800 mb-0 md:mb-8 py-1 text-gray-200 md:sticky top-0 left-0 right-0 drop-shadow-lg shadow-blue-900 z-10'>
        <div class='container mx-auto flex flex-col md:flex-row gap-x-12 items-center justify-center'>
            <a class="nav-btn font-semibold text-lg" href={base + '/'}>HCI deadlines</a>
            <a class="nav-btn" href="https://ovi.ok.ubc.ca">OVI lab</a>
        </div >
    </header >
    <main class='container mx-auto flex-1'>
        {@render children?.()}
    </main>
    <div class="fixed bottom-6 right-4 drop-shadow-lg z-50 shadow-blue-900" >
        <button onclick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <IoCevronUpCircleArrow class="fill-slate-800 hover:fill-slate-500 stroke-slate-200"/>
        </button>
    </div>
    <footer class='bg-blue-800 mt-8 py-4 text-blue-100 drop-shadow-lg shadow-gray-900'>
        <div class='container mx-auto flex justify-center text-sm'>
                    &copy; 2024 UBCO OVI-lab
        </div>
    </footer>
</div >
