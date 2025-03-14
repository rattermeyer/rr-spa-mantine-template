// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { z } from "zod";

/** Identifier type for genre */
export type GenreId = number & { __flavor?: "GenreId" };

/** Represents the table chinook.genre */
export interface Genre {
	/** Database type: pg_catalog.int4 */
	genreId: GenreId;

	/** Database type: pg_catalog.varchar */
	name: string | null;
}

/** Represents the initializer for the table chinook.genre */
export interface GenreInitializer {
	/**
	 * Database type: pg_catalog.int4
	 * Default value: nextval('genre_genre_id_seq'::regclass)
	 */
	genreId?: GenreId;

	/** Database type: pg_catalog.varchar */
	name?: string | null;
}

/** Represents the mutator for the table chinook.genre */
export interface GenreMutator {
	/** Database type: pg_catalog.int4 */
	genreId?: GenreId;

	/** Database type: pg_catalog.varchar */
	name?: string | null;
}

export const genreId = z.number() as unknown as z.Schema<GenreId>;

export const genre = z.object({
	genreId: genreId,
	name: z.string().nullable(),
}) as unknown as z.Schema<Genre>;

export const genreInitializer = z.object({
	genreId: genreId.optional(),
	name: z.string().optional().nullable(),
}) as unknown as z.Schema<GenreInitializer>;

export const genreMutator = z.object({
	genreId: genreId.optional(),
	name: z.string().optional().nullable(),
}) as unknown as z.Schema<GenreMutator>;
