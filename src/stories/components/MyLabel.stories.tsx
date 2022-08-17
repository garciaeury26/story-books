// Crear una historia

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyLabel } from "../../components/MyLabel"

// 1- exportqcion por defecto
export default {
    // con el title le indico en que grupo se va a grupar
    // tambien le puedo dar un nombre al componente con => Optional:/nombre
    title: "UI/Titles/MyLabel",
    component: MyLabel,
    //control props => personalizado
    argTypes: {
        fontColor: {
            control: {
                type: "color",
                presetColors: ['#ff0000', '#00ff00', '#0000ff'],
            }
        }
    }
} as ComponentMeta<typeof MyLabel>;

// definicion del template o base
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

// modelo variacion del template 
export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic',
}

// medium
export const Medium = Template.bind({})
Medium.args = {
    label: 'Medium',
    size: "h2",
    style: "bold",
    color: "tertiary",
}

// large
export const Large = Template.bind({});
Large.args = {
    label: 'Large',
    size: "h1",
    style: "italic",
    allInCapital: true,
}

// color personalizado
export const CustomColor = Template.bind({});
CustomColor.args = {
    label: 'Custom Color',
    size: "h1",
    style: "bold",
    allInCapital: true,
    fontColor: "#59d669"
}
