// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { artistId, type ArtistId } from './Artist';
import { z } from 'zod';

/** Identifier type for album */
export type AlbumId = number & { __flavor?: 'AlbumId' };

/** Represents the table chinook.album */
export interface Album {
  /** Database type: pg_catalog.int4 */
  albumId: AlbumId;

  /** Database type: pg_catalog.varchar */
  title: string;

  /** Database type: pg_catalog.int4 */
  artistId: ArtistId;
}

/** Represents the initializer for the table chinook.album */
export interface AlbumInitializer {
  /**
   * Database type: pg_catalog.int4
   * Default value: nextval('album_album_id_seq'::regclass)
   */
  albumId?: AlbumId;

  /** Database type: pg_catalog.varchar */
  title: string;

  /** Database type: pg_catalog.int4 */
  artistId: ArtistId;
}

/** Represents the mutator for the table chinook.album */
export interface AlbumMutator {
  /** Database type: pg_catalog.int4 */
  albumId?: AlbumId;

  /** Database type: pg_catalog.varchar */
  title?: string;

  /** Database type: pg_catalog.int4 */
  artistId?: ArtistId;
}

export const albumId = z.number() as unknown as z.Schema<AlbumId>;

export const album = z.object({
  albumId: albumId,
  title: z.string(),
  artistId: artistId,
}) as unknown as z.Schema<Album>;

export const albumInitializer = z.object({
  albumId: albumId.optional(),
  title: z.string(),
  artistId: artistId,
}) as unknown as z.Schema<AlbumInitializer>;

export const albumMutator = z.object({
  albumId: albumId.optional(),
  title: z.string().optional(),
  artistId: artistId.optional(),
}) as unknown as z.Schema<AlbumMutator>;
