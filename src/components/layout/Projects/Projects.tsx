'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Project } from './Project/Project'
import styles from './Projects.module.scss'
import { useRef } from 'react'
import { projects } from './Projects.data'

export default function Projects() {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
	})

	const scrollYProgressSpring = useSpring(scrollYProgress, {
		damping: 30,
		restDelta: 0.01,
	})

	const x = useTransform(scrollYProgressSpring, [0, 1], ['130vw', '-100vw'])

	return (
		<section ref={targetRef} className={styles.projects}>
			<div className={styles.title}>
				<h1>Projects</h1>
			</div>
			<div className={styles.container}>
				<div className={styles.sticky_section}>
					<motion.div style={{ x }} className={styles.project_container}>
						{projects.map(({ id, title, description }, i) => {
							console.log()
							return (
								<Project
									title={title}
									description={description}
									key={id}
									x={i + 1}
								/>
							)
						})}
					</motion.div>
				</div>
			</div>
		</section>
	)
}
