import NftItem from "./nftItem";

export default function NftList(prop: any) {
  const { items } = prop;
  return items.map((item: any, index: number) => <NftItem item={item} key={index} />)
}