import React from 'react';
import { useState } from 'react';
// import * as rtl from '@testing-library';
import HitButton from './HitButton';
import App from '../../App';

test('resets the strike and ball count to zero', () => {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
    let actual;
    let expected;
    actual = HitButton(setStrikes, setBalls)
    expected = 0;
    expect(actual).toBe(expected);
    expect(actual).not.toBe(13);
});