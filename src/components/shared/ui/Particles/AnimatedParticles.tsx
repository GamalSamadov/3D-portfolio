'use client'

import { ReactNode } from 'react'
import styles from './AnimatedParticles.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Props {
	children: ReactNode
}

export default function AnimatedParticles({ children }: Props) {
	const { scrollYProgress } = useScroll()

	const translateYStar1 = useTransform(scrollYProgress, [0, 1], [0, -60])
	const translateYStar2 = useTransform(scrollYProgress, [0, 1], [0, -120])
	const translateYStar3 = useTransform(scrollYProgress, [0, 1], [0, -180])

	return (
		<>
			<div className={styles.particlesBg}>
				<motion.div
					className={styles.stars}
					initial={{ y: 0 }}
					animate={{ y: -2000 }}
					transition={{
						duration: 500,
						repeat: Infinity,
						ease: 'linear',
					}}
					style={{
						translateY: translateYStar1,
					}}
				/>
				<motion.div
					className={styles.stars_2}
					initial={{ y: 0 }}
					animate={{ y: -2000 }}
					transition={{
						duration: 350,
						repeat: Infinity,
						ease: 'linear',
					}}
					style={{
						translateY: translateYStar2,
					}}
				/>
				<motion.div
					className={styles.stars_3}
					initial={{ y: 0 }}
					animate={{ y: -2000 }}
					transition={{
						duration: 100,
						repeat: Infinity,
						ease: 'linear',
					}}
					style={{
						translateY: translateYStar3,
					}}
				/>
			</div>
			{children}
		</>
	)
}
