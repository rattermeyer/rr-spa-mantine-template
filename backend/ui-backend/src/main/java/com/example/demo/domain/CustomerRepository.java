package com.example.demo.domain;

import com.example.demo.domain.model.Customer;

import java.util.List;

public interface CustomerRepository {
    List<Customer> loadCustomers();

    Customer createCustomer(Customer customer);

    void deleteCustomerById(Integer id);

    Customer getCustomerById(Integer id);
}
