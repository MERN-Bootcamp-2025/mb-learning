import React from 'react'
import PropTypes from "prop-types";

const buttonStyles = {
  base: "w-40 mb-10 px-4 py-2 font-medium rounded-md transition duration-300",

  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
  outline: "border border-gray-600 text-gray-700 hover:bg-gray-100",
  success: "bg-green-500 text-white hover:bg-green-600",

  disabled: "opacity-50 cursor-not-allowed",
};

const Button = ({
  children,
  type="primary",
  disabled=false,
  onClick,
  className=""
}) => {

  const typeClass = buttonStyles[type] || "";
  const disabledClass = disabled ?buttonStyles.disabled : "";
  const allClasses = `${buttonStyles.base} ${typeClass} ${disabledClass} ${className}`
  
  return (
    <button className={allClasses} onClick={onClick}>{children}</button>
  )
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    console.log("hereee")
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!success)
      + Number(!!warning)
      + Number(!!danger);

      if(count >1){
        return new Error(
          'Only one of primary, secondary, success, warning, danger can be true'
        );
      }
  }

}

export default Button

