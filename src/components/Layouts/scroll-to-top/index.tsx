/* @ts-ignore */
import React from 'react'

import { Button } from 'antd';
import { RiArrowUpLine } from 'react-icons/ri';

export default function ScrollTop() {
  return (
    <div className="scroll-to-top">
        <Button
          className="hp-primary-shadow"
          type="primary"
          shape="circle"
          icon={<RiArrowUpLine />}
        />
    </div>
  )
}