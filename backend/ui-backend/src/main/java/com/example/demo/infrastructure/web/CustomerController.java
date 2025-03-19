package com.example.demo.infrastructure.web;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/customers")
public class CustomerController {
    @DeleteMapping("/{customerId}")
    public void deleteById(Long customerId) {

    }
}
