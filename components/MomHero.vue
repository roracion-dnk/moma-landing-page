<template>
  <section class="relative overflow-hidden bg-white">
    <div class="mom-container grid min-h-[760px] gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div class="relative z-10">
        <!-- <div class="inline-flex items-center gap-2 rounded-full bg-[#eef3df] px-4 py-2 text-sm font-bold uppercase text-[#59682f]">
          <span>Limited Local Offer</span>
        </div> -->

        <h1 class="mt-8 text-6xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
          Weekend
          <span class="block text-[#59682f]">Outdoor</span>
          <span class="block">Refresh</span>
        </h1>

        <p class="mt-5 inline-block bg-[#59682f] px-4 py-2 text-xl font-black uppercase text-white">
          Driveway. Lawn. Car. Done.
        </p>

        <p class="mt-6 max-w-xl text-lg text-neutral-700">
          Professional outdoor cleaning and lawn maintenance to make your home look fresh,
          tidy and ready for the weekend.
        </p>

        <div class="mt-7 grid max-w-xl grid-cols-2 gap-3 text-sm font-bold sm:grid-cols-4">
          <div class="rounded-xl border border-neutral-200 bg-white p-3">
            Local & reliable
          </div>
          <div class="rounded-xl border border-neutral-200 bg-white p-3">
            Weekend bookings
          </div>
          <div class="rounded-xl border border-neutral-200 bg-white p-3">
            Upfront pricing
          </div>
          <div class="rounded-xl border border-neutral-200 bg-white p-3">
            Satisfaction focused
          </div>
        </div>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#quote"
            class="rounded-xl bg-[#59682f] px-7 py-4 text-center font-black uppercase text-white shadow-lg transition hover:bg-[#465326]"
          >
            Send Photos For A Quick Quote
          </a>

          <a
            href="#services"
            class="rounded-xl border border-neutral-300 bg-white px-7 py-4 text-center font-black uppercase transition hover:border-[#59682f] hover:text-[#59682f]"
          >
            View Packages
          </a>
        </div>

        <p class="mt-5 text-sm font-semibold text-neutral-700">
          🎁 Bonus: FREE basic car wash with selected packages.
        </p>
      </div>

      <div class="relative">
        <div class="absolute -right-8 -top-12 z-20 rounded-full border-4 border-white bg-[#59682f] px-8 py-10 text-center text-xl font-black uppercase text-white shadow-2xl rotate-6 w-44 h-44">
          Limited<br />Local<br />Offer
        </div>

        <div class="relative overflow-hidden rounded-[2rem] bg-neutral-100 shadow-2xl">
          <div class="grid grid-cols-2">
            <div class="relative">
              <img
                src="/images/mom_hero_before.jpg"
                alt="Before driveway clean"
                class="h-[620px] w-full object-cover brightness-75"
              />
              <span class="absolute bottom-5 left-5 rounded bg-black px-3 py-2 text-sm font-black uppercase text-white">
                Before
              </span>
            </div>

            <div class="relative">
              <img
                src="/images/mom_hero_after.jpg"
                alt="After driveway clean"
                class="h-[620px] w-full object-cover"
              />
              <span class="absolute bottom-5 right-5 rounded bg-[#59682f] px-3 py-2 text-sm font-black uppercase text-white">
                After
              </span>
            </div>
          </div>

          <div class="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-white"></div>

          <div class="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl font-black text-[#59682f] shadow-xl">
            ››
          </div>
        </div>
      </div>
    </div>
  </section>
</template>