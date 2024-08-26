export type SliderResource = {
    id: number;
    image: string;
    title?: string;
    subtitle?: string;
    text?: string;
    firstButton?: string;
    secondButton?: string;
}

export type SliderCollection = SliderResource[];