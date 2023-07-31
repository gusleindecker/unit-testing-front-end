// random user: https://randomuser.me
/* export interface Name {
  title: string
  first: string
  last: string
}

export interface Street {
  number: number
  name: string
}

export interface Coordinates {
  latitude: string
  longitude: string
}

export interface Timezone {
  offset: string
  description: string
}

export interface Location {
  street: Street
  city: string
  state: string
  country: string
  postcode: string
  coordinates: Coordinates
  timezone: Timezone
}

export interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

export interface User {
  name: Name
  location: Location
  email: string
  picture: Picture
  login: Login
} */

export interface Coordenates {
  lat: string
  lng: string
}
export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Coordenates
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}
export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}
