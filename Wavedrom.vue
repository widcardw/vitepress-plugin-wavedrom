<template>
    <p ref="waveRef" style="font-family: var(--vp-font-family-mono);">{{ parentText }}</p>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, nextTick } from "vue";
import * as WaveDrom from 'wavedrom/wavedrom.unpkg';
import WaveSkin from "wavedrom/skins/default"
// (window as any).waveSkin = WaveSkin

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    parentText: {
        type: String,
        required: true
    }
})

const waveRef = ref(undefined)

const formatedText = props.parentText.replace(/([A-Za-z0-9]+?)([ ]*:[ ]*[\{\[\"0-9])/g, '"$1"$2')

nextTick(() => {
    WaveDrom.renderWaveElement(props.id, JSON.parse(formatedText), waveRef.value, WaveSkin)
})

</script>

