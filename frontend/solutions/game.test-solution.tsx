import {render, screen} from '@testing-library/react';
import {Board, checkWinner, EPlayer, Square} from './game-solution';
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

    it('next player should change after each click', async function () {
        expect(screen.getByText('Next player: X', {exact: false})).toBeInTheDocument();
        screen.getAllByRole('button')[5].click();
        expect(screen.getByText('Next player: O', {exact: false})).toBeInTheDocument();
    });

    it('squares should alternate X and O', function () {
        const button0 = screen.getByTestId('square-0');
        button0.click();
        expect(button0).toHaveTextContent('X');
        const button1 = screen.getByTestId('square-1');
        button1.click();
        expect(button1).toHaveTextContent('O');
    });

    it('should not change square already used', function () {
        const button0 = screen.getByTestId('square-0');
        button0.click();
        expect(button0).toHaveTextContent('X');
        const button1 = screen.getByTestId('square-0');
        button1.click();
        expect(button1).toHaveTextContent('X');
    });

    describe('End of the game', function () {
        describe('when one player wins', function () {
            let buttonPlayerX: HTMLElement[]
            let buttonPlayerO: HTMLElement[]

            beforeEach(function () {
                const button = screen.getAllByRole('button');
                buttonPlayerX = button;
                buttonPlayerO = button;

                buttonPlayerX[0].click();
                buttonPlayerO[8].click();
                buttonPlayerX[1].click();
                buttonPlayerO[7].click();
                buttonPlayerX[2].click();
            });
            it('should be declared with three X in first row', function () {
                expect(screen.getByText('Winner is', {exact: false})).toHaveTextContent('X');
            });
            it('should stop the game', function () {
                expect(screen.getByText('Winner is', {exact: false})).toHaveTextContent('X');
                buttonPlayerX[6].click();
                expect(buttonPlayerX[6]).toBeEmptyDOMElement();
            });
        });
    });

    describe('Check Winner', function () {
        it('should return X if first row is made of X', function () {
            const squares =
                [
                    EPlayer.X, EPlayer.X, EPlayer.X,
                    EPlayer.O, EPlayer.O, null,
                    null, null, null
                ]
            expect(checkWinner(squares)).toEqual(EPlayer.X)
        });
        it('should return O if first row is made of O', function () {
            const squares = [EPlayer.O, EPlayer.O, EPlayer.O]
            expect(checkWinner(squares)).toEqual(EPlayer.O)
        });
        it('should return X if diagonal is made of X', function () {
            const squares =
                [
                    EPlayer.X, EPlayer.O, EPlayer.X,
                    EPlayer.O, EPlayer.X, null,
                    EPlayer.O, EPlayer.O, EPlayer.X
                ]
            expect(checkWinner(squares)).toEqual(EPlayer.X)
        });
        it('should return O if first column is made of O', function () {
            const squares =
                [
                    EPlayer.O, EPlayer.X, EPlayer.X,
                    EPlayer.O, EPlayer.X, null,
                    EPlayer.O, EPlayer.O, EPlayer.X
                ]
            expect(checkWinner(squares)).toEqual(EPlayer.O)
        });
    });
});
