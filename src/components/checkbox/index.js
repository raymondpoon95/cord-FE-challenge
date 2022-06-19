import React from "react";
import styled from "styled-components";

export default function Checkbox({
  id,
  name,
  checked,
  label,
  onChange,
  open,
  heading,
}) {
  // TODO: Style the component and checkmark to look like the mockup provided
  return (
    <CheckboxCont className={open ? "active" : ""}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.id, heading)}
      ></input>
      <label htmlFor={id}>{label}</label>
    </CheckboxCont>
  );
}

const CheckboxCont = styled.div`
  position: relative;
  padding: 5px 0;
  font-weight: 300;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 450ms ease-in-out, transform 450ms ease-in-out;
  pointer-events: none;

  &.active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  label {
    padding-left: 10px;
  }
`;
