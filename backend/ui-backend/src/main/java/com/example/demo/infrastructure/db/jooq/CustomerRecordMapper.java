package com.example.demo.infrastructure.db.jooq;

import com.example.demo.domain.model.Customer;
import com.example.demo.infrastructure.db.jooq.tables.records.CustomerRecord;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface CustomerRecordMapper {
    @Mapping(target = "supportRepId", ignore = true)
    CustomerRecord toRecord(Customer customer);
    Customer toDomain(CustomerRecord record);
}
