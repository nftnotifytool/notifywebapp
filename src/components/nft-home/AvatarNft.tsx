type AvatarNftPropsType = {
  name: string;
  avatar: string;
}
export default function AvatarNft(props: AvatarNftPropsType) {
  const { name, avatar } = props;
  return (
    <div className="avatar-nft">
      <span className="avatar-nft--image">
        <img src={avatar} alt={name} width="70px" />
      </span>
      <span className="avatar-nft--title">{name}</span>
    </div>
  )
}