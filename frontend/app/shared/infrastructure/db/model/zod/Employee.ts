// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { z } from 'zod';

/** Identifier type for employee */
export type EmployeeId = number & { __flavor?: 'EmployeeId' };

/** Represents the table chinook.employee */
export interface Employee {
  /** Database type: pg_catalog.int4 */
  employeeId: EmployeeId;

  /** Database type: pg_catalog.varchar */
  lastName: string;

  /** Database type: pg_catalog.varchar */
  firstName: string;

  /** Database type: pg_catalog.varchar */
  title: string | null;

  /** Database type: pg_catalog.int4 */
  reportsTo: EmployeeId | null;

  /** Database type: pg_catalog.timestamp */
  birthDate: Date | null;

  /** Database type: pg_catalog.timestamp */
  hireDate: Date | null;

  /** Database type: pg_catalog.varchar */
  address: string | null;

  /** Database type: pg_catalog.varchar */
  city: string | null;

  /** Database type: pg_catalog.varchar */
  state: string | null;

  /** Database type: pg_catalog.varchar */
  country: string | null;

  /** Database type: pg_catalog.varchar */
  postalCode: string | null;

  /** Database type: pg_catalog.varchar */
  phone: string | null;

  /** Database type: pg_catalog.varchar */
  fax: string | null;

  /** Database type: pg_catalog.varchar */
  email: string | null;
}

/** Represents the initializer for the table chinook.employee */
export interface EmployeeInitializer {
  /**
   * Database type: pg_catalog.int4
   * Default value: nextval('employee_employee_id_seq'::regclass)
   */
  employeeId?: EmployeeId;

  /** Database type: pg_catalog.varchar */
  lastName: string;

  /** Database type: pg_catalog.varchar */
  firstName: string;

  /** Database type: pg_catalog.varchar */
  title?: string | null;

  /** Database type: pg_catalog.int4 */
  reportsTo?: EmployeeId | null;

  /** Database type: pg_catalog.timestamp */
  birthDate?: Date | null;

  /** Database type: pg_catalog.timestamp */
  hireDate?: Date | null;

  /** Database type: pg_catalog.varchar */
  address?: string | null;

  /** Database type: pg_catalog.varchar */
  city?: string | null;

  /** Database type: pg_catalog.varchar */
  state?: string | null;

  /** Database type: pg_catalog.varchar */
  country?: string | null;

  /** Database type: pg_catalog.varchar */
  postalCode?: string | null;

  /** Database type: pg_catalog.varchar */
  phone?: string | null;

  /** Database type: pg_catalog.varchar */
  fax?: string | null;

  /** Database type: pg_catalog.varchar */
  email?: string | null;
}

/** Represents the mutator for the table chinook.employee */
export interface EmployeeMutator {
  /** Database type: pg_catalog.int4 */
  employeeId?: EmployeeId;

  /** Database type: pg_catalog.varchar */
  lastName?: string;

  /** Database type: pg_catalog.varchar */
  firstName?: string;

  /** Database type: pg_catalog.varchar */
  title?: string | null;

  /** Database type: pg_catalog.int4 */
  reportsTo?: EmployeeId | null;

  /** Database type: pg_catalog.timestamp */
  birthDate?: Date | null;

  /** Database type: pg_catalog.timestamp */
  hireDate?: Date | null;

  /** Database type: pg_catalog.varchar */
  address?: string | null;

  /** Database type: pg_catalog.varchar */
  city?: string | null;

  /** Database type: pg_catalog.varchar */
  state?: string | null;

  /** Database type: pg_catalog.varchar */
  country?: string | null;

  /** Database type: pg_catalog.varchar */
  postalCode?: string | null;

  /** Database type: pg_catalog.varchar */
  phone?: string | null;

  /** Database type: pg_catalog.varchar */
  fax?: string | null;

  /** Database type: pg_catalog.varchar */
  email?: string | null;
}

export const employeeId = z.number() as unknown as z.Schema<EmployeeId>;

export const employee = z.object({
  employeeId: employeeId,
  lastName: z.string(),
  firstName: z.string(),
  title: z.string().nullable(),
  reportsTo: employeeId.nullable(),
  birthDate: z.date().nullable(),
  hireDate: z.date().nullable(),
  address: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  country: z.string().nullable(),
  postalCode: z.string().nullable(),
  phone: z.string().nullable(),
  fax: z.string().nullable(),
  email: z.string().nullable(),
}) as unknown as z.Schema<Employee>;

export const employeeInitializer = z.object({
  employeeId: employeeId.optional(),
  lastName: z.string(),
  firstName: z.string(),
  title: z.string().optional().nullable(),
  reportsTo: employeeId.optional().nullable(),
  birthDate: z.date().optional().nullable(),
  hireDate: z.date().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  fax: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
}) as unknown as z.Schema<EmployeeInitializer>;

export const employeeMutator = z.object({
  employeeId: employeeId.optional(),
  lastName: z.string().optional(),
  firstName: z.string().optional(),
  title: z.string().optional().nullable(),
  reportsTo: employeeId.optional().nullable(),
  birthDate: z.date().optional().nullable(),
  hireDate: z.date().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  fax: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
}) as unknown as z.Schema<EmployeeMutator>;
