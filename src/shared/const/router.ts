

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
	ARTICLES = 'articles',
	ARTICLE_DETAILS = 'article_details',
	ARTICLE_CREATE = 'article_create',
	ARTICLE_EDIT = 'article_edit',
	ADMIN_PANEL = 'admin_panel',


	FORBIDDEN = 'forbidden',
	//last page
	NOT_FOUND = 'notFound'

}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile/',
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLE_DETAILS]: '/articles/',
	[AppRoutes.ARTICLE_CREATE]: '/articles/new',
	[AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
	[AppRoutes.ADMIN_PANEL]: '/admin',
	[AppRoutes.FORBIDDEN]: '/forbidden',

	//last route
	[AppRoutes.NOT_FOUND]: '*',
}
