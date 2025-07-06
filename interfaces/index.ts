export interface ButtonProps {
	label: string;
	onClick?: () => void;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
}

export interface CardProps {
	title: string;
	description?: string;
	imageUrl?: string;
	onClick?: () => void;
	className?: string;
	children?: React.ReactNode;
}