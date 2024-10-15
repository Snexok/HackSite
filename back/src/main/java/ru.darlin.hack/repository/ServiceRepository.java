package ru.darlin.hack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.darlin.hack.entity.ServiceEntity;

public interface ServiceRepository extends JpaRepository<ServiceEntity, Long> {
}
