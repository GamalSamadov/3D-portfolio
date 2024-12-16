import { useState, useEffect, useRef, RefObject } from 'react'

// Define the options type for Intersection Observer
interface IntersectionObserverOptions {
	root?: Element | null
	rootMargin?: string
	threshold?: number | number[]
}

type UseInViewportReturn = [RefObject<HTMLDivElement>, boolean]

const useInViewport = (
	options: IntersectionObserverOptions
): UseInViewportReturn => {
	const [isInView, setIsInView] = useState(false)
	const elementRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsInView(entry.isIntersecting)
		}, options)

		if (elementRef.current) {
			observer.observe(elementRef.current)
		}

		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current)
			}
		}
	}, [options])

	return [elementRef, isInView]
}

export default useInViewport
