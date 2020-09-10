import CalculateFloorBoards from "./FloorBoards";
//Calculate beams needed along each side.  Same as the number needed for floor and ceiling.
export default function CalculateSidesOfHouse(length:number, width:number, twoByFourLength:number) : number
{
    return CalculateFloorBoards(length,width,twoByFourLength)
}