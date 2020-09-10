import CalculateFloorBoards from './FloorBoards'

//Calculate total boards needed for the ceiling - same as the number needed for the floor.
export default function CalculateCeilingBoards(length:number, width:number, twoByFourLength:number) : number
{
    return CalculateFloorBoards(length, width, twoByFourLength);
}