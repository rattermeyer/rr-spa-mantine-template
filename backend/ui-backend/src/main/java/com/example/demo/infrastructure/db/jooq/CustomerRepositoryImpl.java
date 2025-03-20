package com.example.demo.infrastructure.db.jooq;

import com.example.demo.domain.model.Customer;
import com.example.demo.infrastructure.db.jooq.tables.records.CustomerRecord;
import org.jooq.DSLContext;
import org.jooq.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

import static com.example.demo.infrastructure.db.jooq.tables.Customer.CUSTOMER;

@Component
public class CustomerRepositoryImpl implements com.example.demo.domain.CustomerRepository {
    private final DSLContext dsl;
    private final CustomerRecordMapper mapper;

    @Autowired
    public CustomerRepositoryImpl(DSLContext dsl, CustomerRecordMapper mapper) {
        this.dsl = dsl;
        this.mapper = mapper;
    }

    @Override
    public List<Customer> loadCustomers() {
        Result<CustomerRecord> result = dsl.selectFrom(CUSTOMER).fetch();
        return result.stream().map(mapper::toDomain).toList();
    }

    @Override
    public Customer createCustomer(Customer customer) {
        CustomerRecord record = mapper.toRecord(customer);
        CustomerRecord result = dsl.insertInto(CUSTOMER).set(record).returning().fetchOne();
        return mapper.toDomain(result);
    }

    @Override
    public void deleteCustomerById(Integer id) {
        dsl.deleteFrom(CUSTOMER).where(CUSTOMER.CUSTOMER_ID.eq(id)).execute();
    }

    @Override
    public Customer getCustomerById(Integer id) {
        var result = dsl.selectFrom(CUSTOMER).where(CUSTOMER.CUSTOMER_ID.eq(id)).fetchOne();
        return mapper.toDomain(result);
    }
}
