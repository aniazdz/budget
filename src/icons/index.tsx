interface Props {
  variant?: 'fill' | 'thin' | 'light' | 'regular' | 'bold' | 'duotone'
  icon: string
  className?: string
}

// keep alphabetical
export const iconMap = {
  chartLine: 'e154',
  house: 'e2c2',
  list: 'e2f0',
  listMagnifyingGlass: 'ebe0',
  magnifyingGlass: 'e30c',
  plus: 'e3d4',
  plusCircle: 'e3d6',
  plusSquare: 'ed4a',
  sliders: 'e432',
}

const variants = {
  fill: 'font-[PhosphorFill]',
  thin: 'font-[PhosphorThin]',
  light: 'font-[PhosphorLight]',
  regular: 'font-[Phosphor]',
  bold: 'font-[PhosphorBold]',
  duotone: 'font-[PhosphorDuotone]',
}

export function Icon({ variant = 'regular', icon, className }: Props) {
  return (
    <text className={`${variants[variant]} ${className}`}>{`&#x${icon};`}</text>
  )
}
