import { render, waitFor } from '@testing-library/react'
import { useEffect } from 'react'
import { useMaterialsForPoint } from '../../hooks/useMaterialsForPoint'

Object.assign(global, { fetch: jest.fn() })
Object.assign(window, { alert: jest.fn() })

describe('useMaterialsForPoint', () => {
  const resultLogger = jest.fn()
  const App = ({ pointId }) => {
    const result = useMaterialsForPoint(pointId)
    useEffect(() => {
      resultLogger(result)
    }, [result])
    return <div />
  }
  const setUp = (pointId) => render(<App pointId={pointId} />)

  it('should return an array of materials if fetching succeeds', async () => {
    const mockResult = ['mockResult']
    fetch.mockResolvedValue({ json: () => mockResult })

    setUp('mockId')

    await waitFor(() => {
      expect(resultLogger).toHaveBeenLastCalledWith(mockResult)
    })
  })

  it('should alert the user if fetching fails', async () => {
    fetch.mockRejectedValue()

    setUp('mockId')

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalled()
    })
  })
})
