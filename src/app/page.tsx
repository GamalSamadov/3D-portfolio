'use client'

import Hero from '@/components/layout/Hero/Hero'
import styles from './main.module.scss'
import Dna from '@/components/shared/ui/Dna/Dna'
import { useEffect } from 'react'
import Lenis from 'lenis'
import About from '@/components/layout/About/About'
import { Leva } from 'leva'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { inViewAtom } from '@/store/inView'

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	})

	const { scrollYProgress } = useScroll()

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	})

	const inView = useAtomValue(inViewAtom)

	console.log(inView)

	return (
		<>
			<motion.div className={styles.progress_bar} style={{ scaleX }} />
			<Leva />
			<div className={styles.bg}></div>
			<main className={styles.main}>
				<Dna />
				<Hero />
				<About />
			</main>
		</>
	)
}
