import PerimiterOfHouse from '../shapes/PerimiterOfRectangle'

export default function CalculateFloorBoards(length:number, width:number, twoByFourLength:number) : number
{
   let perimiter = PerimiterOfHouse(length, width);
   //One board needed for each eight feet.
   return Math.ceil(perimiter/twoByFourLength);
}