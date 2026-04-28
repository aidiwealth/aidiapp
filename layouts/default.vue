<template>
  <div class="default-layout">
    <slot />
  </div>
</template>

<script setup>
// Default layout — a bare passthrough used only when a page does not
// declare a specific layout. Today every page declares its layout
// explicitly (landing / internal / client), so nothing routes here.
// Kept as a safety net.
</script>
