<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const canvas = ref<HTMLCanvasElement>();
let animationFrame = 0;
let resizeObserver: ResizeObserver | undefined;

type Particle = {
  x: number;
  y: number;
  radius: number;
  velocityX: number;
  velocityY: number;
  phase: number;
  pulseSpeed: number;
  opacity: number;
};

onMounted(() => {
  if (!canvas.value) return;
  const context = canvas.value.getContext('2d');
  if (!context) return;

  const element = canvas.value;
  const rootStyles = getComputedStyle(document.documentElement);
  const accentRgb = rootStyles.getPropertyValue('--color-accent-rgb').trim();
  const iceRgb = rootStyles.getPropertyValue('--color-ice-rgb').trim();
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let particles: Particle[] = [];
  let previousTime = 0;

  const resize = () => {
    const bounds = element.getBoundingClientRect();
    const pixelRatio = Math.min(devicePixelRatio, 2);
    element.width = Math.round(bounds.width * pixelRatio);
    element.height = Math.round(bounds.height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const particleCount = Math.max(32, Math.min(90, Math.round(bounds.width * bounds.height / 9500)));
    particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * bounds.width,
      y: Math.random() * bounds.height,
      radius: .8 + Math.random() * 1.7,
      velocityX: (Math.random() < .5 ? -1 : 1) * (2 + Math.random() * 3),
      velocityY: (Math.random() < .5 ? -1 : 1) * (1.5 + Math.random() * 2.5),
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: .35 + Math.random() * .45,
      opacity: .3 + Math.random() * .42
    }));
  };

  const draw = (time: number) => {
    const width = element.clientWidth;
    const height = element.clientHeight;
    const elapsed = time / 1000;
    const delta = previousTime ? Math.min((time - previousTime) / 1000, .05) : 0;
    previousTime = time;
    context.clearRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      if (!reducedMotion) {
        particle.x = (particle.x + particle.velocityX * delta + width) % width;
        particle.y = (particle.y + particle.velocityY * delta + height) % height;
      }

      const pulse = Math.sin(elapsed * particle.pulseSpeed + particle.phase);
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius * (1 + pulse * .14), 0, Math.PI * 2);
      context.fillStyle = `rgba(${index % 5 === 0 ? accentRgb : iceRgb}, ${particle.opacity * (1 + pulse * .16)})`;
      context.fill();
    });

    if (!reducedMotion) animationFrame = requestAnimationFrame(draw);
  };

  resizeObserver = new ResizeObserver(() => {
    resize();
    if (reducedMotion) draw(0);
  });
  resizeObserver.observe(element);
  resize();
  draw(0);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrame);
  resizeObserver?.disconnect();
});
</script>

<template>
  <canvas ref="canvas" class="hero-particles" aria-hidden="true"></canvas>
</template>