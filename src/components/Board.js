import React from 'react'
import '../App.css'
import { Letter } from '../Letter';

export const Board = () => {
    return (
        <div className='board'>
            <div className="row">
                <Letter letterPos={0} attempValue={0}></Letter>
                <Letter letterPos={1} attempValue={0}></Letter>
                <Letter letterPos={2} attempValue={0}></Letter>
                <Letter letterPos={3} attempValue={0}></Letter>
                <Letter letterPos={4} attempValue={0}></Letter>
            </div>
            <div className="row">
                <Letter letterPos={0} attempValue={1}></Letter>
                <Letter letterPos={1} attempValue={1}></Letter>
                <Letter letterPos={2} attempValue={1}></Letter>
                <Letter letterPos={3} attempValue={1}></Letter>
                <Letter letterPos={4} attempValue={1}></Letter>
            </div>  <div className="row">
                <Letter letterPos={0} attempValue={2}></Letter>
                <Letter letterPos={1} attempValue={2}></Letter>
                <Letter letterPos={2} attempValue={2}></Letter>
                <Letter letterPos={3} attempValue={2}></Letter>
                <Letter letterPos={4} attempValue={2}></Letter>
            </div>  <div className="row">
                <Letter letterPos={0} attempValue={3}></Letter>
                <Letter letterPos={1} attempValue={3}></Letter>
                <Letter letterPos={2} attempValue={3}></Letter>
                <Letter letterPos={3} attempValue={3}></Letter>
                <Letter letterPos={4} attempValue={3}></Letter>
            </div>  <div className="row">
                <Letter letterPos={0} attempValue={4}></Letter>
                <Letter letterPos={1} attempValue={4}></Letter>
                <Letter letterPos={2} attempValue={4}></Letter>
                <Letter letterPos={3} attempValue={4}></Letter>
                <Letter letterPos={4} attempValue={4}></Letter>
            </div>  <div className="row">
                <Letter letterPos={0} attempValue={5}></Letter>
                <Letter letterPos={1} attempValue={5}></Letter>
                <Letter letterPos={2} attempValue={5}></Letter>
                <Letter letterPos={3} attempValue={5}></Letter>
                <Letter letterPos={4} attempValue={5}></Letter>
            </div>
        </div>
    )
}
