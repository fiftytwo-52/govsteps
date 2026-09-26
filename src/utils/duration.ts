/**
 * Converts human-readable duration strings into ISO 8601 duration format for Schema.org.
 * E.g.
 * '15-30 minutes' -> 'PT30M'
 * '1-2 hours'     -> 'PT2H'
 * '1-2 days'      -> 'P2D'
 * '2-4 weeks'     -> 'P4W'
 * '6-8 months'    -> 'P8M'
 * '1-2 years'     -> 'P2Y'
 * 'Same day'      -> 'PT1H'
 * 'Immediate'     -> 'PT1H'
 */
export function toIso8601Duration(str?: string): string | undefined {
  if (!str) return undefined;
  const s = str.trim().toLowerCase();
  if (s === 'varies' || s === 'n/a' || s === 'none') return undefined;

  if (s.includes('same day') || s.includes('immediate') || s.includes('instant')) {
    return 'PT1H';
  }

  // Check years
  const yearMatch = s.match(/(?:(\d+)\s*(?:-|to)\s*)?(\d+)\s*(?:years?|yrs?)/i);
  if (yearMatch) {
    const val = yearMatch[2] || yearMatch[1];
    return `P${val}Y`;
  }

  // Check months
  const monthMatch = s.match(/(?:(\d+)\s*(?:-|to)\s*)?(\d+)\s*(?:months?|mos?)/i);
  if (monthMatch) {
    const val = monthMatch[2] || monthMatch[1];
    return `P${val}M`;
  }

  // Check weeks
  const weekMatch = s.match(/(?:(\d+)\s*(?:-|to)\s*)?(\d+)\s*(?:weeks?|wks?)/i);
  if (weekMatch) {
    const val = weekMatch[2] || weekMatch[1];
    return `P${val}W`;
  }

  // Check days (including business/working days)
  const dayMatch = s.match(/(?:(\d+)\s*(?:-|to)\s*)?(\d+)\s*(?:business\s+|working\s+)?days?/i);
  if (dayMatch) {
    const val = dayMatch[2] || dayMatch[1];
    return `P${val}D`;
  }

  // Check hours
  const hourMatch = s.match(/(?:(\d+)\s*(?:-|to)\s*)?(\d+)\s*(?:hours?|hrs?)/i);
  if (hourMatch) {
    const val = hourMatch[2] || hourMatch[1];
    return `PT${val}H`;
  }

  // Check minutes
  const minMatch = s.match(/(?:(\d+)\s*(?:-|to)\s*)?(\d+)\s*(?:minutes?|mins?)/i);
  if (minMatch) {
    const val = minMatch[2] || minMatch[1];
    return `PT${val}M`;
  }

  return undefined;
}
