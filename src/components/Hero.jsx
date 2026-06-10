import styled from 'styled-components'
import { motion } from 'framer-motion' // 🔥 Importando o framer-motion para a animação
import BlurText from './BlurText'
import CircularGallery from './CircularGallery'
import ScrollReveal from './ScrollReveal'
import LightRays from './LightRays'

const Wrapper = styled.section`
  background-color: #080808;
  color: #ffffff;
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(to bottom, transparent, #080808);
    pointer-events: none;
    z-index: 2;
  }
`

const ButtonsRow = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 16px;
`

const Title = styled.div`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 52px;
  line-height: 1.05;
  letter-spacing: -0.04em;
  text-align: center;
  max-width: 700px;
  margin-bottom: 12px;
  color: #ffffff;

  @media (max-width: 640px) {
    font-size: 32px;
  }
`

const GalleryWrap = styled.div`
  width: 100vw;
  height: 440px;
  position: relative;
  margin-top: 32px;

  @media (max-width: 640px) {
    height: 380px;
  }
`

// 🔥 Criando uma versão animada do GalleryWrap
const AnimatedGalleryWrap = motion(GalleryWrap);

const PrimaryBtn = styled.a`
  border: 1px solid #ffffff;
  border-radius: 9999px;
  padding: 12px 28px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #ffffff;
  text-decoration: none;
  transition: background 180ms ease, color 180ms ease;

  &:hover {
    background: #ffffff;
    color: #000000;
  }
`

const SecondaryBtn = styled.a`
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.92);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: transform 180ms ease, color 180ms ease;

  &:hover {
    color: #8B0000;
    transform: translateX(4px);
  }
`

export default function Hero() {
  return (
    <Wrapper>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: 16, paddingRight: 16, width: '100%', boxSizing: 'border-box' }}>
        <ScrollReveal direction="left">
          <Title>
            <BlurText
              text="A Tatuagem Que Você Não Esquece."
              delay={120}
              animateBy="words"
              direction="top"
            />
          </Title>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <p style={{ fontSize: 15, color: '#888888', fontWeight: 300, letterSpacing: '0.03em', textAlign: 'center', maxWidth: 420 }}>
            Blackwork exclusivo com hora marcada. Onde design limpo encontra arte permanente.
          </p>
        </ScrollReveal>
      </div>

      {/* 🔥 Trocamos o GalleryWrap antigo pelo nosso wrapper animado com as propriedades de transição */}
      <AnimatedGalleryWrap 
        style={{ position: 'relative', zIndex: 1 }}
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1], // Efeito premium de desaceleração suave
          delay: 0.4 // Entra logo após as primeiras palavras do título começarem a surgir
        }}
      >
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
          scrollSpeed={2}
          items={[
            { image: 'https://res.cloudinary.com/dxm5rcwdd/image/upload/Captura_de_tela_2026-06-10_163504_nw4dyv', text: '' },
            { image: 'https://res.cloudinary.com/dxm5rcwdd/image/upload/Captura_de_tela_2026-06-10_163621_bqrw4p', text: '' },
            { image: 'https://res.cloudinary.com/dxm5rcwdd/image/upload/Captura_de_tela_2026-06-10_163604_dv0hu3', text: '' },
            { image: 'https://res.cloudinary.com/dxm5rcwdd/image/upload/Captura_de_tela_2026-06-10_163550_msnlzt', text: '' },
            { image: 'https://res.cloudinary.com/dxm5rcwdd/image/upload/Captura_de_tela_2026-06-10_163640_rmkpgm', text: '' },
            { image: 'https://res.cloudinary.com/dxm5rcwdd/image/upload/Captura_de_tela_2026-06-10_163532_zcucd5', text: '' },
          ]}
        />
      </AnimatedGalleryWrap>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <ButtonsRow>
          <PrimaryBtn href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
            Agendar Consulta
          </PrimaryBtn>
          <SecondaryBtn href="#portfolio">Ver Portfólio →</SecondaryBtn>
        </ButtonsRow>
      </div>

      <div style={{ height: 32 }} />
    </Wrapper>
  )
}