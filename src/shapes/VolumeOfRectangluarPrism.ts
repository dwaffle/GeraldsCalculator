import RectangleArea from './AreaOfRectangle'

//Volume of a rectangular prism is width * length * height
export default function RectangularPrismVolume(width:number, height:number, length:number) : number {
    return RectangleArea(width, length) * height;
}