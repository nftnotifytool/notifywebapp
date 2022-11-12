import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { Menu, Tag } from "antd";

import navigation from "../../../../navigation";
import Link from "next/link";

const { SubMenu } = Menu;

export default function MenuItem(props: any) {
  const { onClose } = props;

  // Redux
  const customise = useSelector((state: any) => state.customise)
  const dispatch = useDispatch()

  const menuItem = navigation.map((item, index) => {
    if (item.header) {
      return <Menu.ItemGroup key={index} title={item.header}></Menu.ItemGroup>;
    }

    return (
      <Menu.Item
        key={item.id}
        icon={item.icon}
        onClick={onClose}
      >
        <Link href={item.navLink}>{item.title}</Link>
      </Menu.Item>
    );
  })

  return (
    <Menu
      mode="inline"
      theme={customise.theme == "light" ? "light" : "dark"}
      className="hp-bg-black-20 hp-bg-dark-90"
    >
      {menuItem}
    </Menu>
  );
};