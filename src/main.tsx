import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import OfferDay from '@/pages/OfferDay'
import '@/styles/global.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OfferDay />
  </StrictMode>,
)
