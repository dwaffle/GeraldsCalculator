//Wood dimensions
let twoByFourWidthInInches = 3.5;
let twoByFourHeightInInches = 1.5;
let postWidthInInches = 3.5

//Gerald's Numbers
let distanceBetweenStudsInInches = 16;
let maxBoardLengthInFeet = 8;


//Convert feet to inches, then take out the post lengths.
function CalcInnerWallWidth(outerWallWidthInFeet:number)
{
    let innerWallWidthInInches = (outerWallWidthInFeet * 12) - (postWidthInInches * 2)
    return innerWallWidthInInches;
}
//Gerald wants 10% increase in total studs to account for waste.
function AccountForWaste(perfectNumberOfStuds:number)
{
    return Math.ceil(perfectNumberOfStuds * 1.1);
}

//Calculates total studs in length of a wall.
function StudsInLength(length:number, distanceApart:number)
{
    return Math.ceil(length/distanceApart);
}

function StudsOnTopAndBottom(lengthInInches:number)
{
  return Math.ceil(lengthInInches/(maxBoardLengthInFeet * 12)) * 2
}

//Calculate studs for a single wall
function BuildAWall( outerLengthInFeet:number)
{
   let length = CalcInnerWallWidth(outerLengthInFeet);
   let studsInsideWall = StudsInLength(length, distanceBetweenStudsInInches);
   let studsOnTopAndBottom = StudsOnTopAndBottom(length);
   let totalStuds = studsInsideWall + studsOnTopAndBottom + 1;
   return totalStuds;
}
//Calculate studs for entire house.
function BuildAHouse(widthInFeet:number, lengthInFeet:number)
{
    let wall1 = BuildAWall(widthInFeet) * 2;
    let wall2 = BuildAWall(lengthInFeet) * 2;
    return (wall1 + wall2);
}

export default function calcWallStuds(houseWidthInFeet:number, houseLengthInFeet:number)
{

    let totalStuds = BuildAHouse(houseWidthInFeet, houseLengthInFeet);
    let studsPlusWaste = AccountForWaste(totalStuds);
    return {
        totalStuds: totalStuds,
        studsPlusWaste: studsPlusWaste
    }

}
