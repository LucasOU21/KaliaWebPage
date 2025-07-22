// src/components/ui/icons/Icon.jsx
import React from 'react';

// Icon definitions matching the Astro version
const Icons = {
  tools: {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-300 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    paths: [
      {
        d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
      }
    ]
  },
  verified: {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-300 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    paths: [
      {
        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      }
    ]
  },
  groups: {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-300 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    paths: [
      {
        d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      }
    ]
  },
  earth2: {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-300 dark:fill-neutral-300 dark:hs-tab-active:fill-rose-400 md:h-7 md:w-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    paths: [
      {
        d: "M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
      }
    ],
    circles: [
      {
        cx: "12",
        cy: "12", 
        r: "10",
        fill: "none"
      }
    ],
    lines: [
      {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }
    ]
  }
};

const Icon = ({ name }) => {
  const icon = Icons[name] || Icons.tools;
  
  if (!icon) {
    return <span>Icon not found</span>;
  }

  return (
    <svg
      xmlns={icon.xmlns}
      className={icon.class}
      height={icon.height}
      viewBox={icon.viewBox}
      width={icon.width}
      fill={icon.fill}
      clipRule={icon.clipRule}
      fillRule={icon.fillRule}
      stroke={icon.stroke}
      strokeWidth={icon.strokeWidth}
      strokeLinecap={icon.strokeLinecap}
      strokeLinejoin={icon.strokeLinejoin}
    >
      <title>{icon.title}</title>
      
      {/* Render paths */}
      {icon.paths && icon.paths.map((path, index) => (
        <path 
          key={index}
          d={path.d} 
          className={path.class || ""} 
          fill={path.fill} 
          opacity={path.opacity}
          strokeLinejoin={path.strokeLinejoin}
        />
      ))}
      
      {/* Render circles */}
      {icon.circles && icon.circles.map((circle, index) => (
        <circle 
          key={index}
          cx={circle.cx} 
          cy={circle.cy} 
          r={circle.r} 
          fill={circle.fill} 
        />
      ))}
      
      {/* Render lines */}
      {icon.lines && icon.lines.map((line, index) => (
        <line 
          key={index}
          x1={line.x1} 
          y1={line.y1} 
          x2={line.x2} 
          y2={line.y2}
          stroke="currentColor"
        />
      ))}
      
      {/* Render groups if needed */}
      {icon.g && icon.g.map((g, index) => (
        <g 
          key={index}
          fill={g.fill} 
          stroke={g.stroke} 
          strokeWidth={g.strokeWidth} 
        />
      ))}
    </svg>
  );
};

export default Icon;