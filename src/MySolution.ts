import TotalBoardsNeeded from './GeraldsHouse/TotalBoards'
import CalculateCeilingBoards from './GeraldsHouse/CeilingBoards';
import CalculateFloorBoards from './GeraldsHouse/FloorBoards';
import CalculateWallBoards from './GeraldsHouse/WallBoards';
import CalculateSidesOfHouse from './GeraldsHouse/SidesOfHouse';
//Allow for command line arguments.
let args = process.argv;
//Size of house.
let houseLength = Number(args[2]) * 12;  //Again, 12 inches in a foot. 
let houseWidth = Number(args[3]) * 12;
//Declare sizes of wood and size of house.  Base unit: inches.
const twoByFourLength = 8 * 12; //12 inches to a foot.
const twoByFourWidth = 3.5;
const twoByFourHeight = 1.5;
const fourByFourWidth = 3.5;
const fourByFourLength = 3.5;



//Output total boards required.
console.log("Floor boards needed: " + CalculateFloorBoards(houseLength, houseWidth, twoByFourLength));
console.log("Wall boards needed: " + CalculateWallBoards(houseLength, houseWidth, twoByFourWidth, fourByFourLength, fourByFourWidth));
console.log("Ceiling Boards Needed: " + CalculateCeilingBoards(houseLength,houseWidth,twoByFourLength));
console.log("After including 10% rounded up for waste, Gerald needs " + TotalBoardsNeeded(houseLength,houseWidth,twoByFourLength,twoByFourWidth,fourByFourWidth,fourByFourLength) + " boards to complete his house");


export default function calcWallStuds( houseWidth:number, houseLength:number)
{
   return(CalculateWallBoards(houseLength, houseWidth, twoByFourWidth, fourByFourLength, fourByFourWidth))
}