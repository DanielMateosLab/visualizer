import { useCallback, useEffect, useState } from 'react'

/** Hook that abstracts the logic of fixing the PointSettingsButton coordinates */
export const useCropCorrection = () => {
  const [resizeObserver, setResizeObserver] = useState(null)
  /** Callback ref to be passed to the image container */
  const containerCallback = useCallback(
    (node) => node && resizeObserver && resizeObserver.observe(node),
    [resizeObserver]
  )
  const [originalRatio, setOriginalRatio] = useState(null)
  const [offsetPercentages, setOffsetPercentages] = useState({ x: 0, y: 0 })

  /** Function that gets the original aspect ratio of the target image.
   * Must be passed to the onLoadingComplete prop of the Image component. */
  const handleImageLoadComplete = ({ naturalWidth, naturalHeight }) =>
    setOriginalRatio(naturalWidth / naturalHeight)
  /** Returns the correction percentage for an axis "x" or "y"
   * @param {number} originalPercentage - the original percentage position for the button
   * @param {"x" | "y"} axis - The axis to correct for
   */
  const getCorrectedPercentageForAxis = (originalPercentage, axis) =>
    originalPercentage +
    ((originalPercentage - 50) / 100) * 2 * offsetPercentages[axis]

  useEffect(() => {
    if (originalRatio && window.ResizeObserver) {
      resizeObserver && resizeObserver.disconnect()
      const resizeObserverCallback = (entries) =>
        entries.forEach(({ contentRect: { width, height } }) => {
          const currentRatio = width / height
          if (currentRatio === originalRatio) {
            return setOffsetPercentages({ x: 0, y: 0 })
          }
          if (currentRatio > originalRatio) {
            const totalHeight = width / originalRatio
            const heightCropped = totalHeight - height
            const croppedRatio = heightCropped / totalHeight
            return setOffsetPercentages({ x: 0, y: croppedRatio * 100 })
          }
          if (currentRatio < originalRatio) {
            const totalWidth = height * originalRatio
            const widthCropped = totalWidth - width
            const croppedRatio = widthCropped / totalWidth
            return setOffsetPercentages({ x: croppedRatio * 100, y: 0 })
          }
        })
      setResizeObserver(new window.ResizeObserver(resizeObserverCallback))
    }
  }, [originalRatio])

  return {
    containerCallback,
    handleImageLoadComplete,
    getCorrectedPercentageForAxis,
    offsetPercentages
  }
}
