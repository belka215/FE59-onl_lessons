interface IUser {
    name: string;
    phone: string;
    email: string;
    animals?: Array<"cat" | "dog">;
    cars?: Array<"bmw" | "audi">;
    hasChildren: boolean;
    hasEducation: boolean;
}

const users: IUser[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

const namesToString = (array: IUser[]): string => {
    return array.map(({ name }) => name).join(', ');
}

let carsNum = 0;

const quantityOfCars = (array: IUser[]): number => {
    array.forEach(obj => {
        if ('cars' in obj) {
            carsNum += obj.cars!.length;
        }
    })
    return carsNum
}

const isEducated = <T extends IUser[]>(array:T):T => {
    return array.filter((obj) => obj.hasEducation)
}

const petsOwners = (array: IUser[]): IUser[] => {
    return array.filter((obj) => 'animals' in obj)
}

let allCars: [] = []

const carsToString = (array: IUser[]): string => {
    array.forEach(obj => {
        if ('cars' in obj) {
            allCars.push(obj.cars!.join(', '))
        }
    })
    return allCars.join(', ')
}


console.log(namesToString(users))
console.log(quantityOfCars(users))
console.log(isEducated<IUser[]>(users))
console.log(petsOwners(users))
console.log(carsToString(users))

class User {
    users: IUser[];

    constructor(users: IUser[]) {
        this.users = users;
    }

    namesToString(): string {
        return this.users.map(({ name }) => name).join(', ');
    }

    quantityOfCars(): number {
        this.users.forEach(obj => {
            if ('cars' in obj) {
                carsNum += obj.cars!.length;
            }
        })
        return carsNum
    }

    isEducated(): IUser[] {
        return this.users.filter((obj) => obj.hasEducation)
    }

    petsOwners(): IUser[] {
        return this.users.filter((obj) => 'animals' in obj)
    }

    carsToString(): string {
        this.users.forEach(obj => {
            if ('cars' in obj) {
                allCars.push(obj.cars as string[].join(', '))
            }
        })
        return allCars.join(', ')
    }
}