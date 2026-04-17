export function ArrowIcon({ direction = 'right' }) {
  return (
    <svg
      className={`carousel-arrow-icon ${direction === 'left' ? 'is-left' : ''}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41Z"
      />
    </svg>
  )
}
