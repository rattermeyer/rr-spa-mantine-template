// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { z } from "zod";

/** Represents the table chinook.session */
export interface Session {
	/** Database type: pg_catalog.uuid */
	id: string;

	/** Database type: pg_catalog.json */
	data: unknown;

	/** Database type: pg_catalog.timestamptz */
	expires: Date;
}

/** Represents the initializer for the table chinook.session */
export interface SessionInitializer {
	/**
	 * Database type: pg_catalog.uuid
	 * Default value: uuid_generate_v7()
	 */
	id?: string;

	/** Database type: pg_catalog.json */
	data: unknown;

	/**
	 * Database type: pg_catalog.timestamptz
	 * Default value: (now() + '1 day'::interval)
	 */
	expires?: Date;
}

/** Represents the mutator for the table chinook.session */
export interface SessionMutator {
	/** Database type: pg_catalog.uuid */
	id?: string;

	/** Database type: pg_catalog.json */
	data?: unknown;

	/** Database type: pg_catalog.timestamptz */
	expires?: Date;
}

export const session = z.object({
	id: z.string(),
	data: z.unknown(),
	expires: z.date(),
}) as unknown as z.Schema<Session>;

export const sessionInitializer = z.object({
	id: z.string().optional(),
	data: z.unknown(),
	expires: z.date().optional(),
}) as unknown as z.Schema<SessionInitializer>;

export const sessionMutator = z.object({
	id: z.string().optional(),
	data: z.unknown().optional(),
	expires: z.date().optional(),
}) as unknown as z.Schema<SessionMutator>;
