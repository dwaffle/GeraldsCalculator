import CalculateCeilingBoards from './CeilingBoards'
import CalculateWallBoards from './WallBoards'
import CalculateFloorBoards from './FloorBoards'
import CalculateSidesOfHouse from './SidesOfHouse'

//Total all boards.
export default function totalBoardsNeeded(lengthOfHouse:number, widthOfHouse:number, twoByFourLength:number, twoByFourWidth:number, fourByFourWidth:number, fourByFourLength:number) : number
{
    let totalBoards = CalculateFloorBoards(lengthOfHouse, widthOfHouse, twoByFourLength) 
    + CalculateWallBoards(lengthOfHouse, widthOfHouse, twoByFourLength, fourByFourLength, fourByFourWidth);
   // + CalculateSidesOfHouse(lengthOfHouse, widthOfHouse, twoByFourLength);
    let totalBoardsPlusWaste = Math.ceil(totalBoards * 1.1); //Add 10% to account for waste, and round up.
    if(totalBoards < 6) totalBoards = 6; //Minimum one board each for four walls, ceiling and floor.
    return totalBoardsPlusWaste;
}