package com.example.demo.domain;

public interface InvoiceRepository {
    void deleteInvoiceByCustomerId(Integer id);

    void deleteInvoiceLineByCustomerId(Integer id);
}
