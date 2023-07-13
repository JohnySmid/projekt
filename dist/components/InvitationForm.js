import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { GroupsQuery } from '../queries/GroupsQuery';
import { EventsSelector } from './EventsSelector';
import { InviteGroupButton } from './InviteGroupButton';
import { EventInvitationTable } from './EventInvatationTable';

/**
 * A component that displays an invitation form for selecting and inviting users and groups to an event.
 * @function
 * @param {Object} props - The component props.
 * @param {Array} props.data - The events data.
 * @returns {JSX.Element} - The rendered invitation form component.
 */

// Komponenta pro formulář pozvánky
export const InvitationForm = ({
  data
}) => {
  // redux
  const dispatch = useDispatch();
  const [GroupTypeSetter, setGroupTypeSetter] = useState([]); // Stav pro uložení typů skupin

  // Funkce pro získání typů skupin z databáze pomocí asynchronního volání
  const groupTypeFetch = () => (dispatch, getState) => {
    GroupsQuery().then(response => response.json()).then(json => {
      // Extrahujte data z groupPage, ? => pokud existují data, jinak nevytvoří chybu
      const GroupTypeSetter = json.data?.groupPage;
      if (GroupTypeSetter) {
        setGroupTypeSetter(GroupTypeSetter);
      } else {
        console.log("Error ocurred in groupTypeFetch function for fetching data from database: \n", console.error());
      }
      return json;
    });
  };
  useEffect(() => {
    dispatch(groupTypeFetch()); // Získání typů skupin po načtení komponenty
  }, []);
  const [selectedOption, setSelectedOption] = useState('Choose group'); // Stav pro vybranou možnost výběru skupiny
  const [selectedGroupId, setselectedGroupId] = useState(''); // Stav pro vybrané ID skupiny

  // Funkce pro zachycení změny výběru skupiny
  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
    setselectedGroupId(e.target.value);
  };
  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form.Label, {
    style: {
      fontSize: '20px'
    }
  }, "Event"), /*#__PURE__*/React.createElement(EventsSelector, null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Label, {
    style: {
      fontSize: '20px'
    }
  }, "Invite specific user"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(EventInvitationTable, {
    key: data.id,
    data: data.presences
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Label, {
    style: {
      fontSize: '20px'
    }
  }, "Invite Group"), /*#__PURE__*/React.createElement(Form.Select, {
    value: selectedOption,
    onChange: handleOptionChange
  }, /*#__PURE__*/React.createElement("option", null, "Choose group"), GroupTypeSetter.map(type => {
    if (type.name) {
      return /*#__PURE__*/React.createElement("option", {
        key: type.id,
        value: type.id
      }, type.name);
    }
    return null;
  })), selectedGroupId !== '' ? /*#__PURE__*/React.createElement(InviteGroupButton, {
    eventId: data.id,
    groupId: selectedGroupId
  }) : null)));
};