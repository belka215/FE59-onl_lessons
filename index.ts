() => {
  // const array = new Array(1000).fill(null).map((_, i) => ++i);
  // // console.log(array);

  // string - строка
  // number - число
  // boolean - true или false 
  // object - объект (но очень абстракная можель, типа пустой объект)
  // array - массив
  // NaN - NaN
  // undefined - undefined
  // null - null
  // // ----
  // any - любой тип и я не буду подсвечивать ошибки
  // unknown - любой тип но я БУДУ подсвечивать ошибки (типобезопасный any)
  // never - никогда не будет результата (бесконченый цикл или функция возвращает ошибку)
  // void - функция ничего не возвращает

  // const newName: string = 'Jon';
  // newName.filter(item => {})

  // let userName: string = "Bob";

  // userName = {age: 30};

  // const num: number = 15545465;
  // num.toLowerCase();

  // let bol: boolean = true;

  // const obj = {};
  // const obj: {} = {};
  // const obj: object = {};
  // Object.keys(obj);

  // const array: [] = [];

  // const a = 'Jon';
  // a.split('_');

  // let num: number = 15;

  // const getStringsList = (num: number) => {
  //     /// 100 строк кода
  //     //
  //     num.toLowerCase();
  // };

  // getStringsList(num);

  // const testList = [1, 3, 55, 851.3, 124, 'ewfwef', 'weffwefwef'];
  // const testList: Array<number> = [1, 3, 55, 851.3, 124];
  // testList.push(15165);

  // const array = new Array(1000).fill(null).map((_, i) => ++i);
  // array.push('fewfwe');

  // const PERSENT: number = 0.14;
  // const newArray = array.map((item) => {
  //     // console.log(typeof PERSENT); // number
  //     const sum = PERSENT + item; // 1 на первой итерации

  //     return sum;
  // });

  // const name = "Jon";
  // let age = 30;
  // let city = "Minsk";

  // const getStringsList = (array) => {
  //   array.toLowerCase();
  // };

  // const newTestList = getStringsList(testList);
  // console.log(newTestList);

  // document.body.addEventListener("click", () => {
  //   const newTestList = getStringsList(testList);
  //   console.log(newTestList);
  // });

  // const testList: number[] = [1, 3, 55, 851.3, 124];
  // const user: [string, number]= ['15', 25];

  // const funcMulti = (value: number): number => {
  //     return value ** 2;
  // }

  // funcMulti(3);

  // const salary: number[] = [1000, 3000, 5500, 851.3, 1240];

  // const updateData = (array: number[]): void => {
  //     array.forEach(item => {
  //         const li = document.createElement('li');
  //         li.innerHTML = item.toString();
  //         // li.innerHTML = `${item}`;
  //         // li.innerHTML = String(item);
  //         // li.innerHTML = item + '';

  //         document.body.append(li);
  //     })
  // }

  // updateData(salary);

  // const handleNever = () => {
  //     // while(true) {

  //     // }
  //     throw new Error('');
  // }

  // type CustomData = number[];

  // const a = [] || {} || true || 78788 || 0 || ''; // []
  // const a = {} || true || 78788 || 0 || ''; // {}

  // const b = [] && {}; // {}
  // const b = [] && {} && 32432 && true && 0 && 289418924 && true; // 0
  // const b = {} && ''; // ''

  // type NumOrStrOrBoolType = number | string | boolean;

  // let a: NumOrStrOrBoolType = 15;

  // a = 99;
  // a = 'wefwe';
  // a = true;

  // type NameType = {
  //     name: string;
  // }

  // type AgeType = {
  //     age: number;
  // }

  // const user: NameType & AgeType = {
  //     name: 'Jon',
  //     age: 20,
  // }

  // user.name = 'wef';
  // user.age = 20;

  // type AddersType = {
  //     city: string,
  //     street: string,
  //     h: number,
  // };

  // type ObjType = {
  //     name: string,
  //     age: number,
  //     isAdmin: boolean,
  //     addres: AddersType,
  // }

  // interface IObj {
  //     name: string,
  //     age: number,
  //     isAdmin: boolean,
  //     addres: {
  //         city: string,
  //         street: string,
  //         h: number,
  //     }
  // }

  // const obj: ObjType = {
  //     name: 'Bob',
  //     age: 30,
  //     isAdmin: true,
  //     addres: {
  //         city: 'Minsk',
  //         street: 'No',
  //         h: 15,
  //     }
  // }

  // // obj.name = 235423;
  // obj.isAdmin = false;

  // console.log(obj.name);

//   1;

    interface IId {
        id: number;
    }

    interface IEmail {
        email: string;
    }

    interface IUser extends IId, IEmail {
        first_name: string;
        last_name: string;
        avatar?: string; // опциональное свойство - может быть, а может и не быть
        age: number;
    }

  const users: IUser[] = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      age: 23,
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
      age: 20,
    },
  ];

  2;
  type CurrencyType = "euro" | "usa" | "by";

//   const euroCur = 'euro';
  let euroCur: CurrencyType = 'euro';

  interface IProducts extends IId {
    name: string;
    price: number;
    // currency: CurrencyType;
    currency: "euro" | "usa" | "by";
    ingredients: string[];
    type: string;
    available: boolean;
  }

//   type OriductsType

  const products: IProducts[] = [
    {
      id: 1,
      name: "Burger Premium",
      price: 6,
      currency: euroCur,
      ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
      type: "burger",
      available: true,
    },
    {
      id: 2,
      name: "Burger Lite",
      price: 2,
      currency: "usa",
      ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
      type: "burger",
      available: true,
    },
    {
        id: 3,
        name: "Colla Lite",
        price: 17,
        currency: "ru",
        ingredients: [],
        type: "drink",
        available: true,
      },
  ];

  3;
//   const users: IUser[] = [
//     {
//       id: 7,
//       email: "michael.lawson@reqres.in",
//       first_name: "Michael",
//       last_name: "Lawson",
//       age: 23,
//     },
//     {
//       id: 8,
//       email: "lindsay.ferguson@reqres.in",
//       first_name: "Lindsay",
//       last_name: "Ferguson",
//       avatar: "https://reqres.in/img/faces/8-image.jpg",
//       age: 20,
//     },
//   ];

// type IdType = number;

//   const getUser = (id: number, users: IUser[]): IUser | undefined => {
//     return users.find((user) => user.id === id);
//   };

//   getUser(55, users);

//   TypeGuard
    // const isNumber = (value: unknown): value is number => {
    //     return typeof value === 'number';
    // }

    // const testFunc = (value: number | string | boolean) => {
    // // const testFunc = (value: unknown) => {
    //     // return value.toLowerCase();
    //     if (typeof value === 'string') {
    //         return value.toLowerCase();
    //     }

    //     if (isNumber(value)) {
    //         return value.toString();
    //     }

    //     return 'Not a string!';
    // }

    // testFunc(15);
    // testFunc('13412412');
    // testFunc(true);

  interface ICat {
    voice: string;
  }

  interface IDog {
    goodBoy: boolean;
  }

    const cat: ICat = {
        voice: 'miaw',
    }

    const dog: IDog = {
        goodBoy: true,
    }

    

    // const isCat = (obj: ICat | IDog): obj is ICat => {
    //     return 'voice' in obj;
    // };

    // const isString = (value: unknown): value is string => {
    //     return typeof value === 'string';
    // }

    // const testFun = (obj: ICat | IDog) => {
    //     // if ('voice' in obj) {
    //     //     console.log(obj.voice);
    //     // } else {
    //     //     console.log(obj.goodBoy);
    //     // }
    //     if (isCat(obj)) {
    //         console.log(obj.voice);
    //     } else {
    //         console.log(obj.goodBoy);
    //     }
    // }

    // testFun(cat);
    // testFun(dog);
};
