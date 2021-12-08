<template>
  <div class="bg-gray-300 min-h-screen text-gray-700">
    <div class="container">
      <SiteHeader></SiteHeader>
      <div class="flex h-[500px]">
        <div class="w-1/2 flex flex-col justify-center items-center">
          <div class="w-full max-w-lg">
            <div class="text-4xl leading-tight mb-4 font-light text-yellow-700">The open source audiobook database</div>
            <div class="leading-loose">Get all the information you need on your favourite authors, series and audiobook, we even have an API for all you developers out there, so go crazy and make something amazing.</div>
            <div class="w-full flex relative mt-4"><input class="w-full bg-gray-200 rounded text-lg p-2 h-[55px] pl-8 pr-[110px]" type="text" name="s" value="" placeholder="Search for audiobook" /><button class="bg-green-600 rounded absolute right-1 top-1 bottom-1 text-white w-[110px]">Search</button></div>
          </div>
        </div>
        <div class="w-1/2 flex justify-center items-center">
          <img class="max-w-[280px] drop-shadow-md z-30 rounded-xl" src="https://m.media-amazon.com/images/I/51Nd6TO8kpL.jpg" />
          <img class="max-w-[240px] drop-shadow-md transform rotate-3 z-20 -ml-28 rounded-xl" src="https://m.media-amazon.com/images/I/81-QB8jnTjL.jpg" />
          <img class="max-w-[200px] drop-shadow-md mt-4 transform rotate-6 z-10 -ml-28 rounded-xl" src="https://m.media-amazon.com/images/I/51b6fvQr1-L._SL500_.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SiteHeader from '../components/SiteHeader'
export default {
  name: 'Index',
  components: {
    SiteHeader
  }
}
</script>
