import React from 'react';
import styled from 'styled-components';
import { Home, Phone, Package, Twitter, Instagram, GitBranch } from 'lucide-react';

const StyledProductPage0608Labs = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom right, #1a202c, #000000);
  color: white;
`;

const Header = styled.header`
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: calc(2vw + 2rem);
  font-weight: bold;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`;

const ProductsSection = styled.section`
  padding: 4rem 1rem;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 72rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProductBox = styled.div`
  flex: 1;
  background: linear-gradient(to bottom right, #2d3748, #1a202c);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const AnnouncementsSection = styled.section`
  padding: 4rem 1rem;
  position: relative;
  overflow: hidden;
`;

const AnnouncementsCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  background: linear-gradient(to bottom right, #2d3748, #1a202c);
  border-radius: 50%;
`;

const AnnouncementsContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
`;

const AnnouncementsTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const AnnouncementBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const AnnouncementImage = styled.img`
  margin: 0 auto 1rem auto;
  border-radius: 0.25rem;
`;

const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem 0;
`;

const FooterContent = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterLogo = styled.img`
  height: 3rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const FooterSectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const FooterLinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FooterLinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  transition: all 0.3s ease;
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;


const DesignBarSection = styled.section`
  padding: 40px 0;
  background-color: #1a1a1a;
`;

const DesignBarContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  background-color: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Video = styled.video`
  width: 100%;
  display: block;
`;

const DesignBar = () => {
  return (
    <DesignBarSection>
      <DesignBarContainer>
        <Video autoPlay muted loop>
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </DesignBarContainer>
    </DesignBarSection>
  );
};

const ProductPage0608Labs = () => {
  return (
    <StyledProductPage0608Labs>
      <Header>
        <Logo>0608labs</Logo>
        <Nav>
          <NavButton>
            <Home />
          </NavButton>
          <NavButton>
            <Phone />
          </NavButton>
          <NavButton>
            <Package />
          </NavButton>
        </Nav>
      </Header>

      <MainContent>
        <HeroSection>
          <HeroTitle>
            Welcome to 0608labs
            <HeroSubtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </HeroSubtitle>
          </HeroTitle>
        </HeroSection>

        <DesignBar />

        <ProductsSection>
          <ProductsContainer>
            <ProductBox>
              <ProductTitle>Product One</ProductTitle>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
            </ProductBox>
            <ProductBox>
              <ProductTitle>Product Two</ProductTitle>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
            </ProductBox>
          </ProductsContainer>
        </ProductsSection>

        <AnnouncementsSection>
          <AnnouncementsCircle />
          <AnnouncementsContent>
            <AnnouncementsTitle>Announcements</AnnouncementsTitle>
            <AnnouncementBox>
              <AnnouncementImage src="/api/placeholder/400/300" alt="Announcement" />
              <p>Stay tuned for exciting updates and new product releases!</p>
            </AnnouncementBox>
          </AnnouncementsContent>
        </AnnouncementsSection>
      </MainContent>

      <Footer>
        <FooterContent>
          <FooterLogo src="/api/placeholder/150/50" alt="0608labs Logo" />
          <FooterLinks>
            <div>
              <FooterSectionTitle>Company</FooterSectionTitle>
              <SocialIcons>
                <FooterLink href="#"><Twitter /></FooterLink>
                <FooterLink href="#"><Instagram /></FooterLink>
                <FooterLink href="#"><GitBranch /></FooterLink>
              </SocialIcons>
            </div>
            <div>
              <FooterSectionTitle>Legal</FooterSectionTitle>
              <FooterLinkList>
                <FooterLinkItem><FooterLink href="#">Terms</FooterLink></FooterLinkItem>
                <FooterLinkItem><FooterLink href="#">Privacy</FooterLink></FooterLinkItem>
                <FooterLinkItem><FooterLink href="#">Refunds</FooterLink></FooterLinkItem>
              </FooterLinkList>
            </div>
          </FooterLinks>
        </FooterContent>
      </Footer>
    </StyledProductPage0608Labs>
  );
};

export default ProductPage0608Labs;         