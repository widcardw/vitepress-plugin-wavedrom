<template>
    <p ref="waveRef" style="font-family: var(--vp-font-family-mono);">{{ parentText }}</p>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import WaveSkin from "wavedrom/skins/default"
import json5 from 'json5'
// (window as any).waveSkin = WaveSkin

const props = defineProps<{
    id: string,
    parentText: string
}>()

const waveRef = ref(undefined)

onMounted(async () => {
    const WaveDrom = (await import('wavedrom/wavedrom.unpkg')).default
    WaveDrom.renderWaveElement(props.id, json5.parse(props.parentText), waveRef.value, WaveSkin)
})
</script>

