import { useState } from 'react';

const BackgroundImagePositionField = ({ 
  value = 'center', 
  onChange, 
  name = 'backgroundImagePosition',
  label = 'Background Image Position'
}) => {
  const [selectedPosition, setSelectedPosition] = useState(value);

  const positionOptions = [
    { value: 'center', label: 'Center' },
    { value: 'top left', label: 'Top Left' },
    { value: 'top right', label: 'Top Right' },
    { value: 'bottom left', label: 'Bottom Left' },
    { value: 'bottom right', label: 'Bottom Right' }
  ];

  const handleChange = (positionValue) => {
    setSelectedPosition(positionValue);
    if (onChange) {
      onChange(positionValue);
    }
  };

  return (
    <div className="background-position-field">
      <label className="field-label">{label}</label>
      <div className="radio-options">
        {positionOptions.map((option) => (
          <label key={option.value} className="radio-option">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedPosition === option.value}
              onChange={() => handleChange(option.value)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BackgroundImagePositionField;