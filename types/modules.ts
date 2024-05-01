export interface IAccordionProps {
  children: React.ReactNode
  title: string | JSX.Element
  titleClass: string
  rotateIconClass?: string
}

export interface IMenuLinkItemProps {
  item: {
    id: number
    text: string
    href: string
  }
  handleRedirectToCatalog: (arg: string) => void
}

export interface ICatalogMenuButtonProps {
  name: string
  isActive: boolean
  handler: VoidFunction
}
