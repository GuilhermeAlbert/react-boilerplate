import { createPopper } from "@popperjs/core";
import React, { useRef, useState } from "react";
import { TableDropdownAction, TableDropdownOptions } from "./interface";

const TableDropdown: React.FC<TableDropdownOptions> = ({ actions }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState<boolean>(
    false
  );
  const btnDropdownRef: React.MutableRefObject<any> = useRef(null);
  const popoverDropdownRef: React.MutableRefObject<any> = useRef(null);

  /**
   * Fecha o dropdown
   */
  const closeDropdownPopover = (): void => setDropdownPopoverShow(false);

  /**
   * Abre o popover
   */
  const openDropdownPopover = (): void => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };

  return (
    <>
      <p
        ref={btnDropdownRef}
        className="text-gray-600 py-1 px-3"
        onClick={(event: any) => {
          event.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </p>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        {actions.map((action: TableDropdownAction, index: number) => (
          <p
            key={index}
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 cursor-pointer"
            }
            onClick={() => {
              closeDropdownPopover();
              action.onClick();
            }}
          >
            {action.label}
          </p>
        ))}
      </div>
    </>
  );
};

export default TableDropdown;
