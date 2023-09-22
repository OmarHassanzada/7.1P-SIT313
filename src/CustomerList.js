import{ faker } from "@faker-js/faker";

const CustomerList = [

    {
        "key": 0,
        "avatar": faker.image.avatar(),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p><img src = {require("./Images/Star.png")} alt="logo" width={50} height={50} /> 5</p>
    },
    {
        "key": 1,
        "avatar": faker.image.avatar(),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p><img src = {require("./Images/Star.png")} alt="logo" width={50} height={50} /> 3</p>
    },
    {
        "key": 2,
        "avatar": faker.image.avatar(),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p><img src = {require("./Images/Star.png")} alt="logo" width={50} height={50} /> 5</p>
    },


]

export default CustomerList