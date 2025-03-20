package com.example.demo.domain;

import com.example.demo.infrastructure.db.jooq.InvoiceRepositoryImpl;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class InvoiceService {
    private final InvoiceRepositoryImpl repository;

    public InvoiceService(InvoiceRepositoryImpl repository) {
        this.repository = repository;
    }

    public void deleteInvoicesByCustomerId(Integer id) {
        repository.deleteInvoiceLineByCustomerId(id);
        repository.deleteInvoiceByCustomerId(id);
    }
}
