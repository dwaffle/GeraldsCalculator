import RectangularPrismVolume from './VolumeOfRectangluarPrism'

//Volume of a cube is one edge cubed.
export default function CubeVolume(edge:number) : number {
    return RectangularPrismVolume(edge, edge, edge);
}