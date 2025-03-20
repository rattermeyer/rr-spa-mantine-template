package com.example.demo.domain;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CustomerService {
    private final CustomerRepository repository;
    private final InvoiceService invoiceService;

    @Autowired
    public CustomerService(CustomerRepository repository, InvoiceService invoiceService) {
        this.repository = repository;
        this.invoiceService = invoiceService;
    }

    public void deleteCustomerById(Integer id) {
        invoiceService.deleteInvoicesByCustomerId(id);
        repository.deleteCustomerById(id);
    }
}
