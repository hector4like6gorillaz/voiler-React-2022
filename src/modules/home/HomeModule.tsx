import React, { useState } from "react";
import { Button, DropdownHOC } from "../../shared/components/ui";
import { useNavigate } from "react-router-dom";

const HomeModule = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  let dropdown: any;

  return (
    <div>
      <div className="flex gap-x-4 pt-4 pl-4">
        <Button
          customStyle=" border border-black bg-[green] text-white duration-200 hover:bg-[yellow] hover:text-[black] ease-in-out disabled:opacity-40 "
          rounded="rounded-lg"
          label="presioname"
          onClick={() => setShow(!show)}
        />
        <Button
          customStyle=" border border-black duration-200 hover:bg-[red] ease-in-out disabled:opacity-40 "
          rounded=""
          label="Ir a Counter"
          onClick={() => navigate("/counter")}
        />
        <DropdownHOC triggerRef={(el) => (dropdown = el)}>
          {React.createElement(() => (
            <Button label="presioname" />
          ))}
          {React.createElement(() => (
            <div className="-right-[1%] w-[10rem] border shadow rounded-lg flex flex-col items-center justify-center mt-2">
              <p className="hover:bg-gray-400"> solo hover</p>
              <p className="hover:bg-gray-400" onClick={() => dropdown.click()}>
                click y cierro
              </p>
            </div>
          ))}
        </DropdownHOC>
      </div>
      {show && <p>Soy un texto de muestra</p>}
    </div>
  );
};

export default HomeModule;
