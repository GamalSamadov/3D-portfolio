'use client'

import { MediaLinks } from '@/components/layout/Hero/ui/MediaLinks/MediaLinks'
import styles from './Hero.module.scss'
import { links } from './links'
import { motion } from 'framer-motion'
export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.top}>
				<h1 className={styles.main_text}>samadov</h1>
				<h3 className={styles.sub_text}>Jamaliddin </h3>
				<p className={styles.text}>Software engineer</p>
			</div>

			<div className={styles.bottom}>
				<div className={styles.icons}>
					<MediaLinks items={links} />
				</div>
				<div className={styles.explore}>
					<span>Scroll to explore</span>
					<motion.span
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: '100%', opacity: 1 }}
						transition={{
							type: 'spring',
							repeat: Infinity,
							repeatType: 'reverse',
							repeatDelay: 0.5,
						}}
						className={styles.border}
					></motion.span>
				</div>
			</div>
		</section>
	)
}
