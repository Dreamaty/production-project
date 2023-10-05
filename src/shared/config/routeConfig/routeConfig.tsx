import { AboutPage } from 'pages/AboutPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NofFoundpage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
}

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
	ARTICLES = 'articles',
	ARTICLE_DETAILS = 'articleDetails',
	//last page
	NOT_FOUND = 'notFound',

}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
	//last route
	[AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath.profile,
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLES]: {
		path: RoutePath.articles,
		element: <ArticlesPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_DETAILS]:{
		path: `${RoutePath.articleDetails}:id`,
		element: <ArticleDetailsPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.notFound,
		element: <NotFoundPage />,
	},
}
