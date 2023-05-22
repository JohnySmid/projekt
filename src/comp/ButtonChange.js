import { useState, useCallback } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

export const ButtonChange = ({ children, presence }) => {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Prijmout', value: '1' },
    { name: 'Zrusit', value: '2' },
  ];

  const onClick = () => {
    console.log('jdu zmenit', { presence });
  };

  // State to control the visibility of the toggle button
  const [showToggleButton, setShowToggleButton] = useState(false);

  // Callback to show the toggle button
  const handleShowToggleButton = useCallback(() => {
    setShowToggleButton(true);
  }, []);

  // Callback to hide the toggle button
  const handleHideToggleButton = useCallback(() => {
    setShowToggleButton(false);
  }, []);

  if (!showToggleButton) {
    // Render the button without the toggle button
    return (
      <button className='btn btn-sm btn-warning' onClick={handleShowToggleButton}>
        {children}
      </button>
    );
  } else {
    // Render the button with the toggle button
    return (
      <>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? 'outline-success' : 'outline-danger'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              onClick={onClick}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <tr>
            <button className='btn btn-sm btn-danger' onClick={handleHideToggleButton}>
                Cancel
            </button>
        </tr>
      </>
    );
  }
};