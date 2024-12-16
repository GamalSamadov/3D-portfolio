'use client'

import React from 'react'
import { DnaModel } from '@/components/shared/ui/Dna/DnaModel'
import { Suspense } from 'react'
import CanvasLoader from '@/components/shared/ui/CanvasLoader/CanvasLoader'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './Laptop.module.scss'
import { useControls } from 'leva'
import { useScroll } from 'framer-motion'

export default function Dna() {
	const { scrollYProgress } = useScroll()

	console.log(scrollYProgress)

	const x = useControls('DnaModel', {
		positionX: {
			value: -8.3,
			min: -10,
			max: 10,
		},
		positionY: {
			value: -10.0,
			min: -10,
			max: 10,
		},
		positionZ: {
			value: 6.7,
			min: -10,
			max: 10,
		},
		rotationX: {
			value: -0.9,
			min: -10,
			max: 10,
		},
		rotationY: {
			value: -1.1,
			min: -10,
			max: 10,
		},
		rotationZ: {
			value: 1.1,
			min: -10,
			max: 10,
		},
		scale: {
			value: 11,
			min: 1,
			max: 100,
		},
	})

	return (
		<div className={styles.laptop}>
			<Canvas>
				<Suspense fallback={<CanvasLoader />}>
					<PerspectiveCamera makeDefault position={[0, 0, 30]} />
					<directionalLight
						color='#98bfff'
						position={[2, 3, 5]}
						intensity={300}
					/>
					<DnaModel
						// scale={10}
						// position={[7.1, -6.7, 7.7]}
						// rotation={[0.1, -0.9, 1.7]}
						scale={x.scale}
						position={[x.positionX, x.positionY, x.positionZ]}
						rotation={[x.rotationX, x.rotationY, x.rotationZ]}
					/>
				</Suspense>
			</Canvas>
		</div>
	)
}
