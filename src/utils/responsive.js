import { useMediaQuery } from 'react-responsive'

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 992 })
  return isMobile ? children : null
}

export const useIsDesktop = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 992px)'
  })
  return isDesktop
}