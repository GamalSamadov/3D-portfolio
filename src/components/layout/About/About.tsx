import styles from './About.module.scss'
import useInViewport from '@/hooks/useInViewport'

export default function About() {
	const [ref, isInView] = useInViewport({
		root: null,
		rootMargin: '0px',
		threshold: 1,
	})

	console.log(isInView)

	return (
		<section ref={ref} className={styles.about}>
			About
		</section>
	)
}
