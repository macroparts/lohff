import {deg2rad} from '../function/deg2rad'
import {rad2deg} from '../function/rad2deg'

export class GeoPoint {
  static calculateCenter = (geoPoints: Array<GeoPoint>): GeoPoint => {
    let x: Array<number> = [];
    let y: Array<number> = [];
    let z: Array<number> = [];

    geoPoints.forEach((geoPoint) => {
      x.push(geoPoint.getCartesianX())
      y.push(geoPoint.getCartesianY())
      z.push(geoPoint.getCartesianZ())
    })

    let xAvg = x.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    },0) / x.length

    let yAvg = y.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    },0) / y.length

    let zAvg = z.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    },0) / z.length

    let lon = Math.atan2(yAvg, xAvg);
    let hyp = Math.sqrt(xAvg * xAvg + yAvg * yAvg);
    let lat = Math.atan2(zAvg, hyp);

    return new GeoPoint(rad2deg(lat), rad2deg(lon))
  }

  private readonly latRadians: number;
  private readonly lonRadians: number;

  constructor(public readonly lat: number, public readonly lon: number) {
    this.latRadians = deg2rad(lat)
    this.lonRadians = deg2rad(lon)
  }

  getCartesianX(): number {
    return Math.cos(this.latRadians) * Math.cos(this.lonRadians)
  }

  getCartesianY(): number {
    return Math.cos(this.latRadians) * Math.sin(this.lonRadians)
  }

  getCartesianZ(): number {
    return Math.sin(this.latRadians)
  }
}