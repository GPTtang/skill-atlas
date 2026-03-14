---
name: agent-memory
description: >
  Persistent memory system for AI agents to remember facts, learn from experience, and track entities
  across sessions using a local SQLite database. Use when an agent needs to store and retrieve
  cross-session knowledge, record lessons from past actions, or maintain entity profiles.
  Triggers: "remember this", "recall", "agent memory", "persist context", "store fact", "lessons learned".
---

# Agent Memory

Persistent memory system for AI agents. Remember facts, learn from experience, and track entities across sessions using a local SQLite database at `~/.agent-memory/memory.db`.

## Setup

```bash
clawdhub install agent-memory
```

Or install directly from the skill's source:

```python
from src.memory import AgentMemory
mem = AgentMemory()                          # default: ~/.agent-memory/memory.db
mem = AgentMemory(db_path="/custom/path")    # custom location
```

## Core Operations

### Remember a Fact

```python
mem.remember("Important information", tags=["category"])
```

### Learn from Experience

```python
mem.learn(
    action="What was done",
    context="situation",
    outcome="positive",   # or "negative"
    insight="What was learned"
)
```

### Recall

```python
facts   = mem.recall("search query")
lessons = mem.get_lessons(context="topic")
```

### Track Entities

```python
mem.track_entity("Alice", "person", {"role": "engineer"})
```

## Session Protocol

Add this to your `AGENTS.md` or `HEARTBEAT.md`:

```markdown
## Memory Protocol

On session start:
1. Load recent lessons: mem.get_lessons(limit=5)
2. Check entity context for current task
3. Recall relevant facts

On session end:
1. Extract durable facts from conversation
2. Record lessons learned
3. Update entity information
```

## Example

**Input:** Agent finishes a deployment that failed due to missing env var.

**Action:**
```python
mem.learn(
    action="Deploy to production via Docker",
    context="fresh server without .env file",
    outcome="negative",
    insight="Always verify .env file exists before docker-compose up"
)
```

**Next session recall:**
```python
lessons = mem.get_lessons(context="deploy")
# → ["Always verify .env file exists before docker-compose up"]
```

## When to Use

- **Starting a session**: load relevant context from memory
- **After conversations**: store important facts
- **After failures**: record lessons learned
- **Meeting new people/projects**: track as entities
