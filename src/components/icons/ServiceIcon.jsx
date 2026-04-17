export function ServiceIcon({ type }) {
  if (type === 'store') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 9.5 5.2 5h13.6L20 9.5v1.1a2.8 2.8 0 0 1-1.5 2.47V19a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-5.93A2.8 2.8 0 0 1 4 10.6V9.5Zm2.75 3.86V18h3.9v-3.2a1 1 0 0 1 1-1h.7a1 1 0 0 1 1 1V18h3.9v-4.64a2.75 2.75 0 0 1-2.54-1.2 2.77 2.77 0 0 1-4.42 0 2.75 2.75 0 0 1-4.54 1.2ZM6.74 7l-.56 2.1v1.5a1 1 0 1 0 2 0V9.1L8.66 7H6.74Zm3.97 0-.35 2.18v1.42a1 1 0 1 0 2 0V9.18L12.01 7h-1.3Zm3.6 0-.35 2.18v1.42a1 1 0 1 0 2 0V9.1L15.29 7h-.98Zm2.96 2.1v1.5a1 1 0 1 0 2 0V9.1L18.7 7h-1.92l.49 2.1Z"
        />
      </svg>
    )
  }
  if (type === 'layers') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="m12 3 8 4.5-8 4.5-8-4.5L12 3Zm-6.7 7.42L12 14.16l6.7-3.74 1.3.73L12 15.66l-8-4.5 1.3-.74Zm0 3.5L12 17.66l6.7-3.74 1.3.73-8 4.5-8-4.5 1.3-.73Z"
        />
      </svg>
    )
  }
  if (type === 'workflow') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm10 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM7 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm1-7h5a1 1 0 1 1 0 2H8v1.59l1.7 1.7a1 1 0 0 1 .3.7V15a1 1 0 1 1-2 0v-1.59l-1.7-1.7A1 1 0 0 1 6 11V9.82A3 3 0 0 1 4.1 7H3a1 1 0 1 1 0-2h1.1A3 3 0 0 1 8 7Zm8 2a1 1 0 1 1 0-2h.9A3 3 0 0 1 21 5h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3 3c-.35 0-.7-.06-1-.17V11a1 1 0 0 1-.3.7L15 13.41V15a1 1 0 1 1-2 0v-2.3a1 1 0 0 1 .3-.7l1.7-1.7V9h1Z"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2 14.75 8.25 21 11l-6.25 2.75L12 20l-2.75-6.25L3 11l6.25-2.75L12 2Zm0 4.9-.94 2.16L8.9 10l2.16.94L12 13.1l.94-2.16L15.1 10l-2.16-.94L12 6.9Z"
      />
    </svg>
  )
}
