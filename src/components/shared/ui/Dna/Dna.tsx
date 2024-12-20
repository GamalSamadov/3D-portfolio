'use client'

import React, { useState } from 'react'
import { DnaModel } from '@/components/shared/ui/Dna/DnaModel'
import { Suspense } from 'react'
import CanvasLoader from '@/components/shared/ui/CanvasLoader/CanvasLoader'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './Laptop.module.scss'
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
export default function Dna() {
	const { scrollYProgress } = useScroll()

	const rotationXTransform = useTransform(scrollYProgress, [0, 1], [-10, 10])

	const [rotationX, setRotationX] = useState(-10)

	useMotionValueEvent(rotationXTransform, 'change', latest => {
		setRotationX(latest)
	})

	return (
		<div className={styles.laptop}>
			<Canvas>
				<Suspense fallback={<CanvasLoader />}>
					<PerspectiveCamera makeDefault position={[0, 0, 30]} />
					<directionalLight
						color='#98bfff'
						position={[20, 3, 5]}
						intensity={300}
					/>
					<DnaModel
						scale={4}
						position={[7, -3.4, 15]}
						rotation={[rotationX, 2.5, 1.1]}
					/>
				</Suspense>
			</Canvas>
		</div>
	)
}
