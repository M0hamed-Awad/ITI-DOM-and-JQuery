# 🎨 Day 01 - DOM Manipulation & Web Animations

### 🎯 Objectives
* **Dynamic Styling:** Modify element CSS properties in real-time based on user input (Radio buttons).
* **Node Operations:** Master the lifecycle of DOM nodes including creation, cloning (`cloneNode`), and appending.
* **Coordinate Math:** Implement precise element positioning using `absolute` and `relative` CSS properties.
* **Animation Loops:** Utilize recursive `setTimeout` to create smooth, non-blocking motion for multiple objects.
* **Boundary Detection:** Write logic to handle "bouncing" behavior when elements hit the edge of a container.

---

### 📄 Lab Modules

#### 🖋️ Module 1: Dynamic Text Styler
A tool that demonstrates direct manipulation of the `style` object.
* **Interactivity:** Users can change font family, alignment, line height, and borders through radio buttons.
* **Implementation:** Each button triggers a specific JavaScript function that maps a value directly to the element's CSS properties (e.g., `paragraph.style.textAlign = value`).



#### 🕷️ Module 2: The Spider Clone (Node Logic)
A task focused on timed DOM mutations and element duplication.
* **Cloning:** Utilizes `cloneNode(true)` to deep-copy an existing element along with its children.
* **Timed Execution:** Uses `setTimeout` to sequence events: changing an image source, moving its alignment, and creating a footer clone after a specific delay.
* **Navigation Update:** Dynamically alters the `listStyleType` of navigation links using the `ID` selector.

#### 🚀 Module 3: Flying Icons (Animation Engine)
A complex animation lab managing three independent moving images.
* **The Logic:** Icons move along the X and Y axes using a `step` variable.
* **Boundary Detection:** Implements a direction-flip logic (`direction * -1`) when an image's coordinates exceed the `widthBoundary` or `heightBoundary`.
* **State Control:** Functions for `Start`, `Stop`, and `Reset` ensure full control over the `setTimeout` intervals, preventing memory leaks or double-speed animations.

---

### 💡 Technical Insights

* **`cloneNode(true)`:** Setting the parameter to `true` is essential for a "Deep Clone," which copies the element's text and all nested children.
* **Absolute Positioning:** For animations to work, elements must have `position: absolute` or `fixed` so that `left`, `right`, `top`, and `bottom` properties can move them relative to their parent container.
* **Recursive SetTimeout:** Preferred over `setInterval` for these tasks to avoid frame-skipping if the browser logic takes longer than the interval delay.
* **Direct Property Mapping:** Learned that CSS properties with hyphens (e.g., `text-align`) are accessed in JavaScript using camelCase (`element.style.textAlign`).