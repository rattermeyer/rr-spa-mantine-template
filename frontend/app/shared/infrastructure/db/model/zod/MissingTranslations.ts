// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { z } from "zod";

/** Identifier type for missing_translations */
export type Language = number & { __flavor?: "Language" };

/** Identifier type for missing_translations */
export type Namespace = number & { __flavor?: "Namespace" };

/** Identifier type for missing_translations */
export type Key = number & { __flavor?: "Key" };

/** Represents the table chinook.missing_translations */
export interface MissingTranslations {
	/** Database type: pg_catalog.text */
	language: Language;

	/** Database type: pg_catalog.text */
	namespace: Namespace;

	/** Database type: pg_catalog.text */
	key: Key;

	/** Database type: pg_catalog.text */
	defaultValue: string | null;

	/** Database type: pg_catalog.timestamptz */
	reportedAt: Date | null;
}

/** Represents the initializer for the table chinook.missing_translations */
export interface MissingTranslationsInitializer {
	/** Database type: pg_catalog.text */
	language: Language;

	/** Database type: pg_catalog.text */
	namespace: Namespace;

	/** Database type: pg_catalog.text */
	key: Key;

	/** Database type: pg_catalog.text */
	defaultValue?: string | null;

	/**
	 * Database type: pg_catalog.timestamptz
	 * Default value: now()
	 */
	reportedAt?: Date | null;
}

/** Represents the mutator for the table chinook.missing_translations */
export interface MissingTranslationsMutator {
	/** Database type: pg_catalog.text */
	language?: Language;

	/** Database type: pg_catalog.text */
	namespace?: Namespace;

	/** Database type: pg_catalog.text */
	key?: Key;

	/** Database type: pg_catalog.text */
	defaultValue?: string | null;

	/** Database type: pg_catalog.timestamptz */
	reportedAt?: Date | null;
}

export const language = z.string() as unknown as z.Schema<Language>;

export const namespace = z.string() as unknown as z.Schema<Namespace>;

export const key = z.string() as unknown as z.Schema<Key>;

export const missingTranslations = z.object({
	language: language,
	namespace: namespace,
	key: key,
	defaultValue: z.string().nullable(),
	reportedAt: z.date().nullable(),
}) as unknown as z.Schema<MissingTranslations>;

export const missingTranslationsInitializer = z.object({
	language: language,
	namespace: namespace,
	key: key,
	defaultValue: z.string().optional().nullable(),
	reportedAt: z.date().optional().nullable(),
}) as unknown as z.Schema<MissingTranslationsInitializer>;

export const missingTranslationsMutator = z.object({
	language: language.optional(),
	namespace: namespace.optional(),
	key: key.optional(),
	defaultValue: z.string().optional().nullable(),
	reportedAt: z.date().optional().nullable(),
}) as unknown as z.Schema<MissingTranslationsMutator>;
