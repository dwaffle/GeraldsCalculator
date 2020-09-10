import RectangleArea from './AreaOfRectangle'

//Formula for the area of a square is length of one side, squared.
export default function SquareArea(sideLength:number) : number{
    return RectangleArea(sideLength, sideLength); 
 }