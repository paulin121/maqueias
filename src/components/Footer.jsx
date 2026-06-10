import styled from 'styled-components'

const FooterWrap = styled.footer`
  background: #050505;
  color: #ffffff;
  border-top: 1px solid rgba(255, 255, 255, 0.02);
  padding: 15px 0;
`

export default function Footer() {
  return (
    <FooterWrap>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, letterSpacing: '0.18em', fontSize: 16, marginBottom: 12 }}>
          LUCAS NOIR
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', fontSize: 14, marginBottom: 12 }}>
          <a
            style={{ color: '#aaaaaa', textDecoration: 'none' }}
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Instagram
          </a>
          <a style={{ color: '#aaaaaa', textDecoration: 'none' }} href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a style={{ color: '#aaaaaa', textDecoration: 'none' }} href="#contato">
            Localização
          </a>
        </div>

        <div style={{ color: '#888888', fontSize: 12 }}>© 2025 Lucas Noir. Todos os direitos reservados.</div>
      </div>
    </FooterWrap>
  )
}

