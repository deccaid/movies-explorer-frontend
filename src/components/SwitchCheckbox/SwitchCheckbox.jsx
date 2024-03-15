import "./SwitchCheckbox.css";

export default function SwitchCheckbox({ isChecked, onCheckboxChange }) {
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