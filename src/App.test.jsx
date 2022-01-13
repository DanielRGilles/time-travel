import { screen, render, fireEvent } from '@testing-library/react';
import App from './App';

describe('tests for app', () => {
    it('testing that the app is a working.', () => {
        render(<App/>);
        const dateOutput = screen.getByLabelText(/output/)
    
        expect(dateOutput.textContent).toEqual('Please select a date')
    });
    it('tests functionality of app', () => {
        render(<App/>);
        const dateInput = screen.getByLabelText('date');
        const undoButton = screen.getByText('Undo')
        const redoButton = screen.getByText('Redo')
        
        fireEvent.change(dateInput, {target: {value: '2022-01-01'}})
        expect(dateInput.value).toEqual('2022-01-01')
        
        fireEvent.change(dateInput, {target: {value: '2022-02-01'}})
        expect(dateInput.value).toEqual('2022-02-01')
        
        fireEvent.change(dateInput, {target: {value: '2022-03-01'}})
        expect(dateInput.value).toEqual('2022-03-01')

        fireEvent.click(undoButton)
        expect(dateInput.value).toEqual('2022-02-01')

        fireEvent.click(undoButton)
        expect(dateInput.value).toEqual('2022-01-01')

        fireEvent.click(redoButton)
        expect(dateInput.value).toEqual('2022-02-01')

        fireEvent.change(dateInput, {target: {value: '2022-04-01'}})
        expect(dateInput.value).toEqual('2022-04-01')

        fireEvent.click(undoButton)
        expect(dateInput.value).toEqual('2022-02-01')

        fireEvent.click(undoButton)
        expect(dateInput.value).toEqual('2022-01-01')

        fireEvent.click(redoButton)
        expect(dateInput.value).toEqual('2022-02-01')
        
        fireEvent.click(redoButton)
        expect(dateInput.value).toEqual('2022-04-01')
    })
})