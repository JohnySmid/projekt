import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changeEvent } from "../reducers/EventSlice";
import React from 'react';

/**
 * A component that displays a selector for choosing an event.
 * @function
 * @returns {JSX.Element} - The rendered event selector component.
 */

// Komponenta pro výběr události
export const EventsSelector = () => {
  // Získání dat o událostech ze stavu Redux pomocí hooku 'useSelector'
  const data = useSelector(state => state.events);
  // Získání dispatch funkce ze stavu Redux pomocí hooku 'useDispatch'
  const dispatch = useDispatch();

  // Lokální stav pro vybranou možnost
  const [selectedOption, setSelectedOption] = useState('choose event');

  // Funkce pro změnu vybrané možnosti
  const handleOptionChange = e => {
    setSelectedOption(e);
  };

  // Zobrazení select elementu pro výběr události
  if (data) {
    return /*#__PURE__*/React.createElement("select", {
      className: "form-select form-select-lg mb-3",
      "aria-label": ".form-select-lg example",
      value: selectedOption,
      onChange: e => {
        // Vyvolání akce 'changeEvent' pomocí dispatch funkce a předání vybrané hodnoty
        dispatch(changeEvent(e.target.value));
        handleOptionChange(e.target.value);
      }
    }, /*#__PURE__*/React.createElement("option", null, "Choose event"), data.map(e => /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name)));
  }
};