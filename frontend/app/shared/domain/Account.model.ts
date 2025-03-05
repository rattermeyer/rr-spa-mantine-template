import type { OAuth2Tokens } from "arctic";
import type { Json } from "~/shared/domain/JsonTypes";

export type CreateAccount = {
	uuid?: string;
	email: string;
	name: string;
	passwordHash: string | undefined;
};
export type Account = CreateAccount & {
	uuid: string;
	emailVerified: boolean;
	passwordHash: string;
	preferences?: Json;
	roles?: string[];
	tokens?: OAuth2Tokens;
};
