export function StepIcon({ index }) {
  const icons = [
    // 0: Consulta - chat bubble
    <path key="0" fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 14H5.17L4 17.17V4h16v12Z" />,
    // 1: Propuesta - documento
    <path key="1" fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm4 18H6V4h7v5h5v11ZM8 15h8v2H8v-2Zm0-4h8v2H8v-2Z" />,
    // 2: Diseño UX - lápiz
    <path key="2" fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Zm2.92 1.42-.67-.67 9.06-9.06.67.67-9.06 9.06ZM20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a1 1 0 0 0 0-1.41Z" />,
    // 3: Desarrollo - código
    <path key="3" fill="currentColor" d="M8.7 15.9 4.8 12l3.9-3.9a1 1 0 0 0-1.4-1.4l-4.6 4.6a1 1 0 0 0 0 1.4l4.6 4.6a1 1 0 1 0 1.4-1.4Zm6.6 0 3.9-3.9-3.9-3.9a1 1 0 0 1 1.4-1.4l4.6 4.6a1 1 0 0 1 0 1.4l-4.6 4.6a1 1 0 0 1-1.4-1.4Z" />,
    // 4: Revisión - check
    <path key="4" fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 14.5-4.5-4.5 1.41-1.41L10 13.67l7.09-7.08 1.41 1.41L10 16.5Z" />,
    // 5: Lanzamiento - cohete
    <path key="5" fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 14.5v-9l7 4.5-7 4.5Z" />,
  ]

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[index] || icons[0]}
    </svg>
  )
}
