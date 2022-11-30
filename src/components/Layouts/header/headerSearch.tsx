import React, { useState, useMemo } from 'react';
import { Input } from "antd";
import { SearchNormal1 } from 'iconsax-react';

export default function HeaderSearch(props: any) {

  return (
    <div>
      <Input
        {...props}
        placeholder="Paste your wallet to tracking NFT items..."
        prefix={
          <SearchNormal1 size="22" className="hp-text-color-black-80 hp-text-color-dark-20" />
        }
      />
    </div>
  );
}