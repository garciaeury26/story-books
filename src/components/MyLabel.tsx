import "./MyLabel.css";
import React from "react";

export interface MyLabelProps {
    label: string,
    size?: number | string,
    style?: "bold" | "normal"
}

export const MyLabel = ({ label = "Label", size = "normal", style = "bold" }: MyLabelProps) => {
    return (
        <span style={{
            fontWeight: style,
            fontSize: `${size}px` || "16px",
        }}>
            {label}
        </span>
    )
}
