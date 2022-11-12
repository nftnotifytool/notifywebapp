import React from "react";

import { Drawer } from "antd";
import { RiCloseFill } from "react-icons/ri";

import MenuLogo from "../logo";
import MenuItem from "../item";

export default function MenuMobile(props: any) {
  const { onClose, visible } = props;

  return (
    <Drawer
      title={
        <MenuLogo onClose={onClose} />
      }
      width={256}
      className="hp-mobile-sidebar hp-sidebar"
      placement="left"
      closable={true}
      onClose={onClose}
      visible={visible}
      closeIcon={
        <RiCloseFill
          className="remix-icon hp-text-color-black-80"
          size={24}
        />
      }
    >
      <MenuItem onClose={onClose} />

    </Drawer>
  );
};