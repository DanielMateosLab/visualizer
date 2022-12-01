import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ArrowButton from '../../components/ArrowButton'

describe('ArrowButton', () => {
  const setUp = (customProps) => {
    render(
      <ArrowButton
        accessibilityText=''
        direction='up'
        onClick={() => {}}
        {...customProps}
      />
    )

    return {
      user: userEvent.setup()
    }
  }

  it('should render the given accessibility text', () => {
    const accessibilityText = 'mockAccessibilityText'
    setUp({ accessibilityText })

    expect(screen.getByText(accessibilityText)).toBeInTheDocument()
  })

  it('should call the given onClick function when clicked', async () => {
    const onClick = jest.fn()
    const { user } = setUp({ onClick })

    await user.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalled()
  })
})
