// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { z } from 'zod';

/** Identifier type for media_type */
export type MediaTypeId = number & { __flavor?: 'MediaTypeId' };

/** Represents the table chinook.media_type */
export interface MediaType {
  /** Database type: pg_catalog.int4 */
  mediaTypeId: MediaTypeId;

  /** Database type: pg_catalog.varchar */
  name: string | null;
}

/** Represents the initializer for the table chinook.media_type */
export interface MediaTypeInitializer {
  /**
   * Database type: pg_catalog.int4
   * Default value: nextval('media_type_media_type_id_seq'::regclass)
   */
  mediaTypeId?: MediaTypeId;

  /** Database type: pg_catalog.varchar */
  name?: string | null;
}

/** Represents the mutator for the table chinook.media_type */
export interface MediaTypeMutator {
  /** Database type: pg_catalog.int4 */
  mediaTypeId?: MediaTypeId;

  /** Database type: pg_catalog.varchar */
  name?: string | null;
}

export const mediaTypeId = z.number() as unknown as z.Schema<MediaTypeId>;

export const mediaType = z.object({
  mediaTypeId: mediaTypeId,
  name: z.string().nullable(),
}) as unknown as z.Schema<MediaType>;

export const mediaTypeInitializer = z.object({
  mediaTypeId: mediaTypeId.optional(),
  name: z.string().optional().nullable(),
}) as unknown as z.Schema<MediaTypeInitializer>;

export const mediaTypeMutator = z.object({
  mediaTypeId: mediaTypeId.optional(),
  name: z.string().optional().nullable(),
}) as unknown as z.Schema<MediaTypeMutator>;
