'use client'

import { ReactNode, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import useOptions from './useOptions'

interface Props {
	children: ReactNode
}

export default function AnimatedParticles({ children }: Props) {
	const [init, setInit] = useState(false)
	const options = useOptions()

	useEffect(() => {
		initParticlesEngine(async engine => {
			await loadSlim(engine)
		}).then(() => {
			setInit(true)
		})
	}, [])

	if (init) {
		return (
			<>
				<Particles id='particles' options={options} />
				{children}
			</>
		)
	}
	return <>{children}</>
}
