// Crear una historia

import { MyLabel, MyLabelProps } from "../../components/MyLabel"

// 1- exportqcion por defecto
export default {
    // con el title le indico en que grupo se va a grupar
    // tambien le puedo dar un nombre al componente con => Optional:/nombre
    title: "UI/Titles/MyLabel",
    component: MyLabel
}

// definicion del template o base
const Template = (args: MyLabelProps) => <MyLabel {...args} />

// modelo variacion del template 
export const Basic = Template.bind({})

// medium
export const Medium = Template.bind({})

// large
export const Large = Template.bind({})