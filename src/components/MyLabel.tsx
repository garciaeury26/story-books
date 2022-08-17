import "./MyLabel.css";

// puedo documentar la props para storybooks con conmentarios
export interface MyLabelProps {
    /**
    * Convert the label in uppercase
    */
    allInCapital: boolean,
    /** 
     * Color of the label
   */
    color?: "primary" | "secondary" | "tertiary",
    /**
    *Color of the label
    */
    bgColor?: string,
    /**
     * Title of the text
     */
    label: string,
    /**
    * Size of the text
    */
    size?: "h1" | "h2" | "h3",
    /**
     * Style of the text
     */
    style?: "bold" | "italic",
    /**
    * Custom font color
    */
    fontColor?: string
}

export const MyLabel = ({
    allInCapital = false,
    bgColor,
    color,
    label = "Label",
    size = "h3",
    style = "italic",
    fontColor,

}: MyLabelProps) => {
    return (
        <span
            style={{ color: fontColor, backgroundColor: bgColor }}
            className={`label ${size} ${style} text-${color} ${allInCapital && "capitalize"}`}>
            {label}
        </span>
    )
}
