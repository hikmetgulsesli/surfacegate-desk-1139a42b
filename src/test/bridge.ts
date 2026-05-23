import type { SurfacegateDeskAppSnapshot } from '../features/surfacegate-desk/surfacegate-desk.store';

export function readSurfacegateDeskApp(): SurfacegateDeskAppSnapshot | undefined {
  return window.app;
}
