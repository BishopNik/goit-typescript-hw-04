/** @format */

export type Props = {
	children: React.ReactNode;
	onContentEndVisible: () => void;
};

export type Ref = HTMLDivElement | null;

export type Options = {
	rootMargin: string;
	threshold: number;
	root: null | HTMLElement;
};

export type State = {
	isRequestInProgress: boolean;
	requestStep: string;
};

export type Action = {
	type: string;
};
