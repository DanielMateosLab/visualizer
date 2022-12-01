import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PointSettingsButton from '../../components/PointSettingsButton'

describe('PointSettingsButton', () => {
  const setUp = (customProps) => {
    render(
      <PointSettingsButton name='' coordX={0} coordY={0} {...customProps} />
    )

    return {
      user: userEvent.setup()
    }
  }

  it('should render a Button with the given accessibility name', () => {
    const testName = 'aaa'
    setUp({ name: testName })

    expect(screen.getByRole('button', { name: testName })).toBeInTheDocument()
  })

  it('should render the button at the given coordinates', () => {
    const testX = 10
    const testY = 20
    setUp({ coordX: testX, coordY: testY })

    expect(screen.getByRole('button')).toHaveStyle({
      top: `${testY}%`,
      left: `${testX}%`
    })
  })

  it('should call props click handler when clicked', async () => {
    const handleClick = jest.fn()
    const { user } = setUp({ onClick: handleClick })

    await user.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalled()
  })
})
