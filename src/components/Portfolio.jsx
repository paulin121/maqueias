import styled from 'styled-components'

import ScrollReveal from './ScrollReveal'


const Section = styled.section`
  background-color: #080808;
  color: #ffffff;
  padding-top: 120px;
  padding-bottom: 120px;
`

const Board = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
`

const Polaroid = styled.div`
  position: relative;
  background: #ffffff;
  padding: 16px;
  padding-bottom: 24px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.75);
  max-width: 320px;
  width: 100%;
  transform: rotate(${({ $rotation }) => $rotation || '0deg'});
  margin-top: ${({ $mt }) => $mt || '0px'};
  transition: transform 220ms ease, box-shadow 220ms ease;

  @media (max-width: 640px) {
    transform: none;
  }

  &:hover {
    transform: translateY(-12px) scale(1.03) rotate(0deg);
    z-index: 30;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9);

    @media (max-width: 640px) {
      transform: translateY(-12px) scale(1.03);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    width: 90px;
    height: 24px;
    background: rgba(156, 163, 175, 0.45);
    transform: translateX(-50%) rotate(-3deg);
    border-radius: 3px;
  }
`

const TapeNote = styled.div`
  position: absolute;
  background: #ffe566;
  color: #111;
  padding: 8px 10px;
  font-weight: 800;
  border-radius: 4px;
  font-size: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  transform: rotate(${({ $rotation }) => $rotation || '0deg'});
  top: ${({ $top }) => $top || 'auto'};
  bottom: ${({ $bottom }) => $bottom || 'auto'};
  left: ${({ $left }) => $left || 'auto'};
  right: ${({ $right }) => $right || 'auto'};
  max-width: 160px;
`

const Photo = styled.img`
  height: 280px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  filter: grayscale(20%);
  display: block;

  @media (max-width: 640px) {
    height: 200px;
  }
`

const DateText = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: #777;
  padding-top: 14px;
`

const Grid = styled.div`
  display: grid;
  gap: 40px;
  justify-items: center;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

function PolaroidCard({ img, date, polRotation, mt, postit }) {
  return (
    <Polaroid $rotation={polRotation} $mt={mt}>
      {/* A foto renderiza primeiro... */}
      <Photo src={img} alt="Foto do portfólio" />
      <DateText>{date}</DateText>
      
      {/* ...e o post-it entra por último, sobrepondo o que estiver atrás */}
      {postit ? (
        <TapeNote
          $rotation={postit.rotation}
          $top={postit.top}
          $bottom={postit.bottom}
          $left={postit.left}
          $right={postit.right}
        >
          {postit.text}
        </TapeNote>
      ) : null}
    </Polaroid>
  )
}

export default function Portfolio() {
  const polaroids = [
    {
      id: 1,
      img: 'https://res.cloudinary.com/dvjrn3dtx/image/upload/f_auto/q_auto/23_Galaxy_Tattoo_Ideas_2025__Cosmic_Designs_from_jkd2yy.jpg',
      date: '2025-01-18',
      polRotation: '-5deg',
      mt: '20px',
      postit: {
        text: 'Muito detalhe nessa!',
        rotation: '-10deg',
        top: '-10px',
        left: '-30px',
      },
    },
    {
      id: 2,
      img: 'https://res.cloudinary.com/dvjrn3dtx/image/upload/f_auto/q_auto/Unveil_the_Intricate_Enigma_Encoded_in_Medusa_kjq6ck.jpg',
      date: '2025-02-07',
      polRotation: '3deg',
      mt: '-30px',
      postit: null,
    },
    {
      id: 3,
      img: 'https://res.cloudinary.com/dvjrn3dtx/image/upload/f_auto/q_auto/Discover_forearm_sleeve_tattoo_ideas_with_florals_jioyhg.jpg',
      date: '2025-03-11',
      polRotation: '-7deg',
      mt: '40px',
      postit: null,
    },
    {
      id: 4,
      img: 'https://res.cloudinary.com/dvjrn3dtx/image/upload/f_auto/q_auto/5629568280001428_arwncb.jpg',
      date: '2025-04-02',
      polRotation: '4deg',
      mt: '-12px',
      postit: null,
    },
    {
      id: 5,
      img: 'https://res.cloudinary.com/dvjrn3dtx/image/upload/f_auto/q_auto/914862422157919_a5fczk.jpg',
      date: '2025-05-16',
      polRotation: '-3deg',
      mt: '28px',
      postit: {
        text: 'Primeira tattoo!',
        rotation: '8deg',
        bottom: '40px',
        right: '-25px',
      },
    },
    {
      id: 6,
      img: 'https://res.cloudinary.com/dvjrn3dtx/image/upload/f_auto/q_auto/25_Feminine_Floral_Color_Tattoos_That_Look_pfsqkv.jpg',
      date: '2025-06-08',
      polRotation: '6deg',
      mt: '-20px',
      postit: null,
    },
  ]

  return (
    <Section id="portfolio">
      <Board>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 64, textAlign: 'center', marginBottom: 80 }}>
          Portfólio de Tatuagens
          
        </h2>

        <Grid>
          {polaroids.map((p, idx) => (
            <ScrollReveal key={p.id} direction={idx % 2 === 0 ? 'left' : 'right'}>
              <PolaroidCard
                img={p.img}
                date={p.date}
                polRotation={p.polRotation}
                mt={p.mt}
                postit={p.postit}
              />
            </ScrollReveal>
          ))}
        </Grid>
      </Board>
    </Section>
  )
}

