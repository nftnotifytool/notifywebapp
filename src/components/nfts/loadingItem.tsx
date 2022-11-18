import ContentLoader from "react-content-loader"

export function LoadingItem() {
  return (
    <div className="hp-border-radius-xxl hp-bg-black-0 hp-bg-dark-100 hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-p-16">
      <ContentLoader 
        speed={2}
        width={'100%'}
        height={388}
        viewBox="0 0 100% 388"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="16" rx="24" ry="24" width="100%" height="208" /> 
        <rect x="0" y="250" rx="6" ry="6" width="240" height="24" /> 
        <rect x="0" y="285" rx="6" ry="6" width="220" height="24" /> 
        <rect x="0" y="337" rx="25" ry="25" width="109" height="40" />
      </ContentLoader>
    </div>
  )
}