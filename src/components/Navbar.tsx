import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from ".././assets/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
type Props = {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: Dispatch<SetStateAction<string>>;
};
import ActionButton from "./ActionButton";
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const pages = ["Home", "Benefits", "Our Classes", "Contact Us"];
  const [barOpen, setBarOpen] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:888px)");

  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full px-10 py-4 ${
          !isTopOfPage && "bg-primary-100 drop-shadow"
        }`}
      >
        <div className={`${flexBetween} w-full gap-16`}>
          {/* left side */}
          <img src={Logo} />
          {/* right side */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              {/* inner left side */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                {pages.map((page, index) => {
                  return (
                    <span key={index}>
                      <AnchorLink
                        className={`duration-400 transition ${
                          selectedPage === page && "text-primary-500"
                        } hover:text-primary-300`}
                        href={`#${page.toLowerCase().replace(/\s+/g, "")}`}
                        onClick={() => {
                          setSelectedPage(page);
                        }}
                      >
                        {page}
                      </AnchorLink>
                    </span>
                  );
                })}
              </div>
              {/* inner right side */}
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton
                  button={"Become a member"}
                  setSection={setSelectedPage}
                />
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setBarOpen(!barOpen)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
      {/* mobile menu modal */}
      {!isAboveMediumScreens && barOpen && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 right-0 z-40 h-full w-[42%] bg-primary-100 drop-shadow-xl"
        >
          <XMarkIcon
            className="fixed right-3 top-3 mb-8 h-6 w-6"
            onClick={() => setBarOpen(false)}
          />
          <div className={` mt-10 px-[2%] pt-[10%] text-xl`}>
            {pages.map((page, index) => {
              return (
                <div key={index} className="p-4">
                  <AnchorLink
                    className={`duration-400 transition ${
                      selectedPage === page && "text-primary-500"
                    } hover:text-primary-300`}
                    href={`#${page.toLowerCase().replace(/\s+/g, "")}`}
                    onClick={() => {
                      setSelectedPage(page);
                    }}
                  >
                    {page}
                  </AnchorLink>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
export default Navbar;
