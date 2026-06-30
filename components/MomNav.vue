<template>
  <header class="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
    <div class="mom-container flex h-20 items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img
          src="/images/MOMA-logo-light.svg"
          alt="MOM Adelaide"
          class="h-12 w-auto"
        />
      </NuxtLink>

      <nav class="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide md:flex">
        <a href="#services" class="hover:text-[#59682f]">Services</a>
        <a href="#results" class="hover:text-[#59682f]">Results</a>
        <a href="#why" class="hover:text-[#59682f]">Why Us</a>
        <a href="#how" class="hover:text-[#59682f]">How It Works</a>
      </nav>

      <a
        href="#quote"
        class="rounded-lg bg-[#59682f] px-5 py-3 text-sm font-black uppercase text-white shadow-sm transition hover:bg-[#465326]"
      >
        Get A Quote
      </a>
    </div>
  </header>
</template>