import { render } from "@testing-library/react";
import Footer from "./Footer";

describe('Footer Component', () => {

    it('should render footer correctly', () => {
        render(<Footer />);
        expect(Footer).toBeTruthy();
    });

});