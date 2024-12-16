import { ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine'
import { useMemo } from 'react'

export default function useOptions() {
	const options: ISourceOptions = useMemo(
		() => ({
			background: {},
			fpsLimit: 120,

			particles: {
				color: {
					value: '#88b0ff',
				},
				move: {
					direction: MoveDirection.none,
					enable: true,
					outModes: {
						default: OutMode.out,
					},
					random: false,
					speed: 0.4,
					straight: false,
				},
				number: {
					value: 100,
				},
				opacity: {
					value: 0.8,
				},
				shape: {
					type: 'circle',
				},
				size: {
					value: { min: 0.1, max: 1.4 },
				},
			},
			detectRetina: true,
		}),
		[]
	)

	return options
}
