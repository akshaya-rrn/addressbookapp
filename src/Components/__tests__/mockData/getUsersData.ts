/* istanbul ignore file */
import { UserResponseResult } from "../../../types";

const userObjData  = {
  gender: "male",
  name: {
    title: "Mr",
    first: "Momčilo",
    last: "Danilović"
  },
  email: "momcilo.danilovic@example.com",
  dob: {
    date: "1982-05-08T23:15:14.129Z",
    age: 40
  },
  cell: "060-7486-722",
  picture: {
    large: "https://randomuser.me/api/portraits/men/41.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/41.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/41.jpg"
  }
};
export const mockUserData:UserResponseResult = JSON.parse(JSON.stringify(userObjData)); 


export const mockgetUsersResponse = {
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Momčilo",
        "last": "Danilović"
      },
      "email": "momcilo.danilovic@example.com",
      "dob": {
        "date": "1982-05-08T23:15:14.129Z",
        "age": 40
      },
      "cell": "060-7486-722",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/41.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/41.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/41.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Ermitério",
        "last": "Vieira"
      },
      "email": "ermiterio.vieira@example.com",
      "dob": {
        "date": "1973-06-25T11:08:31.020Z",
        "age": 49
      },
      "cell": "(52) 4779-4089",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/69.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/69.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/69.jpg"
      }
    }
  ],
  "info": {
    "seed": "22d4924a26de6d6f",
    "results": 2,
    "page": 1,
    "version": "1.4"
  }
};