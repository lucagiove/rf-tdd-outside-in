import { render, screen } from '@testing-library/react';
import { Board, Square } from './game';
import '@testing-library/jest-dom';

describe('Square button', function () {
	it('should be initialized empty', function () {
		render(<Square />);
		const button = screen.getByRole('button');
		expect(button).toHaveTextContent('');
	});
});

describe('Board', function () {
	beforeEach(function () {
		render(<Board />);
	});

	it('a square should have an X when clicked', function () {
		const button = screen.getAllByRole('button');
		button[5].click();
		expect(button[5]).toHaveTextContent('X');
	});

	it('next player should change after each click', async function () {
		expect(screen.getByText('Next player: X', { exact: false })).toBeInTheDocument();
		screen.getAllByRole('button')[5].click();
		expect(screen.getByText('Next player: O', { exact: false })).toBeInTheDocument();
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

	describe('Winner', function () {
		it('should be declared with three X in first row', function () {
			const button = screen.getAllByRole('button');
			const buttonPlayerX = button;
			const buttonPlayerO = button;
			buttonPlayerX[0].click();
			buttonPlayerO[8].click();
			buttonPlayerX[1].click();
			buttonPlayerO[7].click();
			buttonPlayerX[2].click();
			expect(screen.getByText('Winner is', { exact: false })).toHaveTextContent('X');
		});
		it('should stop the game', function () {
			const button = screen.getAllByRole('button');
			const buttonPlayerX = button;
			const buttonPlayerO = button;
			buttonPlayerX[0].click();
			buttonPlayerO[8].click();
			buttonPlayerX[1].click();
			buttonPlayerO[7].click();
			buttonPlayerX[2].click();
			expect(screen.getByText('Winner is', { exact: false })).toHaveTextContent('X');
			buttonPlayerX[6].click();
			expect(buttonPlayerX[6]).toBeEmptyDOMElement();
		});
	});
});
