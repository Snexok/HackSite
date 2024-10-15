package ru.darlin.hack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.darlin.hack.entity.UserEntity;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByUsername(String username);
    UserEntity findByLogin(String login);
}
