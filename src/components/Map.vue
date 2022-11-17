<script lang="ts">

export default {
  data() {
    return {
      count: 1
    }
  },
  mounted() {
    const canvas = document.getElementById('canvas') as any
    const ctx = canvas.getContext('2d')
    const base = new Image()
    base.onload = () => {
      const width = base.width
      const height = base.height
      canvas.width = width
      canvas.height = height
      ctx.drawImage(base, 0, 0, width, height)
    }
    base.src = '/map_modules/base_tile_map.png'
  }
}

</script>

<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

