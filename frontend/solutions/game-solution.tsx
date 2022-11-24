import React, {useState} from 'react';
import '../src/index.css';

export function Square(props: any) {
	return (
		<button className="square" data-testid={props.dataTestId} onClick={() => props.onClick()}>
			{props.value}
		</button>
	);
}

export enum EPlayer {
	X = 'X',
	O = 'O',
}

export function Board() {
	const [turn, setTurn] = useState<EPlayer>(EPlayer.X);
	const [squares, setSquares] = useState<(EPlayer|null)[]>(Array(9).fill(null));

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
		const updatedSquares = [...squares];
		if (updatedSquares[i] || checkWinner(updatedSquares)) return;
		updatedSquares[i] = turn;
		setSquares(updatedSquares);
		changeTurn();
	};

	const changeTurn = () => {
		turn === EPlayer.X ? setTurn(EPlayer.O) : setTurn(EPlayer.X);
	};

	const status = checkWinner(squares) ? 'Winner is: ' + checkWinner(squares) : 'Next player: ' + turn;

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

export const checkWinner = (squares: (EPlayer|null)[]) => {
	const solutions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (const solution of solutions) {
		for (const player of Object.values(EPlayer)) {
			if (solution.every(e => squares[e] === player)) return player
		}
	}
};