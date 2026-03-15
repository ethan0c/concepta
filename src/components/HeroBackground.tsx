"use client";

import { useEffect, useId, useRef } from "react";

const SVG_NS = "http://www.w3.org/2000/svg";
const VIEWBOX_WIDTH = 1600;
const VIEWBOX_HEIGHT = 600;
const EPSILON = 1.0 / 1048576.0;

type Point = [number, number];

type Circumcircle = {
  i: number;
  j: number;
  k: number;
  x: number;
  y: number;
  r: number;
};

const COLORS = [
  "#0a1a2f", // site primary
  "#01239d", // brand navy
  "#0b4bbb", // brand blue
  "#1e3a8a", // brand blue (hero title color)
  "#2563eb", // mid blue
  "#3b82f6", // lighter blue
  "#1d4ed8", // vivid blue
  "#1e40af", // deep blue
  "#0991df", // brand cyan
  "#0284c7", // deep sky blue
  "#0369a1", // teal-blue
];

function getSuperTriangle(vertices: Point[]): Point[] {
  let xMin = Number.POSITIVE_INFINITY;
  let yMin = Number.POSITIVE_INFINITY;
  let xMax = Number.NEGATIVE_INFINITY;
  let yMax = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < vertices.length; i += 1) {
    const [x, y] = vertices[i];
    if (x < xMin) xMin = x;
    if (x > xMax) xMax = x;
    if (y < yMin) yMin = y;
    if (y > yMax) yMax = y;
  }

  const xDiff = xMax - xMin;
  const yDiff = yMax - yMin;
  const maxDiff = Math.max(xDiff, yDiff);
  const xCenter = xMin + xDiff * 0.5;
  const yCenter = yMin + yDiff * 0.5;

  return [
    [xCenter - 20 * maxDiff, yCenter - maxDiff],
    [xCenter, yCenter + 20 * maxDiff],
    [xCenter + 20 * maxDiff, yCenter - maxDiff],
  ];
}

function circumcircle(vertices: Point[], i: number, j: number, k: number): Circumcircle | null {
  const [xI, yI] = vertices[i];
  const [xJ, yJ] = vertices[j];
  const [xK, yK] = vertices[k];
  const yDiffIJ = Math.abs(yI - yJ);
  const yDiffJK = Math.abs(yJ - yK);

  if (yDiffIJ < EPSILON && yDiffJK < EPSILON) {
    return null;
  }

  const m1 = -((xJ - xI) / (yJ - yI));
  const m2 = -((xK - xJ) / (yK - yJ));
  const xMidIJ = (xI + xJ) / 2;
  const xMidJK = (xJ + xK) / 2;
  const yMidIJ = (yI + yJ) / 2;
  const yMidJK = (yJ + yK) / 2;

  const xCenter =
    yDiffIJ < EPSILON
      ? xMidIJ
      : yDiffJK < EPSILON
        ? xMidJK
        : (m1 * xMidIJ - m2 * xMidJK + yMidJK - yMidIJ) / (m1 - m2);

  const yCenter =
    yDiffIJ > yDiffJK ? m1 * (xCenter - xMidIJ) + yMidIJ : m2 * (xCenter - xMidJK) + yMidJK;

  const xDiff = xJ - xCenter;
  const yDiff = yJ - yCenter;

  return {
    i,
    j,
    k,
    x: xCenter,
    y: yCenter,
    r: xDiff * xDiff + yDiff * yDiff,
  };
}

function dedupeEdges(edges: number[]): void {
  for (let j = edges.length; j > 0; ) {
    const b = edges[--j];
    const a = edges[--j];
    for (let i = j; i > 0; ) {
      const n = edges[--i];
      const m = edges[--i];
      if ((a === m && b === n) || (a === n && b === m)) {
        edges.splice(j, 2);
        edges.splice(i, 2);
        break;
      }
    }
  }
}

function calcDelaunayTriangulation(inputVertices: Point[]): number[] {
  const n = inputVertices.length;
  if (n < 3 || n > 2000) {
    return [];
  }

  const vertices = inputVertices.slice();
  const indices = Array.from({ length: n }, (_, idx) => idx).sort((a, b) => vertices[b][0] - vertices[a][0]);

  const superTriangle = getSuperTriangle(vertices);
  vertices.push(superTriangle[0], superTriangle[1], superTriangle[2]);

  const initialCirc = circumcircle(vertices, n, n + 1, n + 2);
  if (!initialCirc) {
    return [];
  }

  const candidates: Circumcircle[] = [initialCirc];
  const locked: Circumcircle[] = [];
  const edges: number[] = [];

  for (let i = indices.length - 1; i >= 0; i -= 1) {
    edges.length = 0;
    const c = indices[i];

    for (let j = candidates.length - 1; j >= 0; j -= 1) {
      const candidate = candidates[j];
      const dx = vertices[c][0] - candidate.x;

      if (dx > 0 && dx * dx > candidate.r) {
        locked.push(candidate);
        candidates.splice(j, 1);
        continue;
      }

      const dy = vertices[c][1] - candidate.y;
      if (dx * dx + dy * dy - candidate.r > EPSILON) {
        continue;
      }

      edges.push(candidate.i, candidate.j, candidate.j, candidate.k, candidate.k, candidate.i);
      candidates.splice(j, 1);
    }

    dedupeEdges(edges);
    for (let j = edges.length - 1; j > 0; ) {
      const b = edges[j--];
      const a = edges[j--];
      const next = circumcircle(vertices, a, b, c);
      if (next) {
        candidates.push(next);
      }
    }
  }

  locked.push(...candidates);
  const finalTriangles: number[] = [];
  for (let i = 0; i < locked.length; i += 1) {
    const triangle = locked[i];
    if (triangle.i < n && triangle.j < n && triangle.k < n) {
      finalTriangles.push(triangle.i, triangle.j, triangle.k);
    }
  }

  return finalTriangles;
}

function createRandomTesselation(svgWidth: number, svgHeight: number): SVGGElement {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const gridSpacing = 250;
  const scatterAmount = 0.75;

  const gridSize =
    windowWidth / windowHeight > svgWidth / svgHeight
      ? (gridSpacing * svgWidth) / windowWidth
      : (gridSpacing * svgHeight) / windowHeight;

  const vertices: Point[] = [];
  const xOffset = (svgWidth % gridSize) / 2;
  const yOffset = (svgHeight % gridSize) / 2;

  for (let x = Math.floor(svgWidth / gridSize) + 1; x >= -1; x -= 1) {
    for (let y = Math.floor(svgHeight / gridSize) + 1; y >= -1; y -= 1) {
      vertices.push([
        xOffset + gridSize * (x + scatterAmount * (Math.random() - 0.5)),
        yOffset + gridSize * (y + scatterAmount * (Math.random() - 0.5)),
      ]);
    }
  }

  const triangles = calcDelaunayTriangulation(vertices);
  const group = document.createElementNS(SVG_NS, "g");
  group.classList.add("hero-demo-triangle-group");

  for (let i = triangles.length - 1; i >= 2; i -= 3) {
    const a = triangles[i];
    const b = triangles[i - 1];
    const c = triangles[i - 2];

    const polygon = document.createElementNS(SVG_NS, "polygon");
    polygon.classList.add("hero-demo-triangle");
    polygon.setAttribute(
      "points",
      `${vertices[a][0]},${vertices[a][1]} ${vertices[b][0]},${vertices[b][1]} ${vertices[c][0]},${vertices[c][1]}`,
    );
    polygon.style.opacity = "0";
    group.appendChild(polygon);
  }

  return group;
}

function assignRandomColors(stopA: SVGStopElement, stopB: SVGStopElement): void {
  const colorAIndex = Math.floor(COLORS.length * Math.random());
  const span = Math.floor(Math.random() * 3) + 3;
  const direction = Math.random() < 0.5 ? -1 : 1;
  const colorBIndex = (colorAIndex + span * direction + COLORS.length) % COLORS.length;
  stopA.setAttribute("stop-color", COLORS[colorAIndex]);
  stopB.setAttribute("stop-color", COLORS[colorBIndex]);
}

export default function HeroBackground() {
  const reactId = useId();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const rect1Ref = useRef<SVGRectElement | null>(null);
  const rect2Ref = useRef<SVGRectElement | null>(null);
  const stop1aRef = useRef<SVGStopElement | null>(null);
  const stop1bRef = useRef<SVGStopElement | null>(null);
  const stop2aRef = useRef<SVGStopElement | null>(null);
  const stop2bRef = useRef<SVGStopElement | null>(null);
  const idSeed = `hero-demo-${reactId.replace(/:/g, "")}`;

  useEffect(() => {
    const svg = svgRef.current;
    const rect1 = rect1Ref.current;
    const rect2 = rect2Ref.current;
    const stop1a = stop1aRef.current;
    const stop1b = stop1bRef.current;
    const stop2a = stop2aRef.current;
    const stop2b = stop2bRef.current;

    if (!svg || !rect1 || !rect2 || !stop1a || !stop1b || !stop2a || !stop2b) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let showingGrad1 = false;
    let prevGroup: SVGGElement | null = null;
    let lastTransitionAt = 0;
    const transitionDelay = 5500;
    const transitionDuration = 3000;
    let rafId = 0;
    const timeoutIds: number[] = [];

    const setupRect = (rect: SVGRectElement) => {
      rect.style.opacity = "0";
      rect.style.transitionProperty = "opacity";
      rect.style.transitionTimingFunction = "cubic-bezier(0.37, 0, 0.63, 1)";
    };

    setupRect(rect1);
    setupRect(rect2);

    const animateTrianglesIn = (group: SVGGElement, duration: number) => {
      const nodes = Array.from(group.children) as SVGPolygonElement[];
      const count = nodes.length || 1;
      nodes.forEach((polygon, index) => {
        const delay = duration * (0.3 * ((count - index) / count) + 0.3);
        polygon.style.transition = `opacity ${Math.round(duration * 0.4)}ms cubic-bezier(0.34, 1.56, 0.64, 1)`;
        polygon.style.transitionDelay = `${Math.round(delay)}ms`;
        requestAnimationFrame(() => {
          polygon.style.opacity = `${0.3 + 0.25 * Math.random()}`;
        });
      });
    };

    const animateTrianglesOut = (group: SVGGElement, duration: number) => {
      const nodes = Array.from(group.children) as SVGPolygonElement[];
      const count = nodes.length || 1;
      nodes.forEach((polygon, index) => {
        const delay = duration * (0.3 * ((count - index) / count));
        polygon.style.transition = `opacity ${Math.round(duration * 0.4)}ms ease-out`;
        polygon.style.transitionDelay = `${Math.round(delay)}ms`;
        requestAnimationFrame(() => {
          polygon.style.opacity = "0";
        });
      });
    };

    const transitionGradients = (duration: number) => {
      const hideRect = showingGrad1 ? rect1 : rect2;
      const showRect = showingGrad1 ? rect2 : rect1;
      const showStopA = showingGrad1 ? stop2a : stop1a;
      const showStopB = showingGrad1 ? stop2b : stop1b;
      showingGrad1 = !showingGrad1;

      hideRect.style.transitionDuration = `${Math.round(duration * 0.55)}ms`;
      showRect.style.transitionDuration = `${Math.round(duration * 0.65)}ms`;

      const hideTimeout = window.setTimeout(() => {
        hideRect.style.opacity = "0";
      }, Math.round(duration * 0.2));
      timeoutIds.push(hideTimeout);

      assignRandomColors(showStopA, showStopB);
      showRect.style.opacity = "1";
    };

    const playNextTransition = () => {
      const nextGroup = createRandomTesselation(VIEWBOX_WIDTH, VIEWBOX_HEIGHT);
      svg.appendChild(nextGroup);

      if (prevGroup && prevGroup.children.length) {
        const oldGroup = prevGroup;
        animateTrianglesOut(oldGroup, transitionDuration);
        const removeTimeout = window.setTimeout(() => {
          if (oldGroup.parentNode === svg) {
            svg.removeChild(oldGroup);
          }
        }, Math.round(transitionDuration * 0.75));
        timeoutIds.push(removeTimeout);
      }

      animateTrianglesIn(nextGroup, transitionDuration);
      transitionGradients(transitionDuration);
      prevGroup = nextGroup;
    };

    if (prefersReducedMotion) {
      rect1.style.opacity = "1";
      rect2.style.opacity = "0";
      assignRandomColors(stop1a, stop1b);
      const staticGroup = createRandomTesselation(VIEWBOX_WIDTH, VIEWBOX_HEIGHT);
      const polygons = Array.from(staticGroup.children) as SVGPolygonElement[];
      polygons.forEach((polygon) => {
        polygon.style.opacity = "0.4";
      });
      svg.appendChild(staticGroup);
      return () => {
        if (staticGroup.parentNode === svg) {
          svg.removeChild(staticGroup);
        }
      };
    }

    const tick = (time: number) => {
      if (!lastTransitionAt || time - lastTransitionAt > transitionDelay) {
        lastTransitionAt = time;
        playNextTransition();
      }
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      timeoutIds.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const grad1Id = `${idSeed}-grad1`;
  const grad2Id = `${idSeed}-grad2`;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ background: "linear-gradient(135deg, #0a1a2f 0%, #1e3a8a 50%, #0b4bbb 100%)" }}
    >
      <svg
        id="demo"
        ref={svgRef}
        className="hero-demo-svg"
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={grad1Id} x1="0" y1="0" x2="1" y2="0" colorInterpolation="sRGB">
            <stop ref={stop1aRef} offset="0%" stopColor="#0a1a2f" />
            <stop ref={stop1bRef} offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id={grad2Id} x1="0" y1="0" x2="1" y2="0" colorInterpolation="sRGB">
            <stop ref={stop2aRef} offset="0%" stopColor="#01239d" />
            <stop ref={stop2bRef} offset="100%" stopColor="#0b4bbb" />
          </linearGradient>
        </defs>
        <rect ref={rect1Ref} x="0" y="0" width={VIEWBOX_WIDTH} height={VIEWBOX_HEIGHT} stroke="none" fill={`url(#${grad1Id})`} opacity="0" />
        <rect ref={rect2Ref} x="0" y="0" width={VIEWBOX_WIDTH} height={VIEWBOX_HEIGHT} stroke="none" fill={`url(#${grad2Id})`} opacity="0" />
      </svg>

      {/* White wash over the left ~50% so dark-text always reads clearly */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.74) 16%, rgba(255,255,255,0.48) 34%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 64%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(244,250,253,0.16) 0%, rgba(244,250,253,0.04) 38%, rgba(10,26,47,0.16) 100%)",
        }}
      />
    </div>
  );
}
