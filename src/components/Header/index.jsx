import React from 'react';
import {usePrefs} from '../../prefs-context';

const Header = () => {
    const {veg, setVegan} = usePrefs();

    const handleVeganChange = (e) => {
        e.target.value === 'vegan' ? setVegan(true) : setVegan(false);
        console.log(veg, e.target.value);
    }

    return (
        <>
            <h2>Would you like vegan pizza only?</h2>
            <select onChange={handleVeganChange}>
                <option value='vegan'>Yes, please!</option>
                <option value='notvegan'>No, thanks...</option>
            </select>
        </>
    )
}

export default Header;