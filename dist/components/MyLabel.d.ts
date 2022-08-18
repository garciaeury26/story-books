/// <reference types="react" />
import "./MyLabel.css";
export interface MyLabelProps {
    /**
    * Convert the label in uppercase
    */
    allInCapital: boolean;
    /**
     * Color of the label
   */
    color?: "primary" | "secondary" | "tertiary";
    /**
    *Color of the label
    */
    bgColor?: string;
    /**
     * Title of the text
     */
    label: string;
    /**
    * Size of the text
    */
    size?: "h1" | "h2" | "h3";
    /**
     * Style of the text
     */
    style?: "bold" | "italic";
    /**
    * Custom font color
    */
    fontColor?: string;
}
export declare const MyLabel: ({ allInCapital, bgColor, color, label, size, style, fontColor, }: MyLabelProps) => JSX.Element;
