// declare module 'templates/markup.hbs';

interface IMenu {
    id: string,
    name: string,
    description: string,
    image: string,
    price: number,
    ingredients: string[]
}

type JSONFile = IMenu[];

declare module '*.hbs' {
  const value: (jsonFile:JSONFile) => string;
    export default value;
}