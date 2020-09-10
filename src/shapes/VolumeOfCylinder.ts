import CircleArea from './AreaOfCircle'

//Volume of a cylinder is pi r squared * height.
export default function CylinderVolume(radius:number, height:number) : number {
    return CircleArea(radius) * height;
}