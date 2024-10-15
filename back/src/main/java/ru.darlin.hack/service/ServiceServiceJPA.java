package ru.darlin.hack.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.darlin.hack.entity.ServiceEntity;
import ru.darlin.hack.repository.ServiceRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class ServiceServiceJPA implements ServiceService {
    private final ServiceRepository repository;

    @Override
    public ServiceEntity create(ServiceEntity serviceEntity) {
        serviceEntity.setCreateDateTime(LocalDateTime.now());
        serviceEntity.setUpdateDateTime(LocalDateTime.now());
        return repository.save(serviceEntity);
    }

    @Override
    public ServiceEntity update(ServiceEntity serviceEntity) {
        serviceEntity.setUpdateDateTime(LocalDateTime.now());
        return repository.save(serviceEntity);
    }

    @Override
    public List<ServiceEntity> getAll() {
        return repository.findAll();
    }

}
