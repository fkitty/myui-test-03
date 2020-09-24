import React from 'react';


// 需要声明
// Icon的属性
interface IconProps {
  name: string;
}
 
/**
 * Icon是一个react的函数组件，属性类型是IconProps(要求是只要有个name属性)
 * 1、Icon：组件名
 * 2、React.FunctionComponent:组件类型
 * 3、<IconProps>：属性类型（声明的interface）
 */
const Icon: React.FunctionComponent<IconProps> = (props) =>{ // 使用props
  console.log(typeof props); // Object  IconProps外加一个children
  return(
    <span>{props.name}</span>
  )
}

export default Icon;