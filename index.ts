// interface IId {
//   id: number;
// }

// interface IFaculty extends IId {
//   faculty: string;
//   subjects: Array<string>;
//   countStudents: number;
// }

// const faculties: IFaculty[] = [
//   {
//     id: 1,
//     faculty: "History department",
//     subjects: ["The World History", "History of Rome"],
//     countStudents: 44,
//   },
//   {
//     id: 2,
//     faculty: "Department of Biology",
//     subjects: ["biology", "chemistry"],
//     countStudents: 50,
//   },
//   {
//     id: 3,
//     faculty: "Faculty of Mathematics",
//     subjects: ["mathematics", "geometry", "trigonometry"],
//     countStudents: 72,
//   },
//   {
//     id: 4,
//     faculty: "Faculty of Design",
//     subjects: ["ui", "ux", "graphic design"],
//     countStudents: 37,
//   },
// ];

// const a = (data?: string) => {
//     if (data) {
//         console.log(data);
//     } else {
//         console.log('ничего не передали');
//     }
// }

// a();

// const a = {
//     name: 'Jon',
//     age: 30,
//     isAdmin: true,
//     uniqueId: 15
// };

// const b = {
//     name: 'Bob',
//     age: 25,
//     isAdmin: false,
// }

// const c = {
//     name: 'Masha',
//     age: 42,
//     isAdmin: false,
// }

// const isUniqueIdExist = (obj: any) => {
//     return 'uniqueId' in obj;
// }

// if (isUniqueIdExist(a)) {
//     console.log(a.uniqueId);
// }

// if (isUniqueIdExist(b)) {
//     console.log(b.uniqueId);
// }

// interface IName { name: string };
// interface IAge { age: number };
// interface IIsAdmin { isAdmin: boolean };
// interface ICity { uniqueId: number; city: string };
// interface ICityShort { city: string };
// interface IId {id: number};

// // interface INameWithId {
// //   id: number;
// //   name: string;
// // };
// interface INameWithId extends IId, IName {};
// interface IAgeWithId extends IId, IAge {};
// interface IIsAdminWithId extends IId, IIsAdmin {};
// interface ICityWithId extends IId, ICity {};

// const a: IName = { name: "Jon" };
// const b: IAge = { age: 25 };
// const c: IIsAdmin = { isAdmin: true };
// const d: ICity = { uniqueId: 15, city: "Minsk" };

// const generateUniqueId = (obj: IName | IAge | IIsAdmin | ICity): IName | IAge | IIsAdmin | ICity => {
//   const id = Math.trunc(Math.random() * 100000);

//   // return {...obj, id};
//   return {...obj};
// }

// as - утверждение
// type CurrencyType = 'USA' | 'RUS' | 'EUR';

// // let currentCurrency = [] as unknown as CurrencyType;

// const currencyConversion = (value: CurrencyType) => {
//   // ...;
// }

// currencyConversion(currentCurrency);

// const generateUniqueId = <InputType, OutType>(obj: InputType): OutType => {
//   const id = Math.trunc(Math.random() * 100000); // number

//   return {...obj, id} as OutType;
//   // return {...obj};
// }

// generateUniqueId<IName, INameWithId>(a);

// generateUniqueId<IAge, IAgeWithId>(b);
// generateUniqueId<IIsAdmin, IIsAdminWithId>(c);
// generateUniqueId<ICity, ICityWithId>(d);

// const typeGuard = (obj: AType | BType | CType | DType): obj is DType => {
//   return "uniqueId" in obj;
// }

// const transformData = (
//   obj: AType | BType | CType | DType
// ): AType | BType | CType | DType => {
//   if (typeGuard(obj)) {
//     // d//{uniqueId: 15, city: 'Minsk'}
//     console.log(d);
//     delete obj.uniqueId;

//     return obj;
//   }

//   return obj;
// };

// transformData(a);
// transformData(b);
// transformData(c);
// transformData(d);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// CLASS
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// спрашивают на собесах
// Модификаторы доступа:
// static // метод, который ДОСТУПЕН из вне этого класса без создания новго экземпляра
// public // метод, который ДОСТУПЕН из вне этого класса
// protected // метод, который НЕ доступен из вне этого класса
// private // метод, который НЕ доступен из вне этого класса, а доступен только в классах наследниках

// abstract class User<T> {
//   // создается пустой this - {}
//   readonly name: T;
//   age: number;

//   constructor(name: T, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   static getPow(a: number, b: number) {
//     // метод, который ДОСТУПЕН из вне этого класса без создания новго экземпляра
//     return a ** b;
//   }

//   getName() {
//     // метод, который ДОСТУПЕН из вне этого класса
//     console.log(this.name);
//   }

//   public customPublic() {
//     // метод, который ДОСТУПЕН из вне этого класса
//     console.log(this.name);
//   }

//   private customPrivate() {
//     // метод, который НЕ доступен из вне этого класса
//     console.log(this.name);
//     // this.customProtected();
//   }

//   protected customProtected() {
//     // метод, который НЕ доступен из вне этого класса, а доступен только в классах наследниках
//     console.log(this.name);
//   }

//   render() {
//     this.customPrivate();
//   }
// }

// const user = new User<string>("Jon", 30);
// user.getName();
// user.
// user.customProtected();

// const pow = User.getPow(2, 3);
// console.log(pow);

// const pow = Math.pow(2, 3);
// console.log(pow);

// class NewUser<T> extends User<T> {
//   constructor(name: T, age: number, isAdmin: boolean) {

//     super.customProtected();
//   }
// }

// 1. Создать строку из названий стран через запятую
// 2. Подсчитать общее количество людей в данном массиве стран.
// 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по
// названию.
// 4. Получить массив валют.
// 5. Получить массив городов, отсортированных в алфавитном порядке.
// 6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее
// количество людей в этих странах.

// interface ICountries {
//   country: string;
//   abbreviation: string;
//   city: string;
//   currency_name: string;
//   population: number;
// }

// const countries: ICountries[] = [
//   {
//     country: "United Arab Emirates",
//     abbreviation: "https://onli",
//     city: "Abu Dhabi",
//     currency_name: "Arab Emirates Dirham",
//     population: 9630959,
//   },
//   {
//     country: "Poland",
//     abbreviation: "PL",
//     city: "Warszawa",
//     currency_name: "Polish Zloty",
//     population: 37974750,
//   },
//   {
//     country: "Russian Federation",
//     abbreviation: "RU",
//     city: "Moscow",
//     currency_name: "Russian Ruble",
//     population: 144478050,
//   },
// ];

// const stringOfCountries = (countries: ICountries[]): string => {
//   return countries.reduce((result, { country }) => {
//     // if (result === "") {
//     //   return country;
//     // } else {
//     //   return `${result}, ${country}`;
//     // }
//     return result ? `${result}, ${country}` : country;
//   }, "");
// };

// console.log(stringOfCountries(countries));

// const countPopulations = (countries: ICountries[]): number => {
//   return countries.reduce((result, { population }) => {
//     return result + population;
//   }, 0);
// };

// console.log(countPopulations(countries));

// const sortOfCountries = (countries: ICountries[]): ICountries[] => {
//   return countries.sort((a, b) => a.country.localeCompare(b.country));
// };

// console.log(sortOfCountries(countries));

// const getAbbreviation = (countries: ICountries[]): string[] => {
//   return countries.reduce((result: string[], { abbreviation }) => {
//     result.push(abbreviation);

//     return result;
//   }, []);
// };

// console.log(getAbbreviation(countries));


// const getCities = (countries: ICountries[]): string[] => {
//   return countries.sort((a, b) => a.city.localeCompare(b.city)).reduce((result: string[], { city }) => {
//     result.push(city);

//     return result;
//   }, []);
// };

// console.log(getCities(countries));


// const countAveragePopulations = (countries: ICountries[]): number => {
//   return countries.reduce((result, { population }) => {

//     const allPopulation = result + population
  
//     return allPopulation;
//   }, 0) / (countries.length);
// };

// console.log(countAveragePopulations(countries));

// function getCountriesString(countries: { country: string }[]): string {
//   return countries.map(({ country }) => country).join(", ");
// }

// const countriesString = getCountriesString(countries);
// console.log(countriesString);

// function getCurrencies(countries: { currency_name: string }[]): string[] {
//   return countries.map(({ currency_name }) => currency_name);
// }

// const currencies = getCurrencies(countries);
// console.log(currencies);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Utility Types // справишивают: назвать основные и что они делают
//////////////////////////////////////////////////////////////////////////////////////////////////////////
interface IMovie {
  id: number;
  readonly title: string;
  year?: number;
  released: string;
  runtime: string | number;
  genre: string[];
  director: string;
  writer: string;
  actors?: string[];
  plot: string;
  country: string;
  poster?: string;
  imdbRating: number;
  imdbVotes: number;
  movie_type: string;
  boxOffice: string;
  production: string;
}

// const a: AType = {
const a = {
  id: 1212,
  title: 'qdqw',
}

a.title = 'efowef';

// type AType = Pick<IMovie, 'id' | 'title'>; // AType = {id: number; title: string;}
// type AType = Omit<IMovie, 'id' | 'title'>; // AType = {... все кроме id и title}
// type AType = Partial<IMovie>; // все свойства опциональные
// type AType = Readonly<IMovie>; // все свойства неизменяемые (только чтение)

type BType = Record<string, number>; // описание объекта

const b: BType = {
  jon: 2000,
  bill: 0,
  ivan: 2350,
}

type CType = 'USA' | 'EUR' | 'RUS';

// type AllCurrencyWithoutUSAType = Exclude<CType, 'USA'> // 'EUR' | 'RUS'
// type AllCurrencyWithoutUSAType = Exclude<CType, 'USA' | 'EUR'> // 'RUS'

// type OnlyUSAType = Extract<CType, 'USA'> // 'USA'
type OnlyUSAType = Extract<CType, 'USA' | 'EUR'> // 'USA' | 'EUR'


