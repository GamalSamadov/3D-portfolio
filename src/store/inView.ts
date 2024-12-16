import { atom } from 'jotai'

export enum InViewNum {
	HERO = 'hero',
	ABOUT = 'about',
	PROJECTS = 'projects',
}

export const inViewAtom = atom(InViewNum.HERO)
