import Link from 'next/link'

import { useSelector } from "react-redux";

import logo from "../../../../assets/images/logo/logo.png";
export default function MenuLogo(props: any) {
  const customise = useSelector((state: any) => state.customise)

  return (
    <div className="hp-header-logo hp-d-flex hp-align-items-center">
      <Link
        href="/"
        onClick={props.onClose}
        className="hp-position-relative hp-d-flex"
      >
        {
          props.small ? (
            customise.theme == "light" ? (
              <img className="hp-logo" src={logo.src} alt="logo" />
            ) : (
              <img className="hp-logo" src={logo.src} alt="logo" />
            )
          ) : (
            customise.direction == "rtl" ? (
              customise.theme == "light" ? (
                <img className="hp-logo" src={logo.src} alt="logo" />
              ) : (
                <img className="hp-logo" src={logo.src} alt="logo" />
              )
            ) : (
              customise.theme == "light" ? (
                <img className="hp-logo" src={logo.src} alt="logo" />
              ) : (
                <img className="hp-logo" src={logo.src} alt="logo" />
              )
            )
          )
        }
      </Link>
    </div>
  );
};