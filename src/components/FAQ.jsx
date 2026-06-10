import { useMemo, useState } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background-color: #080808;
  color: #ffffff;
  padding-top: 120px;
  padding-bottom: 120px;
`

const HeaderGrid = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: end;

  @media (min-width: 900px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`

const FaqItem = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  overflow: hidden;
  background: rgba(26, 26, 26, 0.35);
`

const FaqButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 16px 18px;
  background: transparent;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.01em;
  border: none;
  cursor: pointer;

  &:hover {
    color: #8B0000;
  }
`

const FaqContent = styled.div`
  max-height: ${({ $open }) => ($open ? '220px' : '0px')};
  transition: max-height 280ms ease;
  overflow: hidden;
`

const Answer = styled.p`
  padding: ${({ $open }) => ($open ? '14px 18px 18px' : '0px 18px')};
  color: #cfcfcf;
  line-height: 1.6;
  font-size: 14px;
`

export default function FAQ() {
  const itemsCol1 = useMemo(
    () => [
      {
        q: 'Como agendar uma sessão?',
        a: 'Para agendar, basta preencher o formulário de contato abaixo ou clicar no botão do WhatsApp. Retornamos em até 24 horas úteis com os detalhes da agenda e o orçamento do seu projeto.',
      },
      {
        q: 'Posso ver os designs antes?',
        a: 'Os designs são apresentados diretamente no estúdio no dia marcado para a sessão. Deixamos tempo hábil para ajustes e refinamentos de stencil na pele juntos.',
      },
      {
        q: 'Aceitam walk-in?',
        a: 'Não, atendemos exclusivamente com hora marcada. Isso garante total foco no seu projeto e o estúdio reservado exclusivamente para você.',
      },
    ],
    []
  )

  const itemsCol2 = useMemo(
    () => [
      {
        q: 'Preciso pagar entrada?',
        a: 'Sim, exigimos um sinal de reserva para agendar a data e iniciar o desenvolvimento do design. Este valor é descontado do preço final no dia da sessão.',
      },
      {
        q: 'Posso levar um amigo?',
        a: 'Sim, você pode trazer no máximo um acompanhante. Pedimos bom senso para manter o ambiente de trabalho tranquilo e profissional.',
      },
      {
        q: 'Como me preparar para a sessão?',
        a: 'Evite álcool e exposição solar nas 24h anteriores. Durma bem, alimente-se antes de vir e use roupas que facilitem o acesso ao local da tatuagem.',
      },
    ],
    []
  )

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <Section id="faq">
      <HeaderGrid>
        <div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 56, color: '#ffffff' }}>Dúvidas Frequentes</h2>
        </div>
        <div style={{ color: '#888888', fontSize: 15, letterSpacing: 0.01, paddingBottom: 4 }}>
          Respostas diretas para você decidir com segurança.
        </div>
      </HeaderGrid>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '24px 16px 0 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
              {itemsCol1.map((it, idx) => {
                const globalIndex = idx
                const isOpen = openIndex === globalIndex
                return (
                  <FaqItem key={it.q}>
                    <FaqButton type="button" onClick={() => setOpenIndex((p) => (p === globalIndex ? null : globalIndex))} aria-expanded={isOpen}>
                      {it.q}
                    </FaqButton>
                    <FaqContent $open={isOpen}>
                      <Answer $open={isOpen}>{it.a}</Answer>
                    </FaqContent>
                  </FaqItem>
                )
              })}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
              {itemsCol2.map((it, idx) => {
                const globalIndex = 3 + idx
                const isOpen = openIndex === globalIndex
                return (
                  <FaqItem key={it.q}>
                    <FaqButton type="button" onClick={() => setOpenIndex((p) => (p === globalIndex ? null : globalIndex))} aria-expanded={isOpen}>
                      {it.q}
                    </FaqButton>
                    <FaqContent $open={isOpen}>
                      <Answer $open={isOpen}>{it.a}</Answer>
                    </FaqContent>
                  </FaqItem>
                )
              })}
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 900px){
            #faq > div[style]{ }
          }
        `}</style>
      </div>
    </Section>
  )
}

