---
name: algorithmic-art
description: >
  Create algorithmic generative art using p5.js with seeded randomness and interactive parameter exploration.
  Use when users request generative art, algorithmic art, creative coding, flow fields, particle systems,
  or computational art. Outputs an interactive HTML artifact with parameter controls. Keywords: generative art,
  p5.js, algorithmic, flow field, particle system, creative coding, computational art, procedural art.
---

# Algorithmic Art

Create algorithmic generative art using p5.js — self-contained interactive HTML artifacts with parameter controls and seed navigation.

## Process

Every piece follows this creative pipeline:

1. **Interpret** the user's intent — what aesthetic, mood, or concept?
2. **Create an Algorithmic Philosophy** — a 4-6 paragraph computational worldview describing the generative approach
3. **Implement** in p5.js — build the algorithm expressing the philosophy
4. **Design parameters** — what should be tunable? (quantities, scales, speeds, thresholds)
5. **Build UI controls** — sliders and inputs for all parameters

## Output Format

One self-contained HTML file containing:
- p5.js loaded from CDN
- The generative algorithm (setup/draw/classes)
- Sidebar with: Seed navigation + Parameter controls + Action buttons
- Everything works immediately in any browser or claude.ai artifacts

## Algorithmic Philosophy Creation

Before coding, write a 4-6 paragraph philosophy:

```markdown
# [Movement Name] — e.g., "Organic Turbulence"

[Paragraph 1: Core philosophical idea — what computational truth does this art reveal?]

[Paragraph 2: How does randomness and order interact in this system?]

[Paragraph 3: What forces, behaviors, or mathematical relationships drive the visual?]

[Paragraph 4: How does time/animation express the underlying process?]

[Paragraph 5: Why does this algorithm feel inevitable and meticulously crafted?]
```

## HTML Artifact Structure

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js"></script>
  <style>
    body { display: flex; margin: 0; font-family: Arial, sans-serif; background: #faf9f5; }
    #canvas-container { flex: 1; }
    #sidebar { width: 280px; padding: 20px; background: #fff; border-left: 1px solid #e8e6dc; overflow-y: auto; }
    .control-group { margin-bottom: 16px; }
    label { display: block; font-size: 12px; color: #141413; margin-bottom: 4px; }
    input[type=range] { width: 100%; }
    .value-display { font-size: 11px; color: #b0aea5; }
    button { width: 100%; padding: 8px; margin-bottom: 8px; background: #d97757; color: white; border: none; border-radius: 4px; cursor: pointer; }
    button:hover { background: #c4674a; }
    h3 { font-size: 13px; color: #141413; border-bottom: 1px solid #e8e6dc; padding-bottom: 8px; }
  </style>
</head>
<body>
  <div id="canvas-container"></div>
  <div id="sidebar">
    <h3>Seed</h3>
    <div class="control-group">
      <span id="seed-display">Seed: 1</span><br>
      <button onclick="prevSeed()">← Prev</button>
      <button onclick="nextSeed()">Next →</button>
      <button onclick="randomSeed_()">Random</button>
    </div>

    <h3>Parameters</h3>
    <!-- VARIABLE: Add parameter controls here -->
    <div class="control-group">
      <label>Particle Count</label>
      <input type="range" id="count" min="100" max="2000" step="100" value="500"
             oninput="params.count=+this.value; document.getElementById('count-val').textContent=this.value; regenerate()">
      <span class="value-display" id="count-val">500</span>
    </div>

    <h3>Actions</h3>
    <button onclick="regenerate()">Regenerate</button>
    <button onclick="resetParams()">Reset</button>
    <button onclick="saveCanvas('art', 'png')">Download PNG</button>
  </div>

  <script>
    let seed = 1;
    let params = { count: 500, speed: 1.0, noiseScale: 0.003 };

    function prevSeed() { seed = Math.max(1, seed-1); document.getElementById('seed-display').textContent='Seed: '+seed; regenerate(); }
    function nextSeed() { seed++; document.getElementById('seed-display').textContent='Seed: '+seed; regenerate(); }
    function randomSeed_() { seed=Math.floor(Math.random()*10000); document.getElementById('seed-display').textContent='Seed: '+seed; regenerate(); }
    function regenerate() { redraw(); }
    function resetParams() { /* reset sliders to defaults */ }

    // YOUR p5.js ALGORITHM BELOW
    function setup() {
      let canvas = createCanvas(800, 800);
      canvas.parent('canvas-container');
      randomSeed(seed);
      noiseSeed(seed);
      background(10, 10, 40);
      noLoop(); // or loop() for animated
    }

    function draw() {
      randomSeed(seed);
      noiseSeed(seed);
      // YOUR GENERATIVE ALGORITHM HERE
    }
  </script>
</body>
</html>
```

## Animation Primitives

### Flow Field (Perlin Noise)
```javascript
// Particle following noise-driven vector field
class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.life = 255;
  }
  update() {
    let angle = noise(this.pos.x * params.noiseScale, this.pos.y * params.noiseScale) * TWO_PI * 4;
    this.acc = p5.Vector.fromAngle(angle).mult(params.speed);
    this.vel.add(this.acc).limit(3);
    this.pos.add(this.vel);
    this.life -= 2;
  }
  draw() {
    stroke(255, 200, 100, this.life);
    point(this.pos.x, this.pos.y);
  }
  isDead() { return this.life <= 0 || this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height; }
}
```

### Recursive Branching (L-Systems)
```javascript
function branch(x, y, angle, len, depth) {
  if (depth === 0 || len < 2) return;
  let x2 = x + cos(angle) * len;
  let y2 = y + sin(angle) * len;
  strokeWeight(depth * 0.5);
  line(x, y, x2, y2);
  let spread = random(0.3, 0.7);
  branch(x2, y2, angle - spread, len * 0.72, depth - 1);
  branch(x2, y2, angle + spread, len * 0.72, depth - 1);
}
```

### Voronoi / Stippling
```javascript
// Weighted random point placement creating organic texture
let points = Array.from({length: params.count}, () => ({
  x: randomGaussian(width/2, width/4),
  y: randomGaussian(height/2, height/4)
}));
points.forEach(p => {
  let sz = random(1, 4);
  fill(255, random(100,200));
  ellipse(p.x, p.y, sz, sz);
});
```

## Philosophy Examples

**"Organic Turbulence"**: Chaos constrained by natural law. Flow fields driven by layered Perlin noise. Thousands of particles following vector forces, accumulating into organic density maps. Color emerges from velocity and density.

**"Quantum Harmonics"**: Discrete entities exhibiting wave-like interference. Particles initialized on a grid, phases interfering — constructive interference creates bright nodes, destructive creates voids.

**"Recursive Whispers"**: Self-similarity across scales. Branching structures subdividing recursively, constrained by golden ratios. Each branch slightly randomized, line weights diminishing with recursion.

## Best Practices

- **Always seed randomness**: `randomSeed(seed)` and `noiseSeed(seed)` — same seed must produce identical output
- **Composable parameters**: Extract magic numbers into `params` object with descriptive names
- **Performance**: Use `noLoop()` for static art; use `frameRate(30)` for smooth animation
- **Color harmony**: Build palettes deliberately — 3-5 colors maximum for visual coherence
- **The algorithm flows from the philosophy** — don't pick a pattern menu, express the idea

## Example

**Input**: "Create algorithmic art inspired by ocean waves"

**Output**:
1. Philosophy: "Coastal Resonance" — oscillating systems where periodic motion creates apparent randomness. Sine waves at different frequencies interfere, creating moiré-like patterns that recall both mathematical certainty and oceanic unpredictability.

2. Implementation: Layered sine wave lines moving across the canvas, each at slightly different frequency and amplitude. Color shifts from deep navy to seafoam based on wave height. Seed controls the frequency ratios, producing unique interference patterns.

3. Interactive HTML artifact with controls for: wave count, frequency spread, color palette, animation speed.
