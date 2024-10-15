package ru.darlin.hack.service;

import ru.darlin.hack.entity.ServiceEntity;

import java.util.List;

public interface ServiceService {
    ServiceEntity create(ServiceEntity serviceEntity);
    ServiceEntity update(ServiceEntity serviceEntity);
    List<ServiceEntity> getAll();
}
