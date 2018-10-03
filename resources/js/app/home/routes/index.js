import { Dashboard } from '../components/'

export default [
	{
		path: '/',
		component: Dashboard,
		name: 'home',
		meta: {
			guest: false,
			needsAuth: true
		}
	}
]
