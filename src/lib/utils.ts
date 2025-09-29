import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Applications open at 2025-09-22 00:00 Europe/Madrid.
// Europe/Madrid is UTC+2 in September (CEST), so opening in UTC is 2025-09-21T22:00:00Z.
const APPLICATIONS_OPENS_AT_UTC = Date.parse('2025-09-21T22:00:00Z')

// Applications close at end of day on 2025-09-29 (i.e., 2025-09-30 00:00 Europe/Madrid).
// Europe/Madrid is UTC+2 (CEST), so cutoff in UTC is 2025-09-29T22:00:00Z.
const APPLICATIONS_CLOSES_AT_UTC = Date.parse('2025-09-29T22:00:00Z')

export function applicationsAreClosed(nowUtcMs: number = Date.now()): boolean {
  return nowUtcMs >= APPLICATIONS_CLOSES_AT_UTC
}

export function applicationsAreOpen(nowUtcMs: number = Date.now()): boolean {
  return nowUtcMs >= APPLICATIONS_OPENS_AT_UTC && nowUtcMs < APPLICATIONS_CLOSES_AT_UTC
}

export function applicationsNotYetOpen(nowUtcMs: number = Date.now()): boolean {
  return nowUtcMs < APPLICATIONS_OPENS_AT_UTC
}

// Partner CTA cutoff at 2025-09-25 00:00 Europe/Madrid (UTC+2), i.e. 2025-09-24T22:00:00Z
const PARTNER_CTA_CUTOFF_UTC = Date.parse('2025-09-24T22:00:00Z')

export function isBeforePartnerCtaCutoff(nowUtcMs: number = Date.now()): boolean {
  return nowUtcMs < PARTNER_CTA_CUTOFF_UTC
}

// After applications close, we show an interim message asking applicants to
// check their inboxes or contact vlc.hacks@cdtm.de for any doubts.
// This runs until the end of the hackathon: 2025-10-02 21:00 Europe/Madrid (UTC+2),
// which is 2025-10-02T19:00:00Z in UTC.
const ANNOUNCEMENTS_UNTIL_UTC = Date.parse('2025-10-02T19:00:00Z')

export function isInPostCloseAnnouncementWindow(nowUtcMs: number = Date.now()): boolean {
  return nowUtcMs >= APPLICATIONS_CLOSES_AT_UTC && nowUtcMs < ANNOUNCEMENTS_UNTIL_UTC
}
