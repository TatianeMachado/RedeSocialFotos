import styled from "styled-components";
import logo from "./assets/trabalhoSoulcode.png";

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem 0;
`;

const FooterLinks = styled.div`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    li {
      margin-right: 1rem;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  padding: 20px;
  margin: 0 auto;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <FooterLinks>
          <ul>
            <li>
              <a href="#">Termos de serviço</a>
            </li>
            <li>
              <a href="#">Políticas de privacidade</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
          <p>
            {" "}
            <p>&copy; Grupo 3 soulcode</p>
          </p>
        </FooterLinks>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
