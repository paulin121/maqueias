import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  /* 🔥 Mudança dinâmica baseada no scroll para um efeito mais premium */
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(8, 8, 8, 0.95)' : 'rgba(8, 8, 8, 0.75)')};
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.06)')};
  transition: background 300ms ease, border-color 300ms ease;
`

const Inner = styled.div`
  width: min(1120px, 100%);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.a`
  display: flex;
  align-items: baseline;
  gap: 6px;
  text-decoration: none;
  letter-spacing: 0.18em;
  font-weight: 800;
  font-size: 16px; /* Tamanho fixado para consistência */
`

const LogoLucas = styled.span`
  color: #8B0000;
`

const LogoNoir = styled.span`
  color: #ffffff;
`

const Links = styled.div`
  display: none;
  gap: 28px;
  align-items: center;

  @media (min-width: 900px) {
    display: flex;
  }
`

const Link = styled.a`
  position: relative;
  color: #9ca3af;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.02em;
  transition: color 200ms ease;

  &:hover {
    color: #ffffff;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 2px;
    background: #8B0000;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 220ms ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`

const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border: 1px solid #ffffff;
  border-radius: 9999px;
  color: #ffffff;
  text-decoration: none;
  transition: background 200ms ease, color 200ms ease;
  white-space: nowrap;

  &:hover {
    background: #ffffff;
    color: #000000;
  }

  /* 🔥 ESCONDE O BOTÃO DO TOPO NO MOBILE para não amassar o layout */
  @media (max-width: 900px) {
    display: none;
  }
`

const MobileToggle = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  border-radius: 9999px;
  height: 40px;
  width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: background 200ms ease;

  &:active {
    background: rgba(255, 255, 255, 0.15);
  }

  @media (min-width: 900px) {
    display: none;
  }
`

const MobileMenu = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 64px;
  background: rgba(8, 8, 8, 0.98); /* Fundo um pouco mais opaco para não misturar com o texto de trás */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px 20px;
  display: ${({ $open }) => ($open ? 'block' : 'none')};
  backdrop-filter: blur(20px);

  @media (min-width: 900px) {
    display: none;
  }
`

const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Mais espaço para o clique do dedo ficar confortável */
`

const MobileLink = styled.a`
  color: #9ca3af;
  text-decoration: none;
  font-size: 16px; /* Fonte ligeiramente maior para acessibilidade mobile */
  font-weight: 500;
  padding: 4px 0;
  transition: color 200ms ease;

  &:hover, &:active {
    color: #ffffff;
  }
`

/* 🔥 Um novo wrapper exclusivo para o botão dentro do menu hambúrguer */
const MobileCTAWrapper = styled.div`
  margin-top: 14px;
  width: 100%;

  a {
    display: flex; /* Altera para flex para ocupar os 100% perfeitamente */
    width: 100%;
    padding: 14px;
    font-size: 14px;
    background: #ffffff;
    color: #000000;
    border-color: #ffffff;
    font-weight: 600;
  }
`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = useMemo(
    () => [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Processo', href: '#processo' },
      { label: 'Portfólio', href: '#portfolio' },
      { label: 'FAQ', href: '#faq' },
    ],
    []
  )

  return (
    <Nav $scrolled={scrolled}>
      <Inner>
        <Logo href="#inicio" aria-label="Miquéias Tattoo - Início">
          <LogoLucas>MIQUÉIAS</LogoLucas>
          <LogoNoir>TATTOO</LogoNoir>
        </Logo>

        <Links>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </Links>

        {/* Esse só aparece em telas grandes */}
        <CTA href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
          Agendar Consulta
        </CTA>

        <MobileToggle
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? '✕' : '☰'} {/* Muda dinamicamente o ícone de abrir/fechar */}
        </MobileToggle>
      </Inner>

      <MobileMenu $open={menuOpen}>
        <MobileLinks>
          {links.map((l) => (
            <MobileLink
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </MobileLink>
          ))}
          
          {/* Esse bloco estilizado só ativa no menu mobile aberto */}
          <MobileCTAWrapper>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
              Agendar Consulta
            </a>
          </MobileCTAWrapper>
        </MobileLinks>
      </MobileMenu>
    </Nav>
  )
}