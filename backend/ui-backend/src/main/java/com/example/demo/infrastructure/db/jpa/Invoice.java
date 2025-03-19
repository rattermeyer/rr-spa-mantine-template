package com.example.demo.infrastructure.db.jpa;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "invoice_invoice_id_seq")
    @SequenceGenerator(name="invoice_invoice_id_seq", sequenceName="invoice_invoice_id_seq", allocationSize=1)
    private Long invoiceId;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;
    private LocalDate invoiceDate;
    private String billingAddress;
    private String billingCity;
    private String billingState;
    private String billingCountry;
    private String billingPostalCode;
    private Double total;
    private InvoiceLine[] invoiceLines;

}
