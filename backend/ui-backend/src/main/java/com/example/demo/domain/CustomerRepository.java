package com.example.demo.domain;

import com.example.demo.infrastructure.db.jpa.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface CustomerRepository extends CrudRepository<Customer, Long> {
    @Override
    @RestResource(exported = false)
    void deleteById(Long aLong);
}
