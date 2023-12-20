import { render } from '@testing-library/react'
import App from './app';

describe('App Component', () => {
    
    it('should render app correctly', () => {
        render(<App />);
        expect(App).toBeTruthy();
    });

});