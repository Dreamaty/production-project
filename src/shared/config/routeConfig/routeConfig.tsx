import { AboutPage } from 'pages/AboutPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
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
	ARTICLE_DETAILS = 'article_details',
	ARTICLE_CREATE = 'article_create',
	ARTICLE_EDIT = 'article_edit',
	//last page
	NOT_FOUND = 'notFound',

}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile/',
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLE_DETAILS]: '/articles/',
	[AppRoutes.ARTICLE_CREATE]: '/articles/new',
	[AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',

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
		path: `${RoutePath.profile}:id`,
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLES]: {
		path: RoutePath.articles,
		element: <ArticlesPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: `${RoutePath.article_details}:id`,
		element: <ArticleDetailsPage />,
	},
	[AppRoutes.ARTICLE_CREATE]: {
		path: `${RoutePath.article_create}`,
		element: <ArticleEditPage />,
	},
	[AppRoutes.ARTICLE_EDIT]: {
		path: `${RoutePath.article_edit}`,
		element: <ArticleEditPage />,
	},

	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.notFound,
		element: <NotFoundPage />,
	},
}
