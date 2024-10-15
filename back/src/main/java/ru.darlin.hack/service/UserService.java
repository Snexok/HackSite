package ru.darlin.hack.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import ru.darlin.hack.entity.UserEntity;

import java.util.List;

public interface UserService {
    UserEntity getByUsername(String username);
    UserEntity getByLogin(String login);
    UserEntity create(UserEntity userEntity);
    List<UserEntity> getAll();
    UserDetailsService userDetailsService();
}
