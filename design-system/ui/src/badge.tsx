import { cva } from '@monorepo/styled/css'
import type { RecipeVariantProps } from '@monorepo/styled/css'

const badgeRecipe = cva({
  base: {
    display: 'inline-flex',
    color: 'white',
    fontSize: '21px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'sm',
    lineHeight: '1.33',
    px: '2',
  },
  variants: {
    status: {
      neutral: {
        colorPalette: 'gray',
      },
      info: {
        colorPalette: 'purple',
      },
      success: {
        colorPalette: 'purple',
      },
      error: {
        colorPalette: 'red',
      },
    },
    kind: {
      solid: {
        bg: 'colorPalette.500',
      },
      outline: {
        borderWidth: '2px',
        borderColor: 'colorPalette.400',
        color: 'colorPalette.500',
      },
    },
  },
  defaultVariants: {
    status: 'info',
    kind: 'outline',
  },
})

export type BadgeProps = React.ComponentProps<'div'> &
  RecipeVariantProps<typeof badgeRecipe>

export const Badge = (props: BadgeProps) => {
  const [recipeProps, componentProps] = badgeRecipe.splitVariantProps(props)
  console.log('componentProps: ', componentProps)

  return (
    <div className={badgeRecipe(recipeProps)}>{componentProps.children}</div>
  )
}
