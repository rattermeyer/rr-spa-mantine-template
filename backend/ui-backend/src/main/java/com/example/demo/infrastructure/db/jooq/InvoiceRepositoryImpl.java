package com.example.demo.infrastructure.db.jooq;

import com.example.demo.domain.InvoiceRepository;
import org.jooq.DSLContext;
import org.springframework.stereotype.Component;

import static com.example.demo.infrastructure.db.jooq.Tables.INVOICE;
import static com.example.demo.infrastructure.db.jooq.Tables.INVOICE_LINE;

@Component
public class InvoiceRepositoryImpl implements InvoiceRepository {

    private final DSLContext dsl;

    public InvoiceRepositoryImpl(DSLContext dsl) {
        this.dsl = dsl;
    }

    @Override
    public void deleteInvoiceByCustomerId(Integer id) {
        dsl.deleteFrom(INVOICE)
                .where(INVOICE.CUSTOMER_ID.eq(id))
                .execute();
    }

    @Override
    public void deleteInvoiceLineByCustomerId(Integer id) {
        dsl.deleteFrom(INVOICE_LINE)
                .where(INVOICE_LINE.INVOICE_ID.in(
                        dsl.select(INVOICE.INVOICE_ID)
                                .from(INVOICE)
                                .where(INVOICE.CUSTOMER_ID.eq(id))
                ))
                .execute();
    }
}
