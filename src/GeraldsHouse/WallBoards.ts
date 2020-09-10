

//Calculate the total boards needed for the walls.
export default function CalculateWallBoards(length:number, width:number, twoByFourWidth:number, fourByFourLength:number, fourByFourWidth:number) : number
{
    //Calculate for each side.  Account for each 4x4.
    let longWallDistance = (length - fourByFourLength * 2);
    let wideWallDistance = (length - fourByFourWidth * 2);
    //How much space is left in the long wall and the wide wall?  Divide into 16" sections.
    let longWallSection = Math.ceil(longWallDistance/16);
    let wideWallSection = Math.ceil(wideWallDistance/16);
    //Combine the number needed for the long and the wide wall.  Two long walls, two wide walls.
    return (longWallSection + wideWallSection) * 2 + 4;
}