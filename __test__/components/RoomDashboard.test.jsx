import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RoomDashboard from '../../components/RoomDashboard'

describe('RoomDashboard', () => {
  const setUp = (customProps) => {
    render(
      <RoomDashboard
        imgSrc='/test.png'
        points={{}}
        allPointIds={[]}
        setMaterialsMenuPoint={() => {}}
        settings={{}}
        {...customProps}
      />
    )

    return {
      user: userEvent.setup()
    }
  }

  it('should render the given img', () => {
    const imgSrc = '/image.png'
    setUp({ imgSrc })

    expect(screen.getByRole('img').getAttribute('src')).toMatch('image.png')
  })

  it('should render the given points', () => {
    const points = {
      mockPoint1: {
        coordX: 0,
        coordY: 0,
        name: 'mockName1',
        onClick: () => {}
      },
      mockPoint2: {
        coordX: 0,
        coordY: 0,
        name: 'mockName2',
        onClick: () => {}
      }
    }
    const allPointIds = Object.keys(points)

    setUp({ points, allPointIds })

    allPointIds.forEach((pointId) => {
      expect(screen.getByText(points[pointId].name)).toBeInTheDocument()
    })
  })

  it('should call the given setMaterialsMenuPoint function when a point is clicked', async () => {
    const setSelectedPoint = jest.fn()
    const points = {
      mockPoint1: {
        coordX: 0,
        coordY: 0,
        name: 'mockName1',
        onClick: () => {}
      }
    }
    const allPointIds = Object.keys(points)
    const { user } = setUp({ points, allPointIds, setSelectedPoint })

    await user.click(screen.getByText(points.mockPoint1.name))

    expect(setSelectedPoint).toHaveBeenCalledWith('mockPoint1')
  })

  it('should display the layers of the given settings', () => {
    setUp({
      allPointIds: ['mockPoint1'],
      settings: {
        mockPoint1: {
          name: 'mockName1',
          materialLayer: '/materialLayer.png'
        }
      },
      points: {
        mockPoint1: {
          coordX: 0,
          coordY: 0,
          name: 'mockName1',
          onClick: () => {}
        }
      }
    })

    expect(
      screen.getByAltText('mockName1', { exact: false })
    ).toBeInTheDocument()
  })
})
