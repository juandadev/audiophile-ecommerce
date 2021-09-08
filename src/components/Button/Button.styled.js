import styled from "styled-components";

const Button = styled.button`
  padding: 15px 30px;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  color: ${(props) =>
    (props.type === "primary" && "white") ||
    (props.type === "secondary" && "black") ||
    (props.type === "transparent" && "rgba(0, 0, 0, 0.5)")};
  border: ${(props) =>
    (props.type === "primary" && "none") ||
    (props.type === "secondary" && "1px solid black") ||
    (props.type === "transparent" && "none")};
  background-color: ${(props) =>
    (props.type === "primary" && "var(--primary-color)") ||
    (props.type === "secondary" && "white") ||
    (props.type === "transparent" && "transparent")};

  &:hover {
    background-color: ${(props) =>
      (props.type === "primary" && "var(--hover-primary-color)") ||
      (props.type === "secondary" && "black") ||
      (props.type === "transparent" && "transparent")};
    color: ${(props) =>
      (props.type === "primary" && "white") ||
      (props.type === "secondary" && "white") ||
      (props.type === "transparent" && "var(--primary-color)")};
  }
`;

export default Button;
