import { MarginedText } from "./StyledComponents";
const Footer = () => {
  return (
    <MarginedText>
      Powered by{" "}
      <a
        href="https://www.coindesk.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Coin Desk
      </a>
    </MarginedText>
  );
};

export default Footer;
