export function PhaseIcon({ type }) {
  if (type === 'design') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Zm-1 14.5v-9l7 4.5-7 4.5Z" />
      </svg>
    )
  }
  if (type === 'code') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M8.7 15.9 4.8 12l3.9-3.9a1 1 0 0 0-1.4-1.4l-4.6 4.6a1 1 0 0 0 0 1.4l4.6 4.6a1 1 0 1 0 1.4-1.4Zm6.6 0 3.9-3.9-3.9-3.9a1 1 0 0 1 1.4-1.4l4.6 4.6a1 1 0 0 1 0 1.4l-4.6 4.6a1 1 0 0 1-1.4-1.4Z" />
      </svg>
    )
  }
  if (type === 'web') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Zm-1 17.93V18c0-.55.45-1 1-1s1 .45 1 1v1.93A8.01 8.01 0 0 1 4.07 13H6c.55 0 1 .45 1 1s-.45 1-1 1H4.07A8.008 8.008 0 0 1 11 4.07V6c0 .55-.45 1-1 1S9 6.55 9 6V4.07A8.008 8.008 0 0 1 4.07 11H6c.55 0 1 .45 1 1s-.45 1-1 1H4.07A8.01 8.01 0 0 1 11 19.93Zm2 0A8.01 8.01 0 0 1 19.93 13H18c-.55 0-1-.45-1-1s.45-1 1-1h1.93A8.008 8.008 0 0 1 13 4.07V6c0 .55.45 1 1 1s1-.45 1-1V4.07A8.008 8.008 0 0 1 19.93 11H18c-.55 0-1 .45-1 1s.45 1 1 1h1.93A8.01 8.01 0 0 1 13 19.93ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7Zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11Zm-6 7h14v2H5v-2Z" />
    </svg>
  )
}
