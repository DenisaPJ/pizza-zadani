import React from "react";
import './style.css';
import {usePrefs} from '../../prefs-context';

const Check = ({checked, vegan, onChange}) => {
  const {veg} = usePrefs();
  return (
    <>
      {veg ? (
        <button
          className={`check ${!vegan && "check--disabled"}`}
          disabled={!vegan}
        >
          {checked ? "✓" : ""}
        </button>
      ) : (
        <button className={`check`} onClick={() => onChange()}>
          {checked ? "✓" : ""}
        </button>
      )}
    </>
  );
};

export default Check;
