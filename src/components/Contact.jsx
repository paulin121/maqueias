import { useMemo, useState } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background-color: #080808;
  color: #ffffff;
  padding-top: 120px;
  padding-bottom: 120px;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
`

const Toast = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: #111;
  border-left: 4px solid #8B0000;
  border: 1px solid rgba(255,255,255,0.08);
  padding: 14px 16px;
  z-index: 100;
  width: min(360px, calc(100vw - 40px));
  color: #ffffff;
`

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.19 1.6 6.02L0 24l6.2-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.18-1.24-6.17-3.48-8.52ZM12 22c-1.72 0-3.4-.47-4.86-1.37l-.35-.21-3.23.85.86-3.16-.22-.35A9.98 9.98 0 0 1 2 12C2 6.48 6.48 2 12 2c5.52 0 10 4.48 10 10 0 5.52-4.48 10-10 10Z"
        fill="#ffffff"
      />
      <path
        d="M17.33 14.67c-.2-.1-1.17-.58-1.35-.65-.18-.07-.31-.1-.44.1-.13.2-.51.65-.62.78-.11.13-.22.15-.42.05-.2-.1-.85-.31-1.62-1-.6-.53-1.01-1.18-1.13-1.38-.12-.2-.01-.3.09-.4.1-.1.2-.22.3-.33.1-.11.13-.2.2-.33.07-.13.04-.25-.01-.35-.05-.1-.44-1.06-.6-1.45-.16-.39-.32-.33-.44-.33h-.38c-.13 0-.35.05-.53.26-.18.2-.69.67-.69 1.63 0 .96.71 1.89.81 2.02.1.13 1.4 2.14 3.39 2.98.47.2.83.32 1.12.41.47.15.9.13 1.23.08.38-.06 1.17-.48 1.33-.94.17-.46.17-.85.12-.94-.05-.09-.18-.14-.38-.24Z"
        fill="#ffffff"
      />
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ nome: '', telefone: '', ideia: '' })
  const [toast, setToast] = useState(false)

  const waBase = 'https://wa.me/5511999999999'

  const message = useMemo(() => {
    const lines = [
      'Olá Lucas Noir! 👋',
      '',
      `Nome: ${form.nome || '-'}`,
      `Telefone/WhatsApp: ${form.telefone || '-'}`,
      '',
      'Sua ideia de tatuagem:',
      form.ideia || '-',
    ]
    return encodeURIComponent(lines.join('\n'))
  }, [form.nome, form.telefone, form.ideia])

  const waHref = `${waBase}?text=${message}`

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const formatAndOpen = (e) => {
    e.preventDefault()

    const nome = form.nome.trim()
    const telefone = form.telefone.trim()
    const ideia = form.ideia.trim()

    if (!nome || !telefone || !ideia) {
      setToast(true)
      setTimeout(() => setToast(false), 2200)
      return
    }

    window.open(waHref, '_blank', 'noopener,noreferrer')
    setToast(true)
    setTimeout(() => setToast(false), 2600)
    setForm({ nome: '', telefone: '', ideia: '' })
  }

  return (
    <Section id="contato">
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 16px' }}>
        <p style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          textAlign: 'center',
          fontSize: 20,
          color: '#888888',
          maxWidth: 800,
          margin: '0 auto 96px auto',
          lineHeight: 1.6,
        }}>
          <span style={{ color: '#ffffff' }}>"</span>
          Tinta preta é atemporal — não segue tendências nem some com a moda. É sobre ousadia, permanência e arte que resiste ao tempo.
          <span style={{ color: '#ffffff' }}>"</span>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80 }}>
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 56, marginBottom: 24 }}>Vamos Criar Algo Permanente.</h2>
            <p style={{ color: '#aaaaaa', letterSpacing: '0.02em', marginBottom: 40, maxWidth: 420 }}>
              Design exclusivo de blackwork, com atendimento seguro e hora marcada.
            </p>

            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                background: '#064e3b',
                borderRadius: 9999,
                padding: '16px 32px',
                textDecoration: 'none',
                color: '#ffffff',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
          </div>

          <div>
            <form onSubmit={formatAndOpen} style={{ background: '#111', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: 40 }}>
              <div style={{ display: 'grid', gap: 24 }}>
                <div>
                  <label style={{ display: 'block', textTransform: 'uppercase', fontSize: 12, color: '#9ca3af', letterSpacing: '0.08em', marginBottom: 8 }}>
                    Nome Completo
                  </label>
                  <input
                    name="nome"
                    value={form.nome}
                    onChange={onChange}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid #333',
                      borderRadius: 10,
                      padding: 16,
                      color: '#ffffff',
                      outline: 'none',
                    }}
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', textTransform: 'uppercase', fontSize: 12, color: '#9ca3af', letterSpacing: '0.08em', marginBottom: 8 }}>
                    Telefone/WhatsApp
                  </label>
                  <input
                    name="telefone"
                    value={form.telefone}
                    onChange={onChange}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid #333',
                      borderRadius: 10,
                      padding: 16,
                      color: '#ffffff',
                      outline: 'none',
                    }}
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', textTransform: 'uppercase', fontSize: 12, color: '#9ca3af', letterSpacing: '0.08em', marginBottom: 8 }}>
                    Sua ideia de tatuagem
                  </label>
                  <textarea
                    name="ideia"
                    rows={4}
                    value={form.ideia}
                    onChange={onChange}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid #333',
                      borderRadius: 10,
                      padding: 16,
                      color: '#ffffff',
                      outline: 'none',
                      resize: 'none',
                    }}
                    placeholder="Descreva o estilo, tamanho e local no corpo..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: '#ffffff',
                    color: '#000000',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    width: '100%',
                    borderRadius: 10,
                    padding: 16,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Enviar e Agendar
                </button>
              </div>
            </form>

            {toast ? (
              <Toast role="status">
                {form.nome.trim() && form.telefone.trim() && form.ideia.trim()
                  ? 'Abrindo WhatsApp com sua mensagem...'
                  : 'Preencha Nome, Telefone/WhatsApp e sua ideia.'}
              </Toast>
            ) : null}
          </div>
        </div>

        <style>{`
          @media (min-width: 900px){
            #contato > div > div{ grid-template-columns: 1fr 1fr; }
          }
        `}</style>
      </div>
    </Section>
  )
}

