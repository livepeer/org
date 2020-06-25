/** @jsx jsx */
import { jsx, Box, SxStyleProp } from 'theme-ui'

type Props = {
  size?: string
  isVertical?: boolean
  isTransparent?: boolean
  bg?: string
  pushSx?: SxStyleProp
  mx?: string
  my?: string
  mb?: string
  mt?: string
}

export const Divider: React.FC<Props> = ({
  size = '8',
  isVertical = false,
  isTransparent = false,
  bg = 'gray.1',
  pushSx,
  mx,
  my,
  mb,
  mt
}) => (
  <Box
    sx={{
      bg: isTransparent ? 'transparent' : bg,
      width: isVertical ? '1px' : size,
      height: isVertical ? size : '1px',
      mx,
      my,
      mb,
      mt,
      ...pushSx
    }}
  />
)
