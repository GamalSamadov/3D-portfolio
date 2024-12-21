import { motion } from 'framer-motion'
import styles from './Project.module.scss'

interface Props {
	title: string
	description: string
	x: number
}

export function Project({ title, description, x }: Props) {
	return (
		<motion.div initial={{ x: 0 }} animate={{ x }} className={styles.project}>
			<h3>{title}</h3>
			<p>{description}</p>
		</motion.div>
	)
}
