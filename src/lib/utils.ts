import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Applications close at 2025-09-29 00:00 Europe/Madrid.
// Europe/Madrid is UTC+2 at the end of September (CEST), so cutoff in UTC is 2025-09-28T22:00:00Z.
const APPLICATIONS_CLOSES_AT_UTC = Date.parse('2025-09-28T22:00:00Z')

export function applicationsAreClosed(nowUtcMs: number = Date.now()): boolean {
  return nowUtcMs >= APPLICATIONS_CLOSES_AT_UTC
}
