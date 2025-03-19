package com.example.demo.infrastructure.db.jpa;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "customer_customer_id_seq")
    @SequenceGenerator(name = "customer_customer_id_seq", sequenceName = "customer_customer_id_seq", allocationSize = 1)
    @Column(nullable = false, name = "customer_id")
    private Long customerId;

    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "phone")
    private String phone;
    @Column(name = "address")
    private String address;
    @Column(name = "city")
    private String city;
    @Column(name = "state")
    private String state;
    @Column(name = "country")
    private String country;
    @Column(name = "company")
    private String company;
    @Column(name = "postal_code")
    private String postalCode;
    @Column(name = "fax")
    private String fax;

}
