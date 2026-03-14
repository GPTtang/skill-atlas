---
name: video-downloader
description: >
  Download YouTube and other online videos using yt-dlp with customizable quality and format options.
  Use when users ask to download, save, or grab YouTube videos, audio, or playlists. Supports quality
  settings (best, 1080p, 720p, 480p, 360p), formats (mp4, webm, mkv), and audio-only as MP3.
  Keywords: download video, save YouTube, yt-dlp, extract audio, download MP3.
---

# Video Downloader

Download online videos using yt-dlp — a robust, regularly-updated downloader supporting YouTube and 1000+ sites.

## Prerequisites

```bash
pip install yt-dlp
# or
brew install yt-dlp
```

yt-dlp auto-installs itself if used via the Python script approach.

## Quick Start

```bash
# Best quality (default)
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# Specific quality
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best" "URL"

# Audio only as MP3
yt-dlp -x --audio-format mp3 "URL"

# Custom output directory
yt-dlp -o "/path/to/folder/%(title)s.%(ext)s" "URL"
```

## Quality Options

```bash
# 1080p MP4
yt-dlp -f "bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]" "URL"

# 720p
yt-dlp -f "bestvideo[height<=720]+bestaudio/best" "URL"

# 480p
yt-dlp -f "bestvideo[height<=480]+bestaudio/best" "URL"

# Best available
yt-dlp -f "best" "URL"

# Worst (smallest file)
yt-dlp -f "worst" "URL"
```

## Format Options

```bash
# Force MP4 output
yt-dlp --merge-output-format mp4 "URL"

# WebM
yt-dlp -f "bestvideo[ext=webm]+bestaudio[ext=webm]" "URL"

# MKV
yt-dlp --merge-output-format mkv "URL"
```

## Audio Downloads

```bash
# MP3 (best quality audio)
yt-dlp -x --audio-format mp3 --audio-quality 0 "URL"

# M4A (better quality, smaller size)
yt-dlp -x --audio-format m4a "URL"

# WAV (lossless)
yt-dlp -x --audio-format wav "URL"
```

## Batch Operations

```bash
# Download playlist
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"

# Download from a list of URLs in a file
yt-dlp -a urls.txt

# Download playlist but skip already downloaded
yt-dlp --download-archive downloaded.txt "PLAYLIST_URL"
```

## Naming and Organization

```bash
# Custom filename template
yt-dlp -o "%(uploader)s/%(title)s.%(ext)s" "URL"

# Include upload date
yt-dlp -o "%(upload_date)s - %(title)s.%(ext)s" "URL"

# Sanitize filename (remove special chars)
yt-dlp --restrict-filenames "URL"
```

## Python Script Approach

```python
import subprocess
import sys

def download_video(url, quality="best", output_dir=".", audio_only=False, fmt="mp4"):
    cmd = ["yt-dlp"]

    if audio_only:
        cmd += ["-x", "--audio-format", "mp3", "--audio-quality", "0"]
    else:
        quality_map = {
            "best": "bestvideo+bestaudio/best",
            "1080p": "bestvideo[height<=1080]+bestaudio/best",
            "720p": "bestvideo[height<=720]+bestaudio/best",
            "480p": "bestvideo[height<=480]+bestaudio/best",
        }
        cmd += ["-f", quality_map.get(quality, "best")]
        cmd += ["--merge-output-format", fmt]

    cmd += ["-o", f"{output_dir}/%(title)s.%(ext)s"]
    cmd += ["--no-playlist"]  # Single video only unless URL is a playlist
    cmd.append(url)

    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode == 0:
        print("Download complete!")
    else:
        print(f"Error: {result.stderr}")

# Examples
download_video("https://youtube.com/watch?v=...", quality="1080p")
download_video("https://youtube.com/watch?v=...", audio_only=True)
```

## Examples

### Example 1: Download 1080p video

**Input**: "Download this YouTube video in 1080p: https://youtube.com/watch?v=dQw4w9WgXcQ"

**Command**:
```bash
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best" --merge-output-format mp4 \
  -o "%(title)s.%(ext)s" "https://youtube.com/watch?v=dQw4w9WgXcQ"
```

### Example 2: Extract audio as MP3

**Input**: "Save just the audio as MP3 from this video"

**Command**:
```bash
yt-dlp -x --audio-format mp3 --audio-quality 0 "URL"
```

### Example 3: Download a playlist

**Input**: "Download this playlist to my ~/Downloads folder"

**Command**:
```bash
yt-dlp -o "~/Downloads/%(playlist_title)s/%(playlist_index)02d - %(title)s.%(ext)s" \
  "PLAYLIST_URL"
```

## Notes

- Downloads are saved to the current directory by default
- `--no-playlist` prevents accidentally downloading entire playlists from single-video URLs
- yt-dlp auto-merges video and audio streams when needed (requires ffmpeg for best quality)
- Higher quality downloads take longer and use more disk space
- Install ffmpeg for best quality merging: `brew install ffmpeg` or `apt install ffmpeg`
