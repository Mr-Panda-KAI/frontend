import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import MenuSvg from "../../assets/svg/MenuSvg";
import { Button } from "../ui";
import { HambugerMenu } from "../design/Header";
import logo from "../../assets/IA chat/AIniPay_Logo.png";

// Componente simplificado para mostrar solo el botón de Reown
const DesktopWallet = () => {
  return (
    <div className="hidden lg:block">
      <appkit-button />
    </div>
  );
};

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed p-2 top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:bg-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-10.5 xl:px-10 max-lg:py-4">
        <a className="flex items-center w-[12rem] xl:mr-8" href="#hero">
          <img
            src={logo}
            width={40}
            height={40}
            alt="AIni Pay"
            className="pointer-events-none select-none mr-3"
          />
          <span className="text-xl font-bold text-white">
            <span className="text-red-400">AI</span>ni Pay
          </span>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {/* Mobile Connect Wallet Button */}
            <div className="lg:hidden w-full max-w-xs px-6 py-4">
              <div className="text-center">
                <h3 className="text-n-3 text-sm mb-3">Connect Wallet</h3>
                <appkit-button />
              </div>
            </div>
          </div>

          <HambugerMenu />
        </nav>

        <DesktopWallet />

        <Button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden"
          px="px-3"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;