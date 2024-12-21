'use client'

import styles from './About.module.scss'
import { motion } from 'framer-motion'

export default function About() {
	return (
		<section className={styles.about}>
			<div className={styles.about_me}>
				<span>About me</span>
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
				/>
			</div>

			<div className={styles.texts}>
				<div className={styles.text}>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
						illum, a quidem fugiat dignissimos voluptatibus officiis quaerat
						excepturi nulla accusamus, esse, fugit commodi! Quibusdam adipisci
						rem facere harum minus perspiciatis? Lorem, ipsum dolor sit amet
						consectetur adipisicing elit. Ipsum illum, a quidem fugiat
						dignissimos voluptatibus officiis quaerat excepturi nulla accusamus,
						esse, fugit commodi! Quibusdam adipisci rem facere harum minus
						perspiciatis?
					</p>
				</div>
				<div className={styles.text}>
					<h3>Lorem ipsum dolor sit amet</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
						illum, a quidem fugiat dignissimos voluptatibus officiis quaerat
						excepturi nulla accusamus, esse, fugit commodi! Quibusdam adipisci
						rem facere harum minus perspiciatis?
					</p>
				</div>
				<div className={styles.text}>
					<h3>Lorem ipsum dolor sit amet</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
						illum, a quidem fugiat dignissimos voluptatibus officiis quaerat
						excepturi nulla accusamus, esse, fugit commodi! Quibusdam adipisci
						rem facere harum minus perspiciatis?
					</p>
				</div>
			</div>
		</section>
	)
}
