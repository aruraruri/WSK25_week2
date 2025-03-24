"use strict";

/**
 *
 * @param {number[]} start X/Y coordinates
 * @param {number[]} end X/Y coordinates
 * @returns Distance between two points on an euclidean plane.
 */

export function distance(start, end) {
  const dist = Math.sqrt((start[1] - start[0]) ** 2 + (end[1] - end[0]) ** 2);
  return dist;
}
