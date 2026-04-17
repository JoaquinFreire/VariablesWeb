import { useState } from 'react'
import { WHATSAPP_NUMBER, countryCodes } from '../data/constants'

const INITIAL_FORM = {
  name: '',
  email: '',
  business: '',
  service: 'Landing page',
  phoneCountry: '+54',
  phoneNumber: '',
  message: '',
}

const INITIAL_ERRORS = {
  name: '',
  email: '',
  business: '',
  message: '',
}

const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

function validateForm(data) {
  const errors = { ...INITIAL_ERRORS }
  let isValid = true

  if (!data.name.trim()) {
    errors.name = 'El nombre es obligatorio.'
    isValid = false
  }
  if (!data.email.trim()) {
    errors.email = 'El email es obligatorio.'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Ingresa un email valido.'
    isValid = false
  }
  if (!data.business.trim()) {
    errors.business = 'El negocio o rubro es obligatorio.'
    isValid = false
  }
  if (!data.message.trim()) {
    errors.message = 'El mensaje es obligatorio.'
    isValid = false
  }

  return { errors, isValid }
}

export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [fieldErrors, setFieldErrors] = useState(INITIAL_ERRORS)
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' })
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    if (fieldErrors[name]) {
      setFieldErrors((current) => ({ ...current, [name]: '' }))
    }
  }

  const fullPhone = formData.phoneNumber
    ? `${formData.phoneCountry} ${formData.phoneNumber}`
    : 'No indicado'

  const whatsappMessage = encodeURIComponent(
    [
      'Hola, vi la web de Variable Web y quiero recibir asesoramiento.',
      `Nombre: ${formData.name || 'No indicado'}`,
      `Email: ${formData.email || 'No indicado'}`,
      `Negocio: ${formData.business || 'No indicado'}`,
      `Telefono: ${fullPhone}`,
      `Servicio: ${formData.service}`,
      `Detalle: ${formData.message || 'Quiero informacion sobre tiempos, precios y cual seria la mejor solucion para mi negocio.'}`,
    ].join('\n')
  )
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

  const onSubmit = async (event) => {
    event.preventDefault()

    const { errors, isValid } = validateForm(formData)
    if (!isValid) {
      setFieldErrors(errors)
      return
    }

    if (!web3FormsAccessKey) {
      setSubmitState({
        status: 'error',
        message: 'Falta configurar la clave de Web3Forms en el archivo .env.',
      })
      return
    }

    setSubmitState({ status: 'sending', message: 'Enviando consulta...' })

    const submission = new FormData()
    submission.append('access_key', web3FormsAccessKey)
    submission.append('subject', 'Nueva consulta desde Variable Web')
    submission.append('from_name', 'Variable Web')
    submission.append('name', formData.name)
    submission.append('email', formData.email)
    submission.append('business', formData.business)
    submission.append('service', formData.service)
    submission.append('phone', fullPhone)
    submission.append('message', formData.message)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submission,
      })
      const data = await response.json()

      if (data.success) {
        setSubmitState({
          status: 'success',
          message: 'Consulta enviada con exito. Te responderemos lo antes posible.',
        })
        setShowSuccessModal(true)
        setFormData(INITIAL_FORM)
        event.target.reset()
      } else {
        setSubmitState({
          status: 'error',
          message: 'No se pudo enviar el formulario. Intenta nuevamente o escribenos por WhatsApp.',
        })
      }
    } catch {
      setSubmitState({
        status: 'error',
        message: 'No se pudo conectar con el formulario. Intenta nuevamente o escribenos por WhatsApp.',
      })
    }
  }

  const closeModal = () => setShowSuccessModal(false)

  return {
    formData,
    fieldErrors,
    submitState,
    showSuccessModal,
    whatsappUrl,
    countryCodes,
    handleChange,
    onSubmit,
    closeModal,
  }
}
