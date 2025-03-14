// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { z } from "zod";
import { type InvoiceId, invoiceId } from "./Invoice";
import { type TrackId, trackId } from "./Track";

/** Identifier type for invoice_line */
export type InvoiceLineId = number & { __flavor?: "InvoiceLineId" };

/** Represents the table chinook.invoice_line */
export interface InvoiceLine {
	/** Database type: pg_catalog.int4 */
	invoiceLineId: InvoiceLineId;

	/** Database type: pg_catalog.int4 */
	invoiceId: InvoiceId;

	/** Database type: pg_catalog.int4 */
	trackId: TrackId;

	/** Database type: pg_catalog.numeric */
	unitPrice: string;

	/** Database type: pg_catalog.int4 */
	quantity: number;
}

/** Represents the initializer for the table chinook.invoice_line */
export interface InvoiceLineInitializer {
	/**
	 * Database type: pg_catalog.int4
	 * Default value: nextval('invoice_line_invoice_line_id_seq'::regclass)
	 */
	invoiceLineId?: InvoiceLineId;

	/** Database type: pg_catalog.int4 */
	invoiceId: InvoiceId;

	/** Database type: pg_catalog.int4 */
	trackId: TrackId;

	/** Database type: pg_catalog.numeric */
	unitPrice: string;

	/** Database type: pg_catalog.int4 */
	quantity: number;
}

/** Represents the mutator for the table chinook.invoice_line */
export interface InvoiceLineMutator {
	/** Database type: pg_catalog.int4 */
	invoiceLineId?: InvoiceLineId;

	/** Database type: pg_catalog.int4 */
	invoiceId?: InvoiceId;

	/** Database type: pg_catalog.int4 */
	trackId?: TrackId;

	/** Database type: pg_catalog.numeric */
	unitPrice?: string;

	/** Database type: pg_catalog.int4 */
	quantity?: number;
}

export const invoiceLineId = z.number() as unknown as z.Schema<InvoiceLineId>;

export const invoiceLine = z.object({
	invoiceLineId: invoiceLineId,
	invoiceId: invoiceId,
	trackId: trackId,
	unitPrice: z.string(),
	quantity: z.number(),
}) as unknown as z.Schema<InvoiceLine>;

export const invoiceLineInitializer = z.object({
	invoiceLineId: invoiceLineId.optional(),
	invoiceId: invoiceId,
	trackId: trackId,
	unitPrice: z.string(),
	quantity: z.number(),
}) as unknown as z.Schema<InvoiceLineInitializer>;

export const invoiceLineMutator = z.object({
	invoiceLineId: invoiceLineId.optional(),
	invoiceId: invoiceId.optional(),
	trackId: trackId.optional(),
	unitPrice: z.string().optional(),
	quantity: z.number().optional(),
}) as unknown as z.Schema<InvoiceLineMutator>;
