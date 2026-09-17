"use client";

import { useEffect, useLayoutEffect } from "react";

/**
 * GSAP writes to the DOM (pinning, inline transforms). React removes the DOM of
 * the previous page during its mutation phase, so every GSAP setup/cleanup has
 * to run in a layout effect - otherwise reverting a pin would happen after React
 * already removed the nodes and React would throw NotFoundError.
 *
 * On the server `useEffect` is used so React does not warn during SSR.
 */
export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
