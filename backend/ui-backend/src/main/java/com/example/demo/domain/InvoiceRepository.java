package com.example.demo.domain;

import com.example.demo.infrastructure.db.jpa.Invoice;
import org.springframework.data.repository.CrudRepository;

public interface InvoiceRepository extends CrudRepository<Invoice, Long> {
}
