import {render, screen} from '@testing-library/react';
import {Board, Square} from './game';
import '@testing-library/jest-dom';

describe('Square button', function () {
    it('should be initialized empty', function () {
        render(<Square/>);
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('');
    });
});

describe('Board', function () {
    beforeEach(function () {
        render(<Board/>);
    });

    it('a square should have an X when clicked', function () {
        const button = screen.getAllByRole('button');
        button[5].click();
        expect(button[5]).toHaveTextContent('X');
    });


    describe('End of the game', function () {
        describe('when one player wins', function () {
        });
    });

    describe('Check Winner', function () {

    });
});
