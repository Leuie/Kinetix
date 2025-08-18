
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/achievements" | "/auth" | "/privacy" | "/progress" | "/schedule" | "/settings" | "/terms" | "/trophy-wall";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/achievements": Record<string, never>;
			"/auth": Record<string, never>;
			"/privacy": Record<string, never>;
			"/progress": Record<string, never>;
			"/schedule": Record<string, never>;
			"/settings": Record<string, never>;
			"/terms": Record<string, never>;
			"/trophy-wall": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/achievements" | "/auth" | "/privacy" | "/progress" | "/schedule" | "/settings" | "/terms" | "/trophy-wall";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): never;
	}
}