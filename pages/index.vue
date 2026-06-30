<template>
  <main>
    <MomNav />
    <MomHero />

    <section id="services" class="py-16 bg-white">
      <div class="mom-container">
        <div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.25em] text-[#59682f]">
              Choose what you need
            </p>

            <h2 class="mt-3 text-4xl font-black uppercase leading-tight sm:text-5xl">
              Services & <span class="text-[#59682f]">Packages</span>
            </h2>

            <p class="mt-5 max-w-md text-neutral-600">
              Pick an individual service or bundle up and save. Every package includes a
              clear quote before work begins.
            </p>

            <div class="mt-8 space-y-5">
              <ServiceCard
                title="Driveway Deep Clean"
                description="High pressure washing to remove dirt, grime, oil stains and moss."
                icon="pressure"
              />

              <ServiceCard
                title="Path & Patio Refresh"
                description="Pressure clean small paths, patios, entryways and outdoor concrete."
                icon="patio"
              />

              <ServiceCard
                title="Standard Lawn Maintenance"
                description="Mowing, de-weeding and edge trimming for a cleaner front yard."
                icon="lawn"
              />
            </div>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <PackageCard
              label="Popular"
              title="Front Yard Refresh Package"
              price="$199"
              :items="['Driveway Deep Clean', 'Standard Lawn Maintenance']"
            />

            <PackageCard
              label="Best Value"
              title="Complete Outdoor Refresh Package"
              price="$299"
              :items="['Driveway Deep Clean', 'Path & Patio Refresh', 'Standard Lawn Maintenance']"
              featured
            />
          </div>
        </div>
      </div>
    </section>

    <section id="results" class="bg-[#111111] py-16 text-white">
      <div class="mom-container">
        <div class="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.25em] text-[#a7bd55]">
              Real results
            </p>
            <h2 class="mt-3 text-3xl font-black uppercase sm:text-4xl">
              Real satisfaction.
            </h2>
          </div>

          <a href="#quote" class="text-sm font-bold text-[#a7bd55] hover:underline">
            Request your quote →
          </a>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <BeforeAfterCard
            image="/images/mom_before_after_panel.jpg"
            title="Driveway Clean"
          />

          <BeforeAfterCard
            image="/images/patio-before-after.jpg"
            title="Path & Patio Refresh"
          />

          <BeforeAfterCard
            image="/images/lawn-before-after.jpg"
            title="Lawn Maintenance"
          />
        </div>
      </div>
    </section>

    <section id="why" class="py-16 bg-white">
      <div class="mom-container">
        <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.25em] text-[#59682f]">
              Why choose
            </p>
            <h2 class="mt-3 text-4xl font-black uppercase leading-tight">
              MOM Adelaide?
            </h2>
          </div>

          <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="item in whyItems" :key="item.title" class="rounded-2xl border border-neutral-200 p-5">
              <div class="text-2xl">{{ item.icon }}</div>
              <h3 class="mt-4 font-black uppercase">{{ item.title }}</h3>
              <p class="mt-2 text-sm text-neutral-600">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="how" class="py-16">
      <div class="mom-container">
        <div class="text-center">
          <p class="text-sm font-bold uppercase tracking-[0.25em] text-[#59682f]">
            How it works
          </p>
          <h2 class="mt-3 text-4xl font-black uppercase">
            Quick, simple, no fuss.
          </h2>
        </div>

        <div class="mt-10 grid gap-5 md:grid-cols-4">
          <div
            v-for="step in steps"
            :key="step.title"
            class="rounded-3xl bg-white p-6 text-center shadow-sm"
          >
            <div class="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#59682f] text-white font-black">
              {{ step.number }}
            </div>

            <h3 class="mt-5 font-black uppercase">{{ step.title }}</h3>
            <p class="mt-2 text-sm text-neutral-600">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="quote" class="bg-[#59682f] py-16 text-white">
      <div class="mom-container">
        <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.25em] text-[#d8e68a]">
              Ready to refresh your outdoors?
            </p>

            <h2 class="mt-3 text-4xl font-black uppercase leading-tight sm:text-5xl">
              Send photos for a quick quote.
            </h2>

            <p class="mt-5 max-w-lg text-white/80">
              Upload or send photos of your driveway, lawn, path, patio or outdoor area.
              I’ll reply with a clear quote and available weekend times.
            </p>
          </div>

          <QuoteForm />
        </div>
      </div>
    </section>

    <MomFooter />
  </main>
</template>

<script setup lang="ts">
const whyItems = [
  {
    icon: '📍',
    title: 'Local',
    text: 'Proudly servicing residential homes in Adelaide and nearby suburbs.'
  },
  {
    icon: '🛡️',
    title: 'Quality Work',
    text: 'Professional approach, tidy workmanship and clear scope before starting.'
  },
  {
    icon: '💵',
    title: 'Clear Pricing',
    text: 'No confusing rates. You get a clear quote before booking.'
  },
  {
    icon: '⏱️',
    title: 'Weekend Spots',
    text: 'Designed for weekend bookings that fit around busy households.'
  }
]

const steps = [
  {
    number: 1,
    title: 'Send Photos',
    text: 'Text or upload photos of your driveway, lawn, path or patio.'
  },
  {
    number: 2,
    title: 'Get A Quote',
    text: 'I’ll reply with a clear quote and available weekend times.'
  },
  {
    number: 3,
    title: 'Book Your Spot',
    text: 'Choose the service or package that suits your home.'
  },
  {
    number: 4,
    title: 'We Do The Work',
    text: 'Sit back and enjoy your refreshed outdoor space.'
  }
]
</script>