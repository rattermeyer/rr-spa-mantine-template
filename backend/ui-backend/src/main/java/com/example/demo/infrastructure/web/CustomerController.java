package com.example.demo.infrastructure.web;

import com.example.demo.domain.CustomerRepository;
import com.example.demo.domain.CustomerService;
import com.example.demo.domain.model.Customer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController("customers")
@RequestMapping("/customers")
@CrossOrigin
@Slf4j
public class CustomerController {
    private final CustomerRepository repository;
    private final CustomerService service;

    @Autowired
    public CustomerController(CustomerRepository repository, CustomerService service) {
        this.repository = repository;
        this.service = service;
    }

    @GetMapping(produces = "application/json")
    public List<Customer> loadCustomers() {
        return repository.loadCustomers();
    }

    @GetMapping("/{id}")
    public Customer getCustomerById(@PathVariable Integer id) {
        return repository.getCustomerById(id);
    }

    @PostMapping
    public Customer createCustomer(Customer customer) {
        return repository.createCustomer(customer);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomerById(@PathVariable Integer id) {
        log.info("Deleting customer with id: {}", id);
        service.deleteCustomerById(id);
    }
}
