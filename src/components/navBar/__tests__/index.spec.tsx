import {describe, it} from 'vitest';
import { render } from '@testing-library/react';
import NavBar from '../index';

describe('NavBar', () => {
    it('should render NavBar component', () => {
        render(<NavBar/>);
    });
})
