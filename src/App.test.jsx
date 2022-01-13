import { screen, render, fireEvent } from '@testing-library/react';
import App from './App';

describe('tests for app', () => {
    it('testing that the app is a working.', () => {
        render(<App/>);
        const dateOutput = screen.getByLabelText(/output/)
    
        expect(dateOutput.textContent).toEqual('Please select a date')
    });
})