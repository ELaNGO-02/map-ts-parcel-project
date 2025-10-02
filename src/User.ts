import { faker } from "@faker-js/faker";
import { randomIndiaLat,randomIndiaLng } from "./helper";

import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    // this.location = {
    //   lat: parseFloat(faker.address.latitude()),
    //   lng: parseFloat(faker.address.longitude()),
    // };
    this.location = {
      lat: randomIndiaLat(),
      lng: randomIndiaLng(),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
