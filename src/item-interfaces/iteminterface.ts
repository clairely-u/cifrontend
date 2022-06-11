export default interface Item {
    type: string[],
    printed: boolean,
    primaryColor: string[],
    secondaryColor?: string[]
}

export interface Accessory extends Item {
    type: string[];
    printed: boolean;
    primaryColor: string[];
    secondaryColor?: string[] | undefined;

}

export interface Top extends Item {
    type: string[];
    printed: boolean;
    primaryColor: string[];
    secondaryColor?: string[] | undefined;
}

export interface Bottom extends Item {
    type: string[];
    printed: boolean;
    primaryColor: string[];
    secondaryColor?: string[] | undefined;
    fit: boolean; //true = loose, false = tight 
    length: string;
}

export interface Shoes extends Item {
    type: string[];
    printed: boolean;
    primaryColor: string[];
    secondaryColor?: string[] | undefined;
}