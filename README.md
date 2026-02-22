# 🎨 DOM Manipulation & JQuery | ITI Intake 46

[![Tech](https://img.shields.io/badge/Tech-JS--JQuery--UI-blue.svg)]()
[![Course](https://img.shields.io/badge/Course-ITI_Intake_45-orange.svg)]()
[![Status](https://img.shields.io/badge/Status-Completed-success.svg)]()

This repository focuses on the bridge between logic and presentation. It covers the mastery of the Document Object Model (DOM) for dynamic content creation and the utilization of the JQuery library for advanced animations and user interactions.

---

## 🗺️ Learning Roadmap

### 🖌️ Phase 1: Native DOM Manipulation
* **Dynamic Styling:** Real-time CSS modification via the `style` object.
* **Node Operations:** Deep cloning (`cloneNode`), timed mutations, and dynamic appending.
* **Animation Engines:** Building motion logic using recursive `setTimeout` and coordinate math.

### ⚡ Phase 2: JQuery Core & Effects
* **Selectors & Traversal:** Efficiently navigating the DOM tree using JQuery's powerful engine.
* **Dynamic Content (SPA):** Building modular "view" systems that swap content without page reloads.
* **Animations:** Mastering the `.animate()` method and its `step` callback for telemetry and feedback.

### 🖱️ Phase 3: JQuery UI & Interactions
* **Plugins:** Integrating JQuery UI for complex user behaviors.
* **Drag-and-Drop:** Implementing `draggable` and `droppable` patterns with visual feedback (shake/fade).
* **Event Delegation:** Handling events on dynamically generated elements using `$(document).on()`.

---

## 📁 Repository Index

| Day | Milestone | Key Deliverables |
|:---:|:---|:---|
| **01** | **Native DOM** | Dynamic Styler, Node Cloning, and Flying Icon Animation. |
| **02** | **JQuery Power** | SPA Dashboard, Car Telemetry Animation, and Drag-and-Drop Void. |

---

## 🚀 Key Project Highlights

### 🏎️ Car Telemetry Tracker (Day 02)
An animation experiment that uses the JQuery `step` function to provide real-time coordinate feedback as a car moves across the screen, demonstrating how to "peek" into an animation's progress.



### 🧪 SPA Dashboard (Day 02)
A single-page interface that manages an About section, a cyclical Image Gallery, and a multi-step Complain Form with preview/edit functionality, all handled through dynamic DOM injection.

### 🌌 The Droppable Void (Day 02)
An implementation of JQuery UI that handles element "consumption." It features a `shake` effect on drag start and a `fadeOut` callback upon successful drop into a designated target.
