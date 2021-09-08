import React from "react";
import PropTypes from "prop-types";
import Button from "./Button.styled";

export default function StyledBtn({ type, children }) {
  return (
    <Button type={type}>
      {children}
      {type === "transparent" && (
        <svg
          width={8}
          height={12}
          xmlns="http://www.w3.org/2000/svg"
          style={{ paddingLeft: "13px" }}
        >
          <path
            d="M1.322 1l5 5-5 5"
            stroke="#D87D4A"
            strokeWidth={2}
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      )}
    </Button>
  );
}

StyledBtn.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
