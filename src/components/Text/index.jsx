const sizeClasses = {
  txtHarmattanBold32: "font-bold font-harmattan",
  txtHarmattanRegular96: "font-harmattan font-normal",
  txtHarmattanBold96: "font-bold font-harmattan",
  txtHarmattanBold20: "font-bold font-harmattan",
  txtHarmattanBold40: "font-bold font-harmattan",
  txtHarmattanBold70: "font-bold font-harmattan",
  txtHarmattanBold170: "font-bold font-harmattan",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsSemiBold40RedA400: "font-poppins font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular32: "font-normal font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsRegular64: "font-normal font-poppins",
  txtHarmattanBold16: "font-bold font-harmattan",
  txtHarmattanBold36: "font-bold font-harmattan",
  txtHarmattanBold48: "font-bold font-harmattan",
  txtHarmattanBold24: "font-bold font-harmattan",
  txtHarmattanBold13: "font-bold font-harmattan",
};

import PropTypes from "prop-types";

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  as: PropTypes.elementType,
};

export { Text };
