import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Algo salió mal</h2>
          <p>Por favor recarga la página o escribinos por WhatsApp.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', cursor: 'pointer' }}
          >
            Reintentar
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
