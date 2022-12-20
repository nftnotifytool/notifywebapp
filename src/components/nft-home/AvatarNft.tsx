type AvatarNftPropsType = {
  name: string;
  avatar: string;
  link: string;
}
export default function AvatarNft(props: AvatarNftPropsType) {
  const { name, avatar, link } = props;
  return (
    <div className="avatar-nft">
      <span className="avatar-nft--image">
        <img src={avatar} alt={name} width="70px" />
      </span>
      <a href={link} target="_blank"><span className="avatar-nft--title">{name}</span></a>
    </div>
  )
}