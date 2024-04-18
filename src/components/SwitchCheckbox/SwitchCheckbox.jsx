import "./SwitchCheckbox.css";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SwitchCheckbox({ isChecked, onCheckboxChange  }) {

  return (
    <section className="switch">
      <label className="switch__label">
        <input type="checkbox" className="switch__input" checked={isChecked}
          onChange={onCheckboxChange} />
        <span className="switch__slider" />
      </label>
      <p className="switch__description">Короткометражки</p>
    </section>
  );
}