import { Dispatch, SetStateAction } from "react";
import { GetClimbSpotsQuery } from "../graphql/generated";

export interface HeaderProps {
	themeDark: boolean;
	setThemeDark: Dispatch<SetStateAction<boolean>>;
}

export interface SidebarProps {
	themeDark: boolean;
	setThemeDark: Dispatch<SetStateAction<boolean>>;
}

export interface DescriptionProps {
	boulderSlug: string;
	themeDark: boolean;
	setThemeDark: Dispatch<SetStateAction<boolean>>;
}

export type BoulderProps = {
	themeDark: boolean;
	setThemeDark: Dispatch<SetStateAction<boolean>>;
} & GetClimbSpotsQuery;
