import React from "react";
import { Disclosure } from "@headlessui/react";

const Nav: React.FC = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div>
            <div>LINK</div>
            <div>
              <div>BUttonLInk</div>
              <div>BUttonLInk</div>
              <div>BUttonLInk</div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
