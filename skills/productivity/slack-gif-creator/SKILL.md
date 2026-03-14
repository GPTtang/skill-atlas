---
name: slack-gif-creator
description: >
  Create animated GIFs optimized for Slack using Python (Pillow + imageio). Supports message GIFs (up to 2MB, 480x480)
  and emoji GIFs (strict 64KB limit, 128x128). Use when users ask to make a GIF, animated emoji, or Slack animation
  of something. Keywords: make GIF, Slack emoji, animated GIF, create animation.
---

# Slack GIF Creator

Create animated GIFs optimized for Slack's technical constraints using Python with Pillow and imageio.

## Prerequisites

```bash
pip install pillow imageio numpy
```

## Slack Constraints

| Type | Max Size | Dimensions | FPS | Colors |
|------|----------|------------|-----|--------|
| Message GIF | ~2MB | 480x480 | 15-20 | 128-256 |
| Emoji GIF | 64KB (strict) | 128x128 | 10-12 | 32-48 |

Emoji GIFs are challenging — the 64KB limit is strict. Keep designs simple, avoid gradients, limit to 10-15 frames.

## Workflow

1. Understand the creative request — what should happen? What's the mood?
2. Design the animation — break into phases (anticipation → action → reaction)
3. Choose GIF type: message (generous limits) or emoji (very constrained)
4. Write Python script using Pillow to generate frames
5. Assemble and save with imageio
6. Validate file size; reduce colors/frames if over limit

## Core Implementation Pattern

```python
from PIL import Image, ImageDraw, ImageFont
import imageio
import numpy as np
import math

def create_gif(output_path, width=480, height=480, fps=20, is_emoji=False):
    frames = []
    num_frames = 12 if is_emoji else 30

    for i in range(num_frames):
        t = i / (num_frames - 1)  # progress 0..1

        # Create frame
        img = Image.new('RGB', (width, height), (240, 248, 255))
        draw = ImageDraw.Draw(img)

        # YOUR ANIMATION LOGIC HERE
        # Example: bouncing circle
        y = int(height * 0.2 + math.sin(t * math.pi * 2) * height * 0.3)
        draw.ellipse([width//2-30, y-30, width//2+30, y+30], fill=(255, 100, 100))

        frames.append(np.array(img))

    # Save
    colors = 40 if is_emoji else 128
    imageio.mimsave(output_path, frames, fps=fps, quantizer='nq', palettesize=colors)

    # Check size
    import os
    size_kb = os.path.getsize(output_path) / 1024
    limit_kb = 64 if is_emoji else 2048
    print(f"Size: {size_kb:.1f}KB / {limit_kb}KB limit")
    if size_kb > limit_kb:
        print("WARNING: Over size limit! Reduce frames or colors.")

    return output_path
```

## Animation Primitives

### Bounce
```python
import math
# Bounce easing (ease_out_bounce)
def bounce(t):
    if t < 1/2.75: return 7.5625 * t * t
    elif t < 2/2.75: t -= 1.5/2.75; return 7.5625 * t * t + 0.75
    elif t < 2.5/2.75: t -= 2.25/2.75; return 7.5625 * t * t + 0.9375
    else: t -= 2.625/2.75; return 7.5625 * t * t + 0.984375

y = int(start_y + (end_y - start_y) * bounce(t))
```

### Pulse (scale in/out)
```python
scale = 1.0 + math.sin(t * math.pi * 2) * 0.15
size = int(base_size * scale)
```

### Shake
```python
shake_x = int(math.sin(t * math.pi * 8) * intensity * (1 - t))
```

### Fade in/out
```python
alpha = int(255 * t)  # fade in
alpha = int(255 * (1 - t))  # fade out
```

## Optimization for Emoji GIFs (64KB limit)

When over limit:
1. Reduce to 10-12 frames total
2. Use 32-40 colors max
3. Avoid gradients (solid colors compress better)
4. Simplify design (fewer elements)
5. Reduce to 128x128 or smaller

```python
# Aggressive optimization
imageio.mimsave('emoji.gif', frames, fps=10, quantizer='nq', palettesize=32)
```

## Example 1: Bouncing Emoji (Message GIF)

**Input**: "Make a GIF of a rocket launching"

```python
from PIL import Image, ImageDraw
import imageio, numpy as np, math

frames = []
for i in range(30):
    t = i / 29
    img = Image.new('RGB', (480, 480), (10, 10, 40))  # dark sky
    draw = ImageDraw.Draw(img)

    # Stars
    for sx, sy in [(50,30),(120,80),(300,20),(400,100),(200,150)]:
        draw.ellipse([sx-2,sy-2,sx+2,sy+2], fill=(255,255,200))

    # Rocket moving up
    rocket_y = int(400 - t * 350)
    draw.polygon([(240,rocket_y-40),(220,rocket_y+20),(260,rocket_y+20)], fill=(200,200,220))
    # Flame
    flame_size = int(20 + math.sin(t*20)*5)
    draw.ellipse([230,rocket_y+20,250,rocket_y+20+flame_size], fill=(255,150,50))

    frames.append(np.array(img))

imageio.mimsave('rocket.gif', frames, fps=20, quantizer='nq', palettesize=128)
```

## Example 2: Pulsing Emoji GIF

**Input**: "Make a heart pulse emoji GIF"

```python
from PIL import Image, ImageDraw
import imageio, numpy as np, math

frames = []
for i in range(12):
    t = i / 11
    scale = 1.0 + math.sin(t * math.pi * 2) * 0.2
    size = int(50 * scale)

    img = Image.new('RGB', (128, 128), (255, 240, 240))
    draw = ImageDraw.Draw(img)
    cx, cy = 64, 64
    # Simple heart shape approximation
    draw.ellipse([cx-size-10, cy-size, cx, cy+size//2], fill=(220, 50, 80))
    draw.ellipse([cx, cy-size, cx+size+10, cy+size//2], fill=(220, 50, 80))
    draw.polygon([(cx-size-10, cy+10), (cx+size+10, cy+10), (cx, cy+size+15)], fill=(220, 50, 80))
    frames.append(np.array(img))

imageio.mimsave('heart.gif', frames, fps=10, quantizer='nq', palettesize=32)
```

## Tips

- For emoji GIFs, always check file size after saving and iterate if over 64KB
- Simple designs with solid colors compress much better than gradients
- Test in Slack by uploading to a channel or custom emoji settings
- Same visual idea can work as both message GIF (480px, generous) and emoji (128px, strict)
