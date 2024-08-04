import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MainPage } from "../components/main-page";

describe('Sign In Test', () => {
    it('Simple test', () => {
        const { getByText } = render(<MainPage />);

        expect(getByText("HELLO")).toBeInTheDocument();
    })
})