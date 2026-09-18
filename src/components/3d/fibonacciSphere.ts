// Evenly distributes `samples` points across a sphere of `radius`, used to
// place the ten ecosystem nodes around the core without visual clustering.
export function fibonacciSphere(
  samples: number,
  radius: number
): [number, number, number][] {
  const points: [number, number, number][] = [];
  const offset = 2 / samples;
  const increment = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < samples; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    points.push([x * radius, y * radius, z * radius]);
  }

  return points;
}
