// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { z } from 'zod';

/** Identifier type for role */
export type Uuid = number & { __flavor?: 'Uuid' };

/** Represents the table chinook.role */
export interface Role {
  /** Database type: pg_catalog.uuid */
  uuid: Uuid;

  /** Database type: pg_catalog.varchar */
  name: string;
}

/** Represents the initializer for the table chinook.role */
export interface RoleInitializer {
  /**
   * Database type: pg_catalog.uuid
   * Default value: uuid_generate_v7()
   */
  uuid?: Uuid;

  /** Database type: pg_catalog.varchar */
  name: string;
}

/** Represents the mutator for the table chinook.role */
export interface RoleMutator {
  /** Database type: pg_catalog.uuid */
  uuid?: Uuid;

  /** Database type: pg_catalog.varchar */
  name?: string;
}

export const uuid = z.string() as unknown as z.Schema<Uuid>;

export const role = z.object({
  uuid: uuid,
  name: z.string(),
}) as unknown as z.Schema<Role>;

export const roleInitializer = z.object({
  uuid: uuid.optional(),
  name: z.string(),
}) as unknown as z.Schema<RoleInitializer>;

export const roleMutator = z.object({
  uuid: uuid.optional(),
  name: z.string().optional(),
}) as unknown as z.Schema<RoleMutator>;
