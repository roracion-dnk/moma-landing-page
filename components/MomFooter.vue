<template>
  <footer class="bg-black py-12 text-white">
    <div class="mom-container">
      <div class="grid gap-10 md:grid-cols-4">
        <div>
          <img src="/images/mom-logo.png" alt="MOM Adelaide" class="h-16 w-auto bg-white p-2 rounded" />
          <p class="mt-4 text-sm text-white/60">
            Metro Outdoor Maintenance. Local driveway, lawn, path and patio refresh services.
          </p>
        </div>

        <div>
          <h4 class="font-black uppercase">Services</h4>
          <ul class="mt-4 space-y-2 text-sm text-white/70">
            <li>Driveway Cleaning</li>
            <li>Path & Patio Refresh</li>
            <li>Lawn Maintenance</li>
            <li>Outdoor Packages</li>
          </ul>
        </div>

        <div>
          <h4 class="font-black uppercase">Service Areas</h4>
          <p class="mt-4 text-sm text-white/70">
            Adelaide and nearby suburbs. Weekend bookings only.
          </p>
        </div>

        <div>
          <h4 class="font-black uppercase">Contact</h4>
          <ul class="mt-4 space-y-2 text-sm text-white/70">
            <li>0400 123 456</li>
            <li>hello@momadelaide.com.au</li>
            <li>Facebook: MOM Adelaide</li>
          </ul>
        </div>
      </div>

      <div class="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
        © {{ new Date().getFullYear() }} MOM Adelaide — Metro Outdoor Maintenance. All rights reserved.
      </div>
    </div>
  </footer>
</template>