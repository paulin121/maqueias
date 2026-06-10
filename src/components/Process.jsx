import { useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'

import ScrollReveal from './ScrollReveal'


const Section = styled.section`
  background-color: #080808;
  color: #ffffff;
  padding-top: 120px;
  padding-bottom: 120px;
  padding-left: 16px;
  padding-right: 16px;
`

const Header = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 48px;

  @media (min-width: 900px) {
    align-items: center;
  }
`

const TimelineWrap = styled.div`
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
`

const TimelineSvg = styled.svg`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 90%;
  height: 100%;
  pointer-events: none;
`

const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 26px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const TimelineItem = styled.div`
  position: relative;
`

const TimelineCard = styled.div`
  position: relative;
  background: #1a1a1a;
  border-radius: 16px;
  padding: 32px;
  max-width: 480px;
  width: 100%;
  border: 1px solid rgba(255,255,255,0.05);
  transition: transform 220ms ease, border-color 220ms ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #8B0000;
  }
`

const NumberWatermark = styled.div`
  position: absolute;
  top: -18px;
  left: 18px;
  font-family: 'Playfair Display, serif';
  font-size: 80px;
  color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
`

const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 9999px;
  background: #8B0000;
  box-shadow: 0 0 0 6px rgba(139, 0, 0, 0.18), 0 0 26px rgba(139, 0, 0, 0.55);
  position: absolute;
  top: 34px;
  left: 50%;
  transform: translate(-50%, 0);
`

export default function Process() {
  const svgRef = useRef(null)

  const cards = useMemo(
    () => [
      {
        num: '01',
        title: 'Compartilhe Sua Ideia',
        text: 'Envie sua ideia inicial, referências visuais que te inspiram, o tamanho desejado e o local do corpo. Alinhamos sua visão com os limites anatômicos da pele.',
      },
      {
        num: '02',
        title: 'Transformando em Arte',
        text: 'Eu crio um design exclusivo de blackwork personalizado para você. Discutimos, fazemos ajustes e refinamos todos os detalhes do design até que a arte final esteja aprovada.',
      },
      {
        num: '03',
        title: 'A Sessão de Tatuagem',
        text: 'No dia e hora agendados, aplicamos o stencil na pele para garantir o caimento perfeito. Todo o processo em biossegurança total com materiais descartáveis.',
      },
      {
        num: '04',
        title: 'Arte Para a Vida Toda',
        text: 'Ao fim da sessão você recebe instruções de pós-tatuagem e um guia detalhado de cuidados para manter o preto denso e nítido por anos.',
      },
    ],
    []
  )

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const path = svg.querySelector('path')
    if (!path) return

    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length} ${length}`
    path.style.strokeDashoffset = `${length}`

    path.getBoundingClientRect()
    path.style.transition = 'stroke-dashoffset 1400ms ease'
    path.style.strokeDashoffset = '0'
  }, [])

  return (
    <Section id="processo">
      <Header>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: 56,
            color: '#ffffff',
            lineHeight: 1.05,
            overflowWrap: 'anywhere',
            wordBreak: 'break-word',
          }}
        >
          Da Ideia à Tinta
        </h2>
        <p style={{ color: '#8b8b8b', letterSpacing: '0.02em', maxWidth: 720, textAlign: 'center', lineHeight: 1.6 }}>
          Um processo claro, seguro e personalizado — do primeiro briefing até a sua tatuagem final.
        </p>

      </Header>

      <TimelineWrap>
        <TimelineSvg ref={svgRef} viewBox="0 0 800 900" preserveAspectRatio="none">
          <path
            d="M400 20 C 400 180, 400 180, 400 320 S 400 620, 400 780"
            fill="none"
            stroke="#8B0000"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ strokeDasharray: '8 10' }}
          />
        </TimelineSvg>

        <TimelineGrid>
          {cards.map((c, idx) => {
            const isOdd = idx % 2 === 0
            return (
              <TimelineItem key={c.num} style={{ display: 'flex', justifyContent: 'center' }}>
                <Dot />
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: isOdd ? 'flex-end' : 'flex-start',
                  }}
                >
                  <ScrollReveal direction={isOdd ? 'left' : 'right'}>
                    <TimelineCard>
                      <NumberWatermark>{c.num}</NumberWatermark>
                      <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 20, marginBottom: 12, marginTop: 24, color: '#ffffff' }}>
                        {c.num} — {c.title}:
                      </h3>
                      <p style={{ color: '#cccccc', lineHeight: 1.65, fontSize: 15, margin: 0 }}>{c.text}</p>
                    </TimelineCard>
                  </ScrollReveal>
                </div>
              </TimelineItem>
            )
          })}
        </TimelineGrid>
      </TimelineWrap>
    </Section>
  )
}

