import styled from 'styled-components'
import TiltedCard from './TiltedCard'
import ScrollReveal from './ScrollReveal'

const Section = styled.section`
  background-color: #080808;
  color: #ffffff;
  padding-top: 120px;
  padding-bottom: 120px;
  overflow-x: hidden;
  padding-left: 16px;
  padding-right: 16px;

  @media (max-width: 640px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

const Columns = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 5rem;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
`

const BulletList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0; 
  list-style: none; 
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
  line-height: 1.6;
  max-width: 100%; 
  box-sizing: border-box;

  li {
    max-width: 100%;
    overflow-wrap: break-word; 
    word-wrap: break-word;
  }
`

const StickerBadge = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px; 
  background: #ffffff;
  color: #000000;
  font-weight: 800;
  font-size: 11px;
  text-transform: uppercase;
  padding: 10px 14px;
  border: 2px solid #000000;
  border-radius: 6px;
  transform: rotate(-8deg);
  white-space: nowrap;


  @media (max-width: 640px) {
    bottom: 10px;
    right: 10px;
    padding: 8px 12px;
    font-size: 9px;
  }
`

const SecondaryImageWrap = styled.div`
  margin-top: 40px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  max-width: 100%;
  overflow: visible;

 @media (max-width: 640px) {
  display: flex;
  justify-content: center; 
  margin-top: 24px;
}
`

const Title = styled.h2`
  font-family: 'Playfair Display', serif; 
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 32px;
  overflow-wrap: break-word;

  @media (max-width: 640px) {
    font-size: 28px;
    line-height: 1.15;
    margin-bottom: 20px;
  }
`

const RightCol = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  overflow: hidden; 
`

const DesktopTiltedCardWrap = styled.div`
  display: block;

  @media (max-width: 640px) {
    display: none;
  }
`

const MobileTiltedCardWrap = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: block;
    width: 100%;
  }
`

export default function About() {
  return (
    <Section id="sobre">
      <Columns>
        <div>
          <ScrollReveal direction="left">
            <ImgContainer>
              <DesktopTiltedCardWrap>
                <TiltedCard
                  imageSrc="https://res.cloudinary.com/dxm5rcwdd/image/upload/perfil_yiwslv"
                  altText="Foto do estúdio"
                  captionText="Maquéias"
                  containerHeight="500px"
                  containerWidth="100%"
                  imageHeight="500px"
                  imageWidth="400px"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip
                  displayOverlayContent={false}
                />
              </DesktopTiltedCardWrap>

              <MobileTiltedCardWrap>
                <TiltedCard
                  imageSrc="https://res.cloudinary.com/dxm5rcwdd/image/upload/perfil_yiwslv"
                  altText="Foto do estúdio"
                  captionText="Lucas Noir"
                  containerHeight="320px"
                  containerWidth="100%"
                  imageHeight="320px"
                  imageWidth="100%" 
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip
                  displayOverlayContent={false}
                />
              </MobileTiltedCardWrap>
            </ImgContainer>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="right">
          <RightCol>
            <Title>Conheça o Artista</Title>

            <BulletList>
              <li>
                <span style={{ color: '#8B0000', fontWeight: 700 }}>* </span>
                Antes de tatuar, preenchia sketchbooks com designs ousados e abstratos, experimentando com contrastes brutais e formas geométricas que definiriam seu estilo único no blackwork contemporâneo.
              </li>
              <li>
                <span style={{ color: '#8B0000', fontWeight: 700 }}>* </span>
                Tatuar é mais que habilidade — exige disciplina e anos de prática silenciosa. Cada traço na pele é definitivo, exigindo precisão cirúrgica e um entendimento profundo da anatomia humana e do envelhecimento dos pigmentos.
              </li>
              <li>
                <span style={{ color: '#8B0000', fontWeight: 700 }}>* </span>
                Hoje trabalho em estúdio privado, focado em cada peça como obra única. Atendimento exclusivo com hora marcada para criar designs personalizados que contam histórias fortes através de contraste puro e tinta preta densa.
              </li>
            </BulletList>

            <SecondaryImageWrap>
              <img
                src="https://res.cloudinary.com/dvjrn3dtx/image/upload/f_auto/q_auto/Step_inside_a_high-design_tattoo_studio_where_abwabi.jpg"
                alt="Foto secundária"
                style={{ borderRadius: 16, maxWidth: 300, width: '100%', display: 'block' }}
              />
              <StickerBadge>10+ Anos de Experiência</StickerBadge>
            </SecondaryImageWrap>
          </RightCol>
        </ScrollReveal>
      </Columns>
    </Section>
  )
}