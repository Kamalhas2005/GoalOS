# GoalOS Architecture

## Vision

GoalOS is an AI Operating System for Human Goals.

Instead of being a chatbot, calendar, or task manager, GoalOS coordinates multiple specialized engines that work together to help users achieve long-term goals.

---

# Architecture Layers

```
                    GOALOS

────────────────────────────────────────────

                UI Layer

 Mission Control
 Missions
 Planner
 Lifestyle
 Memory
 Tutor
 Analytics
 Settings

────────────────────────────────────────────

              Engine Layer

 Mission Engine
 Planner Engine
 Lifestyle Engine
 Memory Engine
 Tutor Engine
 Analytics Engine
 Notification Engine

────────────────────────────────────────────

             Shared Models

 Mission
 Planner
 Lifestyle
 Memory

────────────────────────────────────────────

          Infrastructure Layer

 Database
 AI Models
 Voice
 Calendar
 Notifications
 Cloud
```

---

# Foundation Engines

These four engines form the core of GoalOS.

## 🎯 Mission Engine

Responsibility:

> What is important?

Owns:

- Missions
- Priorities
- Goal Progress

Never owns:

- Schedule
- User routine
- Memories

---

## 📅 Planner Engine

Responsibility:

> What should happen next?

Owns:

- Daily planning
- Task recommendations
- Scheduling decisions

Consumes:

- Mission Engine
- Lifestyle Engine

---

## 🌱 Lifestyle Engine

Responsibility:

> When is the user available?

Owns:

- Wake-up time
- Sleep time
- Routine blocks
- Available slots

Never owns:

- Tasks
- Goals

---

## 🧠 Memory Engine

Responsibility:

> What should GoalOS remember?

Owns:

- Long-term memories
- Study history
- Mission history
- Notes
- Habits

Never owns:

- Calculated values
- Temporary planner state

---

# Supporting Engines

## 📚 Tutor Engine

Depends on:

- Memory
- Planner

Purpose:

Teach the user using previous learning history.

---

## 📈 Analytics Engine

Depends on:

- Mission
- Planner
- Lifestyle
- Memory

Purpose:

Generate insights and progress reports.

---

## 🔔 Notification Engine

Depends on:

- Planner
- Lifestyle

Purpose:

Notify the user at the right time.

---

# Engine Communication Rules

## Rule 1

Every engine owns its own data.

No other engine modifies another engine's internal state.

---

## Rule 2

Engines communicate only through public functions.

Example:

Planner Engine uses:

getAvailableSlots()

NOT:

lifestyle.blocks

---

## Rule 3

Pages never contain business logic.

Pages display information.

Engines make decisions.

---

## Rule 4

Shared models are used only for data definitions.

Business logic always belongs inside engines.

---

## Rule 5

Every engine version must end with a visible feature.

No invisible backend-only milestones.

---

# Development Cycle

Every engine follows the same lifecycle.

```
Model

↓

Data

↓

Algorithms

↓

UI

↓

Integration

↓

Git Commit

↓

Roadmap Update
```

---

# Current Engine Status

| Engine        | Status  |
| ------------- | ------- |
| Mission       | V2 ✅   |
| Planner       | V2 ✅   |
| Lifestyle     | V2 ✅   |
| Memory        | V1 ✅   |
| Tutor         | Planned |
| Analytics     | Planned |
| Notifications | Planned |

---

# Future Vision

After all core engines mature, GoalOS will introduce a coordinator.

## GoalOS Kernel

The Kernel does not replace engines.

It orchestrates them.

Example:

User Request

↓

GoalOS Kernel

↓

Mission Engine

↓

Lifestyle Engine

↓

Planner Engine

↓

Memory Engine

↓

Tutor Engine

↓

Response

The Kernel is responsible for deciding which engine should solve each part of a user's request.

---

# Design Philosophy

GoalOS follows these principles:

- Single Responsibility
- Modular Architecture
- Engine Isolation
- Public APIs between engines
- Reusable UI Components
- Incremental Development
- Documentation-first architecture
