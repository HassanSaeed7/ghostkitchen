import confetti from "canvas-confetti";

var end = Date.now() + (2 * 1000);

var colors = ['#4F46E5', '#DEE647'];

export const frame = () => {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
};