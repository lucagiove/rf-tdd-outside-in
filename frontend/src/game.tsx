import React, { useState } from 'react';
import './index.css';

export function Square(props: any) { // FIXME Any type
	return (
		<button className="square" data-testid={props.dataTestId} onClick={() => props.onClick()}>
			{props.value}
		</button>
	);
}

export function Board() {
	const [turn, setTurn] = useState('X');
	const [squares, setSquares] = useState(Array(9).fill(null));

	const renderSquare = (i: number) => (
		<Square
			dataTestId={'square-' + i}
			value={squares[i]}
			onClick={() => {
				handleClick(i);
			}}
		/>
	);

	const handleClick = (i: number) => {
		const _squares = [...squares];
		if (_squares[i] || checkWinner()) return;
		_squares[i] = turn;
		setSquares(_squares);
		changeTurn();
	};

	const changeTurn = () => {
		turn === 'X' ? setTurn('O') : setTurn('X');
	};

	const checkWinner = () => {
		if (squares[0] === 'X' && squares[1] === 'X' && squares[2] === 'X') {
			return 'X';
		}
	};

	const status = checkWinner() ? 'Winner is: ' + checkWinner() : 'Next player: ' + turn;

	return (
		<div>
			<div className="status">{status}</div>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}

export class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}
