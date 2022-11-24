import React from 'react';
import './index.css';

export function Square(props: any) {
	return (
		<button className="square" data-testid={props.dataTestId} onClick={() => props.onClick()}>
			{props.value}
		</button>
	);
}


export function Board() {

	return (
		<div>
			{/*<div className="status">{status}</div>*/}
			{/*<div className="board-row">*/}
			{/*	{renderSquare(0)}*/}
			{/*	{renderSquare(1)}*/}
			{/*	{renderSquare(2)}*/}
			{/*</div>*/}
			{/*<div className="board-row">*/}
			{/*	{renderSquare(3)}*/}
			{/*	{renderSquare(4)}*/}
			{/*	{renderSquare(5)}*/}
			{/*</div>*/}
			{/*<div className="board-row">*/}
			{/*	{renderSquare(6)}*/}
			{/*	{renderSquare(7)}*/}
			{/*	{renderSquare(8)}*/}
			{/*</div>*/}
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